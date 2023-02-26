import { getLatestRates } from 'api/exchangeRate';
import { parseRates } from 'api/utils';
import RateContainer from 'components/RateContainer/RateContainer';
import { ExchangeRate } from 'types/rates';

export async function getStaticProps() {
  const ratesModel = await getLatestRates();
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
  return (
    <div>
      <h1>List of available exchange rates:</h1>
      {props.rates.map((rate, index) => {
        return <RateContainer rate={rate} key={index} />;
      })}
    </div>
  );
}
