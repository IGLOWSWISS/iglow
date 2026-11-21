<?php
ini_set('display_errors', '0');
require_once __DIR__ . '/helpers.php';

$customer = iglow_current_customer();

if (!$customer) {
    iglow_respond(200, ['authenticated' => false]);
}

iglow_respond(200, [
    'authenticated' => true,
    'customer' => iglow_public_customer($customer),
]);
