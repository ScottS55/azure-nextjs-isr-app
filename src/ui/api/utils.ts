import { ExchangeRate } from 'types/rates';

export function parseRates(ratesObject: any): ExchangeRate[] {
  let rates = Object.keys(ratesObject).map(key => {
    let currencyName = key;
    let currencyRate = ratesObject[key];

    return {
      name: currencyName,
      value: currencyRate,
    };
  });

  return rates;
}
