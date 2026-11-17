"use client";

import LombardCalculator from "@/app/qizil-krediti/LombardCalculator";
import styles from "./Calculator.module.scss";

const Calculator = () => {
  return (
    <section className={styles.exchangeSection}>
      <div className={styles.container}>
        <div className={styles.lombardWrap}>
          <LombardCalculator />
        </div>
      </div>
    </section>
  );
};

export default Calculator;
