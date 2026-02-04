"use client";
import { useState, useEffect } from 'react';
import styles from './Leasing.module.scss';

const LeasingPage = () => {
  // Hesablama üçün State-lər
  const [carPrice, setCarPrice] = useState(45000);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [months, setMonths] = useState(36);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  // İllik faiz (məsələn 18%)
  const annualInterest = 0.18;

  useEffect(() => {
    const loanAmount = carPrice - (carPrice * (downPaymentPercent / 100));
    const monthlyInterest = annualInterest / 12;
    if (loanAmount > 0) {
      const payment = loanAmount * (monthlyInterest * Math.pow(1 + monthlyInterest, months)) / (Math.pow(1 + monthlyInterest, months) - 1);
      setMonthlyPayment(Math.round(payment));
    }
  }, [carPrice, downPaymentPercent, months]);

  return (
    <section className={styles.leasingSection}>
      <div className="container">
        
        {/* HERO VƏ KALKULYATOR HİSSƏSİ */}
        <div className={styles.hero}>
          <div className={styles.content}>
            <h1>Sərfəli şərtlərlə <span>Avto Lizinq</span></h1>
            <p>
              Xəyalınızdakı avtomobili indi alın, ödənişini hissə-hissə edin. 
              Sürətli rəsmiləşdirmə və minimum sənədləşmə ilə xidmətinizdəyik.
            </p>
          </div>

          <div className={styles.calculatorPreview}>
            <h2>Lizinq Kalkulyatoru</h2>
            
            <div className={styles.calcRow}>
              <label>Avtomobilin qiyməti: <span className={styles.value}>{carPrice.toLocaleString()} AZN</span></label>
              <input 
                type="range" min="5000" max="200000" step="500" 
                value={carPrice} onChange={(e) => setCarPrice(Number(e.target.value))}
              />
            </div>

            <div className={styles.calcRow}>
              <label>İlkin ödəniş ({downPaymentPercent}%): <span className={styles.value}>{(carPrice * downPaymentPercent / 100).toLocaleString()} AZN</span></label>
              <input 
                type="range" min="20" max="80" step="5"
                value={downPaymentPercent} onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
              />
            </div>

            <div className={styles.calcRow}>
              <label>Müddət: <span className={styles.value}>{months} ay</span></label>
              <input 
                type="range" min="12" max="60" step="6"
                value={months} onChange={(e) => setMonths(Number(e.target.value))}
              />
            </div>

            <div className={styles.resultBox}>
               <span>Aylıq ödəniş:</span>
               <h3>{monthlyPayment} AZN</h3>
            </div>
          </div>
        </div>

        {/* KARTLAR  */}
        <div className={styles.stepsGrid}>
          <div className={styles.stepCard}>
            <span className={styles.number}>01</span>
            <h3>Avtomobili seçin</h3>
            <p>İstədiyiniz yeni və ya işlənmiş avtomobili müəyyən edin.</p>
          </div>
          <div className={styles.stepCard}>
            <span className={styles.number}>02</span>
            <h3>Müraciət edin</h3>
            <p>Onlayn və ya filiallarımıza yaxınlaşaraq müraciətinizi göndərin.</p>
          </div>
          <div className={styles.stepCard}>
            <span className={styles.number}>03</span>
            <h3>Təsdiq və Sürüş</h3>
            <p>Cəmi 30 dəqiqə ərzində təsdiq alın və avtomobilinizi sürün.</p>
          </div>
        </div>

        {/* TÜND CTA BLOKU */}
        <div className={styles.ctaBox}>
          <h2>Maşın sahibi olmaq üçün vaxt itirməyin!</h2>
          <p style={{marginBottom: '30px', opacity: 0.8}}>Mütəxəssisimiz sizə ən uyğun planı hazırlasın.</p>
          <button className={styles.applyBtn}>İndi Müraciət Et</button>
        </div>

      </div>
    </section>
  );
};

export default LeasingPage;