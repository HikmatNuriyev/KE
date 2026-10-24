// "use client";
//
// import { useState } from "react";
// import Button from "@/components/atoms/Button/Button";
// import styles from "./Calculator.module.scss";
//
// const Calculator = () => {
//   const [weight, setWeight] = useState(10);
//   const [purity, setPurity] = useState(585);
//
//   const goldPurities = [375, 500, 583, 585, 750, 875, 916, 958, 999];
//
//   const basePrice999 = 142.5;
//   const currentGramPrice = (purity / 999) * basePrice999;
//   const totalAmount = (currentGramPrice * weight).toFixed(0);
//
//   return (
//     <section className={styles.exchangeSection}>
//       <div className={styles.container}>
//         <div className={styles.mainGrid}>
//           <div className={styles.inputCard}>
//             {/* <span className={styles.badge}>Onlayn Qiymətləndirmə</span> */}
//
//             <h2 className={styles.title}>
//               Qızılınızın dəyərini <span> hesabla</span>
//             </h2>
//             {/* <p className={styles.description}>
//               Müasir texnologiya ilə qızılınızın cari birja qiymətinə uyğun
//               maksimal kredit məbləğini anında öyrənin.
//             </p> */}
//
//             <div className={styles.form}>
//               <div className={styles.field}>
//                 <label>Qızılın çəkisi (qram)</label>
//                 <div className={styles.weightInputBox}>
//                   <input
//                     type="number"
//                     value={weight}
//                     onChange={(e) => setWeight(Math.max(0, e.target.value))}
//                     placeholder="0"
//                   />
//                   <span className={styles.unit}>gr</span>
//                 </div>
//               </div>
//
//               <div className={styles.field}>
//                 <label>Qızılın əyarı</label>
//                 <div className={styles.purityGrid}>
//                   {goldPurities.map((p) => (
//                     <button
//                       key={p}
//                       type="button"
//                       className={`${styles.purityBtn} ${
//                         purity === p ? styles.active : ""
//                       }`}
//                       onClick={() => setPurity(p)}
//                     >
//                       {p}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//
//           <div className={styles.resultCard}>
//             <div className={styles.cardHeader}>
//               {/* <span className={styles.resultBadge}>
//                 Sizə təklif olunan məbləğ
//               </span> */}
//               <div className={styles.mainPrice}>
//                 {Number(totalAmount).toLocaleString()} <span>AZN</span>
//               </div>
//             </div>
//
//             <div className={styles.detailsList}>
//               <div className={styles.detailItem}>
//                 <span>Cari əyar qiyməti (1gr)</span>
//                 <span>{currentGramPrice.toFixed(2)} AZN</span>
//               </div>
//               <div className={styles.detailItem}>
//                 <span>Xidmət haqqı</span>
//                 <span>0%</span>
//               </div>
//             </div>
//
//             <Button variant="gold" size="lg" className={styles.ctaButton}>
//               Müraciət et
//             </Button>
//
//             <p className={styles.footerNote}>
//               Qiymət məlumat xarakterlidir, son məbləğ filialda qızılın
//               ekspertiza nəticəsinə əsasən dəqiqləşdirilir.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
//
// export default Calculator;


// ===== Yeni versiya: telefonda rahat hesablama =====
"use client";

// import { useEffect, useRef, useState } from "react";
// import { useState } from "react";
import { useEffect, useState } from "react";
import Button from "@/components/atoms/Button/Button";
import styles from "./Calculator.module.scss";

const goldPurities = [375, 500, 583, 585, 750, 875, 916, 958, 999];
const basePrice999 = 142.5;

