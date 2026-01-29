"use client";
import { useLoanCalculator } from "@/hooks/useLoanCalculator";
import Button from "@/components/atoms/Button/Button";
import styles from "./Calculator.module.scss";

const Calculator = () => {
  const { weight, setWeight, carat, setCarat, amount } = useLoanCalculator();

  return (
    <div className={styles.calcCard}>
      <h3>Kreditini hesabla</h3>

      <div className={styles.inputGroup}>
        <label>
          Qızılın çəkisi <span>{weight} qr</span>
        </label>
        <input 
          type="range" 
          min="1" 
          max="200" 
          value={weight} 
          className={styles.rangeInput}
          onChange={(e) => setWeight(e.target.value)} 
        />
      </div>

      <div className={styles.inputGroup}>
        <label>Qızılın əyarı</label>
        <select 
          className={styles.selectInput}
          value={carat} 
          onChange={(e) => setCarat(Number(e.target.value))}
        >
          <option value={585}>585 (14K)</option>
          <option value={750}>750 (18K)</option>
          <option value={999}>999 (24K)</option>
        </select>
      </div>

      <div className={styles.resultArea}>
        <p>Alacağınız təxmini məbləğ</p>
        <div className={styles.amount}>{amount}<span>AZN</span></div>
      </div>

      <Button variant="primary" size="lg">Müraciət et</Button>
    </div>
  );
};

export default Calculator;