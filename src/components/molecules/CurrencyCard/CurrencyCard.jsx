import { FaArrowUp, FaArrowDown, FaCoins } from 'react-icons/fa';
import styles from './CurrencyCard.module.scss';

const CurrencyCard = () => {

  const rates = [
    { name: 'Qızıl (999 ayar)', code: 'XAU', value: '138.45', trend: 'up' },
    { name: 'Dollar', code: 'USD', value: '1.7000', trend: 'stable' },
  ];

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
        {rates.map((rate, index) => (
          <div key={index} className={styles.rateBox}>
            <div className={styles.left}>
              <span className={styles.currencyName}>{rate.name}</span>
              <span className={styles.currencyCode}>{rate.code}/AZN</span>
            </div>
            <div className={styles.right}>
              <span className={styles.value}>{rate.value}</span>
              {rate.trend === 'up' ? (
                <FaArrowUp className={styles.up} />
              ) : (
                <FaArrowDown className={styles.down} />
              )}
            </div>
          </div>
        ))}
      </div>

      <p className={styles.note}>* Lorem Ipsum DOLAR.</p>
    </div>
  );
};

export default CurrencyCard;