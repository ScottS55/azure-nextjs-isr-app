import { getLatestRates } from 'api/exchangeRate';
import { parseRates } from 'api/utils';
import { ExchangeRate } from 'types/rates';

export async function getStaticProps() {
  const ratesModel = await getLatestRates('USD');
  let rates = parseRates(ratesModel.rates);

  return {
    props: {
      rates: rates,
    },
  };
}

interface ExchangePageProps {
  rates: ExchangeRate[];
}

export default function ExchangePage(props: ExchangePageProps) {
  const { rates } = props;
  return (
    <div>
      <h1>List of available Exchange Rates:</h1>
      {rates.map((rate, index) => (
        <a href={`/exchange/${rate.name}`} key={index}>
          {rate.name}
        </a>
      ))}
    </div>
  );
}
