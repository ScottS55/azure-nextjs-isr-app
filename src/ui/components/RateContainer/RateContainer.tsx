import { ExchangeRate } from 'types/rates';
import styles from './RateContainer.module.scss';

interface ExchangeRateProps {
  rate: ExchangeRate;
}

export default function RateContainer(props: ExchangeRateProps) {
  const { rate } = props;

  return (
    <div className={styles.rateContainer}>
      <span>{rate.name}</span>
      <span>Rate: {rate.value}</span>
    </div>
  );
}
