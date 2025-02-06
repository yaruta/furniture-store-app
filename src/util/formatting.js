/**
 * Formatter for currency values.
 * This formatter formats numbers into the German currency format (Euro - EUR).
 */
export const currencyFormatter = new Intl.NumberFormat("de-DE", {
    style: 'currency',
    currency: 'EUR'
});