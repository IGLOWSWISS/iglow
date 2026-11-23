<?php
ini_set('display_errors', '0');
require_once __DIR__ . '/helpers.php';

iglow_require_method('POST');

$body = iglow_json_body();

$firstName = trim((string)($body['firstName'] ?? ''));
$lastName = trim((string)($body['lastName'] ?? ''));
$email = trim((string)($body['email'] ?? ''));
$phone = trim((string)($body['phone'] ?? ''));
$address = trim((string)($body['address'] ?? ''));
$addressLine2 = trim((string)($body['addressLine2'] ?? ''));
$postalCode = trim((string)($body['postalCode'] ?? ''));
$city = trim((string)($body['city'] ?? ''));
$country = trim((string)($body['country'] ?? ''));
$password = (string)($body['password'] ?? '');
$consent = (bool)($body['consent'] ?? false);

$errors = [];
if ($firstName === '') $errors['firstName'] = 'required';
if ($lastName === '') $errors['lastName'] = 'required';
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) $errors['email'] = 'invalid';
if ($phone === '') $errors['phone'] = 'required';
if ($address === '') $errors['address'] = 'required';
if ($postalCode === '') $errors['postalCode'] = 'required';
if ($city === '') $errors['city'] = 'required';
if ($country === '') $errors['country'] = 'required';
if (strlen($password) < 8) $errors['password'] = 'too_short';
if (!$consent) $errors['consent'] = 'required';

if (!empty($errors)) {
    iglow_respond(422, ['error' => 'validation_failed', 'fields' => $errors]);
}

$pdo = iglow_db();

$existing = $pdo->prepare('SELECT id FROM customers WHERE email = :email');
$existing->execute(['email' => $email]);
if ($existing->fetch()) {
    iglow_respond(409, ['error' => 'email_taken']);
}

$passwordHash = password_hash($password, PASSWORD_DEFAULT);
$referralCode = iglow_generate_referral_code($pdo);

$insert = $pdo->prepare(
    'INSERT INTO customers (email, password_hash, first_name, last_name, address, address_line2, postal_code, city, country, phone, referral_code)
     VALUES (:email, :password_hash, :first_name, :last_name, :address, :address_line2, :postal_code, :city, :country, :phone, :referral_code)'
);
try {
    $insert->execute([
        'email' => $email,
        'password_hash' => $passwordHash,
        'first_name' => $firstName,
        'last_name' => $lastName,
        'address' => $address,
        'address_line2' => $addressLine2 !== '' ? $addressLine2 : null,
        'postal_code' => $postalCode,
        'city' => $city,
        'country' => $country,
        'phone' => $phone,
        'referral_code' => $referralCode,
    ]);
} catch (PDOException $e) {
    // Unique constraint race: another request registered this email first.
    iglow_respond(409, ['error' => 'email_taken']);
}

$customerId = (int)$pdo->lastInsertId();
iglow_create_session($customerId);

iglow_respond(201, [
    'success' => true,
    'customer' => [
        'firstName' => $firstName,
        'lastName' => $lastName,
        'email' => $email,
        'phone' => $phone,
        'address' => $address,
        'addressLine2' => $addressLine2,
        'postalCode' => $postalCode,
        'city' => $city,
        'country' => $country,
        'referralCode' => $referralCode,
    ],
]);
