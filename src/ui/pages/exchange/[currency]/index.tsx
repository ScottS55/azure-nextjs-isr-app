import { getLatestRates } from 'api/exchangerate';

export async function getStaticPaths() {
  const ratesModel = await getLatestRates();

  // TODO - Maybe bust this out into a util file
  let paths = Object.keys(ratesModel.rates).map(key => {
    let currencyName = key;
    let currencyRate = ratesModel.rates[key];

    return {
      params: {
        name: currencyName,
        rate: currencyRate,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { name, rate } }: { params: { name: string; rate: number } }) {
  // TODO - Get a historical graph of the rate based on the current date - 6 months.
  return {
    props: {
      name: name,
      rate: rate,
    },
  };
}

interface ExchangePageProps {
  name: string;
  rate: number;
}

export default function Exchange(props: ExchangePageProps) {
  return (
    <div>
      <h1>Latest Rates</h1>
      <p>Currency: {props.name}</p>
      <p>Rate: {props.rate}</p>
    </div>
  );
}
