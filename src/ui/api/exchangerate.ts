export async function getLatestRates(): Promise<any[]> {
    const ratesResult = await fetch(getExchangeRateUrl('USD'));
    const rates = await ratesResult.json();
    return rates;
}

export const getExchangeRateUrl = (base: string): string => {
    return `https://api.exchangerate.host/latest?base=${base}`
}