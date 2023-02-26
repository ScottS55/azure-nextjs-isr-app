import { RatesModel } from "types/rates";

export async function getLatestRates(base: string): Promise<RatesModel> {
    const ratesResult = await fetch(getExchangeRateUrl(base));
    const rates = await ratesResult.json();
    return rates;
}

export const getExchangeRateUrl = (base: string): string => {
    return `https://api.exchangerate.host/latest?base=${base}`
}