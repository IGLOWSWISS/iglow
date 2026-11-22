const EUROZONE_COUNTRIES = [
  'AT',
  'BE',
  'CY',
  'EE',
  'FI',
  'FR',
  'DE',
  'GR',
  'IE',
  'IT',
  'LV',
  'LT',
  'LU',
  'MT',
  'NL',
  'PT',
  'SK',
  'SI',
  'ES',
  'HR',
];

let cachedCurrency = null;
let pendingLookup = null;

// Resolves to 'CHF' | 'EUR' | 'GBP' | 'USD' based on the visitor's IP
// location, so the price shown always matches what Stripe will actually
// charge. Cached per page load since it's looked up more than once (hero
// price, CTA, ...).
export function detectCurrency() {
  if (cachedCurrency) {
    return Promise.resolve(cachedCurrency);
  }
  if (!pendingLookup) {
    const lookup = fetch('https://get.geojs.io/v1/ip/country.json')
      .then((res) => res.json())
      .then((data) => {
        const countryCode = data && data.country;
        if (countryCode === 'CH' || countryCode === 'LI') {
          return 'CHF';
        } else if (countryCode === 'GB') {
          return 'GBP';
        } else if (EUROZONE_COUNTRIES.includes(countryCode)) {
          return 'EUR';
        } else if (countryCode) {
          return 'USD';
        }
        return 'CHF';
      })
      .catch(() => 'CHF');

    const timeout = new Promise((resolve) => setTimeout(() => resolve('CHF'), 2500));

    pendingLookup = Promise.race([lookup, timeout]).then((currency) => {
      cachedCurrency = currency;
      return currency;
    });
  }
  return pendingLookup;
}
