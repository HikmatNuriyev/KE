"use client";

import { useState } from "react";
import Button from "@/components/atoms/Button/Button";
import styles from "./Calculator.module.scss";

const Calculator = () => {
  const [weight, setWeight] = useState(10);
  const [purity, setPurity] = useState(585);

  const goldPurities = [375, 500, 583, 585, 750, 875, 916, 958, 999];

  // Real birja məntiqi (Təxmini rəqəmlərlə)
  const basePrice999 = 142.5;
  const currentGramPrice = (purity / 999) * basePrice999;
  const totalAmount = (currentGramPrice * weight).toFixed(0);

  return (
    <section className={styles.exchangeSection}>
      <div className={styles.container}>
        <div className={styles.mainGrid}>
          {/* SOL TƏRƏF - İnputlar */}
          <div className={styles.inputSide}>
            <div className={styles.badge}>Onlayn Qiymətləndirmə</div>
            <h2 className={styles.title}>
              Qızılınızın dəyərini <span>şəffaf hesabla</span>
            </h2>
            <p className={styles.description}>
              Müasir texnologiya ilə qızılınızın cari birja qiymətinə uyğun
              maksimal kredit məbləğini anında öyrənin.
            </p>

            <div className={styles.form}>
              <div className={styles.field}>
                <label>Qızılın çəkisi (qram)</label>
                <div className={styles.weightInputBox}>
                  <input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(Math.max(0, e.target.value))}
                    placeholder="0"
                  />
                  <span className={styles.unit}>gr</span>
                </div>
              </div>

              <div className={styles.field}>
                <label>Qızılın əyarı</label>
                <div className={styles.purityGrid}>
                  {goldPurities.map((p) => (
                    <button
                      key={p}
                      className={`${styles.purityBtn} ${purity === p ? styles.active : ""}`}
                      onClick={() => setPurity(p)}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* SAĞ TƏRƏF - Nəticə Kartı */}
          <div className={styles.resultSide}>
            <div className={styles.resultCard}>
              <div className={styles.cardHeader}>
                <small>Sizə təklif olunan məbləğ</small>
                <div className={styles.mainPrice}>
                  {Number(totalAmount).toLocaleString()} <span>AZN</span>
                </div>
              </div>

              <div className={styles.detailsList}>
                <div className={styles.detailItem}>
                  <span>Cari əyar qiyməti (1gr)</span>
                  <span>{currentGramPrice.toFixed(2)} AZN</span>
                </div>
                <div className={styles.detailItem}>
                  <span>Xidmət haqqı</span>
                  <span>0%</span>
                </div>
              </div>

              {/* Sənin yaratdığın Button komponenti */}
              <Button variant="gold" size="lg" className={styles.ctaButton}>
                Müraciət et
              </Button>

              <p className={styles.footerNote}>
                * Qiymətlər dünya birja məlumatlarına əsasən yenilənir.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