const Calculator = () => {
  // input boş qala bilsin deyə string kimi saxlayırıq
  const [weight, setWeight] = useState("10");
  const [purity, setPurity] = useState(585);
  const [prices, setPrices] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [resultVisible, setResultVisible] = useState(false);
  // const resultRef = useRef(null);

  // // nəticə kartı ekrandadırsa, aşağıdakı zolağı gizlədirik — təkrar olmasın
  // useEffect(() => {
  //   if (!resultRef.current) return;
  //   const io = new IntersectionObserver(
  //     ([entry]) => setResultVisible(entry.isIntersecting),
  //     { threshold: 0.35 }
  //   );
  //   io.observe(resultRef.current);
  //   return () => io.disconnect();
  // }, []);


  useEffect(() => {
    let cancelled = false;

    fetch("/api/gold-prices")
      .then((res) => (res.ok ? res.json() : []))
      .then((data) => {
        if (cancelled || !Array.isArray(data) || !data.length) return;
        setPrices(data);
        setPurity((current) =>
          data.some((p) => Number(p.assay) === current)
            ? current
            : Number(data[0].assay)
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

  const purities = prices.length
    ? prices.map((p) => Number(p.assay))
    : goldPurities;
  const apiPrice = prices.find((p) => Number(p.assay) === purity)?.price;

  const grams = parseFloat(weight) || 0;
  // const currentGramPrice = (purity / 999) * basePrice999;
  const currentGramPrice = apiPrice ?? (purity / 999) * basePrice999;
  const totalAmount = Math.round(currentGramPrice * grams);
  const gramPriceText = loading ? "—" : `${currentGramPrice.toFixed(2)} AZN`;
  const totalText = loading ? "—" : totalAmount.toLocaleString();

  const onWeightChange = (e) => {
    // vergül də qəbul olunsun, yalnız rəqəm və bir nöqtə qalsın
    let v = e.target.value.replace(",", ".").replace(/[^\d.]/g, "");
    const parts = v.split(".");
    if (parts.length > 2) v = parts[0] + "." + parts.slice(1).join("");
    if (v.length > 7) return;
    setWeight(v);
  };

  const step = (d) => {
    const next = Math.max(0, Math.round((grams + d) * 10) / 10);
    setWeight(String(next));
  };

  // const scrollToResult = () => {
  //   document
  //     .getElementById("calcResult")
  //     ?.scrollIntoView({ behavior: "smooth", block: "center" });
  // };


  return (
    <section className={styles.exchangeSection}>
      <div className={styles.container}>
        <div className={styles.mainGrid}>
          <div className={styles.inputCard}>
            <h2 className={styles.title}>
              Qızılınızın dəyərini <span> hesablayın</span>
            </h2>

            <div className={styles.form}>
              <div className={styles.field}>
                <label htmlFor="goldWeight">Qızılın çəkisi (qram)</label>
                <div className={styles.weightRow}>
                  <button
                    type="button"
                    className={styles.stepBtn}
                    onClick={() => step(-1)}
                    disabled={grams <= 0}
                    aria-label="1 qram azalt"
                  >
                    −
                  </button>

                  <div className={styles.weightInputBox}>
                    <input
                      id="goldWeight"
                      type="text"
                      inputMode="decimal"
                      autoComplete="off"
                      value={weight}
                      onChange={onWeightChange}
                      onFocus={(e) => e.target.select()}
                      placeholder="0"
                    />
                    <span className={styles.unit}>gr</span>
                  </div>

                  <button
                    type="button"
                    className={styles.stepBtn}
                    onClick={() => step(1)}
                    aria-label="1 qram artır"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className={styles.field}>
                <label>Qızılın əyarı</label>
                <div className={styles.purityGrid} role="radiogroup">
                  {/* {goldPurities.map((p) => ( */}
                  {purities.map((p) => (
                    <button
                      key={p}
                      type="button"
                      role="radio"
                      aria-checked={purity === p}
                      className={`${styles.purityBtn} ${
                        purity === p ? styles.active : ""
                      }`}
                      onClick={() => setPurity(p)}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>
            </div>

           
            <div className={styles.mobileDetails}>
              <div>
                <span>Cari əyar qiyməti (1gr)</span>
                {/* <span>{currentGramPrice.toFixed(2)} AZN</span> */}
                <span>{gramPriceText}</span>
              </div>
              <div>
                <span>Xidmət haqqı</span>
                <span>0%</span>
              </div>
            </div>

            <div className={styles.mobileSummary} aria-live="polite">
              <div className={styles.summaryText}>
                <span className={styles.summaryMeta}>
                  {grams} gr · {purity}
                </span>
                <span className={styles.summaryPrice}>
                  {/* {totalAmount.toLocaleString()} <small>AZN</small> */}
                  {totalText} <small>AZN</small>
                </span>
              </div>
              <button type="button" className={styles.summaryBtn}>
                Müraciət et
              </button>
            </div>

            <p className={styles.mobileNote}>
              Qiymət məlumat xarakterlidir, son məbləğ filialda qızılın
              ekspertiza nəticəsinə əsasən dəqiqləşdirilir.
            </p>
          </div>

          <div className={styles.resultCard}>
            <div className={styles.cardHeader}>
              <div className={styles.mainPrice}>
                {/* {totalAmount.toLocaleString()} <span>AZN</span> */}
                {totalText} <span>AZN</span>
              </div>
            </div>

            <div className={styles.detailsList}>
              <div className={styles.detailItem}>
                <span>Cari əyar qiyməti (1gr)</span>
                {/* <span>{currentGramPrice.toFixed(2)} AZN</span> */}
                <span>{gramPriceText}</span>
              </div>
              <div className={styles.detailItem}>
                <span>Xidmət haqqı</span>
                <span>0%</span>
              </div>
            </div>

            <Button variant="gold" size="lg" className={styles.ctaButton}>
              Müraciət et
            </Button>

            <p className={styles.footerNote}>
              Qiymət məlumat xarakterlidir, son məbləğ filialda qızılın
              ekspertiza nəticəsinə əsasən dəqiqləşdirilir.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
