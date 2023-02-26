import { getLatestRates } from 'api/exchangeRate';
import { parseRates } from 'api/utils';
import RateContainer from 'components/RateContainer/RateContainer';
import { GLOBAL_CURRENCES } from 'constants/currencies';
import { ExchangeRate } from 'types/rates';

export async function getStaticPaths() {
  let paths = GLOBAL_CURRENCES.map(currency => {
    return {
      params: {
        currency: currency,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { currency } }: { params: { currency: string } }) {
  const ratesModel = await getLatestRates(currency);
  let rates = parseRates(ratesModel.rates);

  return {
    props: {
      currency: currency,
      rates: rates,
    },
  };
}

interface CurrencyPageProps {
  currency: string;
  rates: ExchangeRate[];
}

export default function CurrencyPage(props: CurrencyPageProps) {
  const { rates, currency } = props;
  return (
    <div>
      <h1>Latest Exchange Rates for {currency} </h1>
      {rates
        .filter(rate => rate.name != currency)
        .map((rate, index) => (
          <RateContainer rate={rate} key={index} />
        ))}
    </div>
  );
}
