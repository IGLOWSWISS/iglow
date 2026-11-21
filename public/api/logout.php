<?php
ini_set('display_errors', '0');
require_once __DIR__ . '/helpers.php';

iglow_require_method('POST');

$token = $_COOKIE[IGLOW_SESSION_COOKIE] ?? '';
if ($token !== '' && preg_match('/^[a-f0-9]{64}$/', $token)) {
    $pdo = iglow_db();
    $stmt = $pdo->prepare('DELETE FROM sessions WHERE token = :token');
    $stmt->execute(['token' => $token]);
}

iglow_clear_session_cookie();
iglow_respond(200, ['success' => true]);
