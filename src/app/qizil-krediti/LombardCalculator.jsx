"use client";

import { useEffect, useState } from "react";
import styles from "./GoldLoan.module.scss";


const goldPurities = [375, 500, 583, 585, 750, 875, 916, 958, 999];
const basePrice999 = 142.5;

const LombardCalculator = () => {
  const [weight, setWeight] = useState("10");
  const [purity, setPurity] = useState(583);
  const [prices, setPrices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    fetch("/api/gold-prices")
      .then((res) => (res.ok ? res.json() : []))
      .then((data) => {
        if (cancelled || !Array.isArray(data) || !data.length) return;
        setPrices(data);
        setPurity((current) =>
          data.some((p) => Number(p.assay) === current) ? current : Number(data[0].assay)
        );
      })
      .catch(() => {})
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const purities = prices.length ? prices.map((p) => Number(p.assay)) : goldPurities;
  const apiPrice = prices.find((p) => Number(p.assay) === purity)?.price;
  const gramPrice = apiPrice ?? (purity / 999) * basePrice999;
 
  const grams = parseFloat(weight) || 0;
 
  const total = Math.round(gramPrice * grams);

  const onWeightChange = (e) => {
    let v = e.target.value.replace(",", ".").replace(/[^\d.]/g, "");
    const parts = v.split(".");
    if (parts.length > 2) v = parts[0] + "." + parts.slice(1).join("");
    if (v.length > 7) return;
    setWeight(v);
  };

  const money = (n) => (loading ? "—" : `${n.toFixed(2)} AZN`);

  return (
    <div className={styles.calc}>
      <div className={styles.calcInputs}>
        <h2>
          Alacağınız məbləği <span>hesablayın</span>
        </h2>
    

        <label htmlFor="lombardWeight">Qızılın çəkisi (qram)</label>
        <div className={styles.calcWeight}>
          <input
            id="lombardWeight"
            type="text"
            inputMode="decimal"
            autoComplete="off"
            value={weight}
            onChange={onWeightChange}
          />
          <span>qr</span>
        </div>

        <span className={styles.calcLabel}>Qızılın əyarı</span>
        <div className={styles.purityGrid}>
          {purities.map((p) => (
            <button
              key={p}
              type="button"
              className={purity === p ? styles.purityActive : ""}
              onClick={() => setPurity(p)}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.calcResult}>
        <span className={styles.calcResultLabel}>Ala biləcəyiniz kredit</span>
        <strong>
          {loading ? "—" : total.toLocaleString("az-AZ")} <small>AZN</small>
        </strong>
        <dl>
          {/* <div>
            <dt>1 qram {purity} əyar</dt>
            <dd>{money(gramPrice)}</dd>
          </div>
          <div>
            <dt>Kredit əmsalı</dt>
            <dd>{Math.round(LTV * 100)}%</dd>
          </div>
          <div>
            <dt>1 qram üçün kredit</dt>
            <dd>{money(loanPerGram)}</dd>
          </div> */}
          <div>
            <dt>Əyar</dt>
            <dd>{purity}</dd>
          </div>
          <div>
            <dt>1 qram üçün kredit</dt>
            <dd>{money(gramPrice)}</dd>
          </div>
          <div>
            <dt>Çəki</dt>
            <dd>{grams} qr</dd>
          </div>
        </dl>
        {/* <p>Yekun məbləğ filialda qiymətləndirmədən sonra dəqiqləşdirilir.</p> */}
      </div>
    </div>
  );
};

export default LombardCalculator;
