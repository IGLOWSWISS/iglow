<?php
ini_set('display_errors', '0');
require_once __DIR__ . '/helpers.php';

iglow_require_method('POST');

$body = iglow_json_body();
$email = trim((string)($body['email'] ?? ''));
$password = (string)($body['password'] ?? '');

if (!filter_var($email, FILTER_VALIDATE_EMAIL) || $password === '') {
    iglow_respond(422, ['error' => 'validation_failed']);
}

$pdo = iglow_db();
$stmt = $pdo->prepare(
    'SELECT id, password_hash, first_name, last_name, phone, address, postal_code, country,
            failed_login_attempts, locked_until
     FROM customers WHERE email = :email'
);
$stmt->execute(['email' => $email]);
$customer = $stmt->fetch();

// Generic error message throughout: never reveal whether the email exists.
$invalidCredentials = ['error' => 'invalid_credentials'];

if (!$customer) {
    iglow_respond(401, $invalidCredentials);
}

if (!empty($customer['locked_until']) && new DateTime($customer['locked_until']) > new DateTime()) {
    iglow_respond(429, ['error' => 'account_locked']);
}

if (!password_verify($password, $customer['password_hash'])) {
    $attempts = (int)$customer['failed_login_attempts'] + 1;
    $lockedUntil = null;
    if ($attempts >= IGLOW_MAX_FAILED_ATTEMPTS) {
        $lockedUntil = (new DateTime('+' . IGLOW_LOCKOUT_MINUTES . ' minutes'))->format('Y-m-d H:i:s');
    }
    $update = $pdo->prepare(
        'UPDATE customers SET failed_login_attempts = :attempts, locked_until = :locked_until WHERE id = :id'
    );
    $update->execute([
        'attempts' => $attempts,
        'locked_until' => $lockedUntil,
        'id' => $customer['id'],
    ]);
    iglow_respond(401, $invalidCredentials);
}

$reset = $pdo->prepare(
    'UPDATE customers SET failed_login_attempts = 0, locked_until = NULL WHERE id = :id'
);
$reset->execute(['id' => $customer['id']]);

iglow_create_session((int)$customer['id']);

iglow_respond(200, [
    'success' => true,
    'customer' => [
        'firstName' => $customer['first_name'],
        'lastName' => $customer['last_name'],
        'email' => $email,
        'phone' => $customer['phone'],
        'address' => $customer['address'],
        'postalCode' => $customer['postal_code'],
        'country' => $customer['country'],
    ],
]);
