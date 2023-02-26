import { ExchangeRate } from 'types/rates';

interface ExchangeRateProps {
  rate: ExchangeRate;
}
export default function RateContainer(props: ExchangeRateProps) {
  const { rate } = props;

  return (
    <div>
      <span>Currency: {rate.name}</span>
      <span>Rate: {rate.value}</span>
    </div>
  );
}
