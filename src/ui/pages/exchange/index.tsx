import { getLatestRates } from 'api/exchangerate';
import { parseRates } from 'api/utils';
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
  return <></>;
}
