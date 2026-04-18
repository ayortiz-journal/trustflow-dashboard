export const XLM_PRICE = 0.12;

export const getXlmFiatValue = (amount: string | number) => {
    return Number(amount) * XLM_PRICE;
};
