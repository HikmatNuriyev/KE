"use client";

import { useState } from "react";
import Button from "@/components/atoms/Button/Button";
// import { calculateLeasing, clampMonths, LEASING } from "@/lib/leasing";
import { calculateLeasing, LEASING } from "@/lib/leasing";
import styles from "./LeasingCalculator.module.scss";

const currentYear = new Date().getFullYear();
const years = Array.from({ length: 31 }, (_, i) => currentYear - i);
const monthOptions = [12, 24, 36, 48];

const formatAzn = (value) =>
  String(Math.round(value)).replace(/\B(?=(\d{3})+(?!\d))/g, " ");

const roundUp = (value) => Math.ceil(Math.round(value * 100) / 100);

const onlyDigits = (value) => value.replace(/[^\d]/g, "").slice(0, 9);

const withSpaces = (value) => (value === "" ? "" : formatAzn(value));

const LeasingCalculator = ({ cars = [] }) => {
  const [model, setModel] = useState("");
  const [price, setPrice] = useState("20000");
  const [year, setYear] = useState(String(currentYear));
  const [isNew, setIsNew] = useState(true);
  const [months, setMonths] = useState(String(LEASING.defaultMonths));
  const [downPayment, setDownPayment] = useState("");

  const result = calculateLeasing({
    price,
    year,
    isNew,
    months,
    downPayment,
    currentYear,
  });

  const monthlyText = result?.valid ? formatAzn(result.monthly) : "—";
  const minDownText = result ? formatAzn(Math.max(0, result.minDownPayment)) : "—";

  return (
    <section className={styles.calcSection} id="lizinq-kalkulyator">
      <div className={styles.grid}>
        <div className={styles.inputCard}>
          <h2 className={styles.title}>
            Aylıq ödənişi <span>hesablayın</span>
          </h2>

          <div className={styles.form}>
            <div className={`${styles.field} ${styles.full}`}>
              <label htmlFor="leaseModel">Marka / model</label>
              <input
                id="leaseModel"
                type="text"
                list="leaseModels"
                autoComplete="off"
                placeholder="Məs. Toyota Corolla"
                value={model}
                onChange={(e) => setModel(e.target.value)}
              />
              <datalist id="leaseModels">
                {cars.map((car) => (
                  <option
                    key={`${car.brand}-${car.model}`}
                    value={`${car.brand} ${car.model}`}
                  />
                ))}
              </datalist>
            </div>

            <div className={styles.field}>
              <label htmlFor="leasePrice">Avtomobilin qiyməti</label>
              <div className={styles.inputBox}>
                <input
                  id="leasePrice"
                  type="text"
                  inputMode="numeric"
                  autoComplete="off"
                  placeholder="0"
                  // value={price}
                  value={withSpaces(price)}
                  onChange={(e) => setPrice(onlyDigits(e.target.value))}
                  onFocus={(e) => e.target.select()}
                />
                <span className={styles.unit}>₼</span>
              </div>
            </div>

            <div className={styles.field}>
              <label htmlFor="leaseYear">Buraxılış ili</label>
              <select
                id="leaseYear"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              >
                {years.map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
              </select>
            </div>

            <div className={`${styles.field} ${styles.full}`}>
              <label className={styles.switch}>
                <input
                  type="checkbox"
                  checked={isNew}
                  onChange={(e) => setIsNew(e.target.checked)}
                />
                <span className={styles.switchTrack} aria-hidden="true" />
                Bu avtomobil yenidir
              </label>
            </div>

            <div className={`${styles.field} ${styles.full}`}>
              {/* <label htmlFor="leaseMonths">Müddət (ay)</label> */}
              <label>Müddət (ay)</label>
              <div className={styles.monthRow}>
                <div className={styles.chips} role="radiogroup">
                  {monthOptions.map((m) => (
                    <button
                      key={m}
                      type="button"
                      role="radio"
                      aria-checked={Number(months) === m}
                      className={`${styles.chip} ${
                        Number(months) === m ? styles.active : ""
                      }`}
                      onClick={() => setMonths(String(m))}
                    >
                      {m}
                    </button>
                  ))}
                </div>
                {/* <div className={`${styles.inputBox} ${styles.monthInput}`}>
                  <input
                    id="leaseMonths"
                    type="text"
                    inputMode="numeric"
                    autoComplete="off"
                    value={months}
                    onChange={(e) => setMonths(onlyDigits(e.target.value).slice(0, 3))}
                    onBlur={() => setMonths(String(clampMonths(months)))}
                  />
                  <span className={styles.unit}>ay</span>
                </div> */}
              </div>
              {/* <small className={styles.hint}>Maksimum {LEASING.maxMonths} ay</small> */}
            </div>

            <div className={`${styles.field} ${styles.full}`}>
              <label htmlFor="leaseDown">İlkin ödəniş</label>
              <div className={styles.inputBox}>
                <input
                  id="leaseDown"
                  type="text"
                  inputMode="numeric"
                  autoComplete="off"
                  placeholder={`Boş qalsa avtomatik: ${minDownText}`}
                  // value={downPayment}
                  value={withSpaces(downPayment)}
                  onChange={(e) => setDownPayment(onlyDigits(e.target.value))}
                />
                <span className={styles.unit}>₼</span>
              </div>
            </div>
          </div>

          <p className={styles.mobileNote}>
            Hesablama məlumat xarakterlidir. Son şərtlər avtomobilin
            qiymətləndirilməsindən sonra dəqiqləşdirilir.
          </p>
        </div>

        <div className={styles.resultCard} aria-live="polite">
          {/* <span className={styles.resultLabel}>Aylıq ödəniş</span>
          <div className={styles.mainPrice}>
            {monthlyText} <span>₼</span>
          </div> */}
          <div className={styles.resultHead}>
            <span className={styles.resultLabel}>Aylıq ödəniş</span>
            <div className={styles.mainPrice}>
              {monthlyText} <span>₼</span>
            </div>
          </div>

          {result?.shortfall > 0 && (
            <p className={styles.warning}>
              Kredit məbləği limiti keçir. İlkin ödənişi ən azı{" "}
              <b>{formatAzn(roundUp(result.shortfall))} ₼</b> artırmaq lazımdır
              (minimum ilkin ödəniş: {formatAzn(roundUp(result.minDownPayment))} ₼).
            </p>
          )}

          {result?.noLoanNeeded && (
            <p className={styles.warning}>
              İlkin ödəniş avtomobilin qiymətini və xərcləri tam qarşılayır,
              kredit tələb olunmur.
            </p>
          )}

          <div className={styles.detailsList}>
            <div className={styles.detailItem}>
              <span>İlkin ödəniş</span>
              <span>
                {result ? `${formatAzn(Math.max(0, result.downPayment))} ₼` : "—"}
              </span>
            </div>
            <div className={styles.detailItem}>
              <span>Kredit məbləği</span>
              <span>
                {result?.valid ? `${formatAzn(result.loan)} ₼` : "—"}
              </span>
            </div>
            <div className={styles.detailItem}>
              <span>Müddət</span>
              <span>{result ? `${result.months} ay` : "—"}</span>
            </div>
          </div>

          {result?.autoDownPayment && (
            <p className={styles.autoNote}>
              İlkin ödəniş göstərilmədiyi üçün minimum tələb olunan məbləğ
              avtomatik hesablanıb.
            </p>
          )}

          <Button variant="gold" size="lg" className={styles.ctaButton}>
            Müraciət et
          </Button>

          <p className={styles.footerNote}>
            Hesablama məlumat xarakterlidir. Son şərtlər avtomobilin
            qiymətləndirilməsindən sonra dəqiqləşdirilir.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LeasingCalculator;
