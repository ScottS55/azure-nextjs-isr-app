interface IRatesModel {
    base: string;
    date: string;
    rates: any;
}

interface IExchangeRate {
    name: string;
    value: number;
}

export type RatesModel = IRatesModel;
export type ExchangeRate = IExchangeRate;