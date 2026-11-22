<?php

require_once __DIR__ . '/db.php';

const IGLOW_SESSION_COOKIE = 'iglow_session';
const IGLOW_SESSION_DAYS = 30;
const IGLOW_MAX_FAILED_ATTEMPTS = 5;
const IGLOW_LOCKOUT_MINUTES = 15;

function iglow_json_body(): array
{
    $raw = file_get_contents('php://input');
    $data = json_decode($raw, true);
    return is_array($data) ? $data : [];
}

function iglow_respond(int $status, array $payload): void
{
    http_response_code($status);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($payload);
    exit;
}

function iglow_require_method(string $method): void
{
    if (($_SERVER['REQUEST_METHOD'] ?? '') !== $method) {
        iglow_respond(405, ['error' => 'method_not_allowed']);
    }
}

function iglow_create_session(int $customerId): string
{
    $pdo = iglow_db();
    $token = bin2hex(random_bytes(32));
    $expiresAt = (new DateTime("+" . IGLOW_SESSION_DAYS . " days"))->format('Y-m-d H:i:s');

    $stmt = $pdo->prepare(
        'INSERT INTO sessions (token, customer_id, expires_at) VALUES (:token, :customer_id, :expires_at)'
    );
    $stmt->execute([
        'token' => $token,
        'customer_id' => $customerId,
        'expires_at' => $expiresAt,
    ]);

    setcookie(IGLOW_SESSION_COOKIE, $token, [
        'expires' => time() + IGLOW_SESSION_DAYS * 86400,
        'path' => '/',
        'secure' => true,
        'httponly' => true,
        'samesite' => 'Lax',
    ]);

    return $token;
}

function iglow_clear_session_cookie(): void
{
    setcookie(IGLOW_SESSION_COOKIE, '', [
        'expires' => time() - 3600,
        'path' => '/',
        'secure' => true,
        'httponly' => true,
        'samesite' => 'Lax',
    ]);
}

function iglow_current_customer(): ?array
{
    $token = $_COOKIE[IGLOW_SESSION_COOKIE] ?? '';
    if ($token === '' || !preg_match('/^[a-f0-9]{64}$/', $token)) {
        return null;
    }

    $pdo = iglow_db();
    $stmt = $pdo->prepare(
        'SELECT c.id, c.email, c.first_name, c.last_name, c.phone, c.address, c.address_line2, c.postal_code, c.country
         FROM sessions s
         JOIN customers c ON c.id = s.customer_id
         WHERE s.token = :token AND s.expires_at > NOW()'
    );
    $stmt->execute(['token' => $token]);
    $customer = $stmt->fetch();

    return $customer ?: null;
}

function iglow_public_customer(array $customer): array
{
    return [
        'firstName' => $customer['first_name'],
        'lastName' => $customer['last_name'],
        'email' => $customer['email'],
        'phone' => $customer['phone'],
        'address' => $customer['address'],
        'addressLine2' => $customer['address_line2'],
        'postalCode' => $customer['postal_code'],
        'country' => $customer['country'],
    ];
}
