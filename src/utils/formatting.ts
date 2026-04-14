export const truncateAddress = (address: string): string => {
if (!address || address.length < 12) return address;
  return `${address.slice(0, 5)}...${address.slice(-4)}`;
};

export const formatCurrency = (amount: number, token: string = 'USDC'): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount).replace('$', '') + ` ${token}`;
};