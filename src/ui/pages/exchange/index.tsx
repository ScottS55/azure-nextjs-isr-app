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

// TODO - Make this a proper index page with details on what the currency pages are, maybe a search bar.
// Also maybe break the list out into a sidebar component. Bonus points for using cookies to add 'favorite' rates
export default function ExchangePage(props: ExchangePageProps) {
  const { rates } = props;
  return (
    <div>
      <h1>List of available Exchange Rates:</h1>
      {rates.map((rate, index) => {
        return (
          <div key={index}>
            <a href={`/exchange/${rate.name}`}>{rate.name}</a>
          </div>
        );
      })}
    </div>
  );
}
