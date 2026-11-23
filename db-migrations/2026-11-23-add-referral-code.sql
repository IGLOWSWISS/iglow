-- Adds a customer-facing referral code, used for the flat (single-level,
-- non-recursive) backer referral program: every customer gets their own
-- iglow.swiss/go/<code> link after registering, and gets a flat store-credit
-- reward when a friend buys through it. No cascading, no multi-level payout,
-- to stay clear of pyramid-scheme rules (CH: art. 23 LCD).
--
-- Run this once against the live iglow.swiss MySQL database (phpMyAdmin or
-- equivalent via Infomaniak's hosting panel) before deploying the updated
-- register.php / helpers.php / me.php.

ALTER TABLE customers
  ADD COLUMN referral_code VARCHAR(12) NULL AFTER country;

ALTER TABLE customers
  ADD UNIQUE INDEX idx_customers_referral_code (referral_code);

-- Existing customers (registered before this migration) will have a NULL
-- referral_code. They'll get one the next time they log in and call
-- /api/me.php, IF a backfill is added there — see the note in me.php.
