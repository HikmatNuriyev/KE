
import { FaArrowUp, FaArrowDown, FaCoins } from 'react-icons/fa';
import styles from './CurrencyCard.module.scss';

import { getCurrencyRates } from '@/lib/rates';


const CurrencyCard = async () => {
const currencyNew = process.env.CURRENT_URL? await getCurrencyRates(['XAG']) : null;
console.log('currencyNew:', currencyNew);

  const currency = await getCurrencyRates(['USD', 'XAU']);
  const xau = currency.rates.find((r) => r.code === 'XAU');
  const usd = currency.rates.find((r) => r.code === 'USD');

  const rates = [
   
    xau && {
      name: 'Qızıl (1 unsiya)',
      code: 'XAU',
      value: xau.value.toFixed(2),
      trend: xau.trend,
    },
    usd && {
      name: 'Dollar',
      code: 'USD',
      value: usd.value.toFixed(4),
      trend: usd.trend,
    },
  ].filter(Boolean);

  return (
    <div className={styles.currencyWrapper}>
      <div className={styles.top}>
        <div className={styles.titleGroup}>
          <FaCoins className={styles.icon} />
          <h4>Canlı Məzənnə</h4>
        </div>
        <div className={styles.liveIndicator}>
          <span className={styles.pulse}></span>
          LIVE
        </div>
      </div>

      <div className={styles.ratesList}>
        {rates.map((rate) => (
          <div key={rate.code} className={styles.rateBox}>
            <div className={styles.left}>
              <span className={styles.currencyName}>{rate.name}</span>
              <span className={styles.currencyCode}>{rate.code}/AZN</span>
            </div>
            <div className={styles.right}>
              <span className={styles.value}>{rate.value}</span>
           
              {rate.trend === 'up' && <FaArrowUp className={styles.up} />}
              {rate.trend === 'down' && <FaArrowDown className={styles.down} />}
            </div>
          </div>
        ))}
      </div>

     
      {currency.date && (
        <p className={styles.note}>* Mərkəzi Bankın {currency.date} tarixli məzənnəsi</p>
      )}
    </div>
  );
};

export default CurrencyCard;