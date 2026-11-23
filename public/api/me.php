<?php
ini_set('display_errors', '0');
require_once __DIR__ . '/helpers.php';

$customer = iglow_current_customer();

if (!$customer) {
    iglow_respond(200, ['authenticated' => false]);
}

// Backfill: customers registered before the referral program existed have
// no referral_code yet. Generate one the first time they're seen here.
if (empty($customer['referral_code'])) {
    $pdo = iglow_db();
    $referralCode = iglow_generate_referral_code($pdo);
    $update = $pdo->prepare('UPDATE customers SET referral_code = :code WHERE id = :id');
    $update->execute(['code' => $referralCode, 'id' => $customer['id']]);
    $customer['referral_code'] = $referralCode;
}

iglow_respond(200, [
    'authenticated' => true,
    'customer' => iglow_public_customer($customer),
]);
