const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export function formatCurrency(number: number | string): string {
  return currencyFormatter.format(parseFloat(number as any) || 0);
}

const numberFormatter = new Intl.NumberFormat('default', {
  notation: 'compact',
  unitDisplay: 'short',
});

export function formatAmount(amount: number | string) {
  const parseAmount = Math.round(parseFloat((amount as any) || 0));
  return numberFormatter.format(parseAmount);
}
