import { getLatestRates } from 'api/exchangerate';
import { parseRates } from 'api/utils';
import { ExchangeRate } from 'types/rates';

export async function getStaticPaths() {
  const ratesModel = await getLatestRates();
  let rates = parseRates(ratesModel.rates);

  let paths = rates.map(rate => {
    return {
      params: {
        rate: rate,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { rate } }: { params: { rate: ExchangeRate } }) {
  // TODO - Get a historical graph of the rate based on the current date - 6 months.
  return {
    props: {
      rate: rate,
    },
  };
}

interface CurrencyPageProps {
  rate: ExchangeRate;
}

export default function CurrencyPage(props: CurrencyPageProps) {
  const { rate } = props;
  return (
    <div>
      <h1>Latest Rates</h1>
      <p>Currency: {rate.name}</p>
      <p>Rate: {rate.value}</p>
    </div>
  );
}
