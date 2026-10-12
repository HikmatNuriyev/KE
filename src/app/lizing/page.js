// "use client";
// import styles from "./lizinq.module.scss";
// import Image from "next/image";
// const LeasingPage = () => {
//   return (
//     <section className={styles.leasingSection}>
//       <div className="container">
//         <div className={styles.hero}>
//           <div className={styles.heroBanner}>
//             <Image
//               src="/images/lizinq.png"
//               alt="Hero Banner"
//               fill
//               style={{ objectFit: "cover" }}
//               priority
//             />{" "}
//           </div>

//           <div className={styles.heroAside}>
//             <div className={styles.heroCalculator}></div>

//             <div className={styles.heroDocuments}></div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LeasingPage;

"use client";
import { useState } from "react";
import Image from "next/image";
import {
  LuIdCard,
  LuCarFront,
  LuFileText,
  LuPhone,
  LuPlus,
  LuMinus,
  LuArrowUpRight,
} from "react-icons/lu";
import styles from "./lizinq.module.scss";
import { documents, steps, popularCars, faq, supportLines } from "./data";



const docIcons = {
  id: LuIdCard,
  car: LuCarFront,
  file: LuFileText,
};

const LeasingPage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <section className={styles.leasingSection}>
      <div className="container">
        <div className={styles.hero}>
          <div className={styles.heroBanner}>
            <Image
              src="/images/lizinq.png"
              alt="Avtomobil lizinqi"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>

          <div className={styles.heroAside}>
            {/* Kalkulyator sonra əlavə olunacaq */}
            <div className={styles.heroCalculator}></div>

            <div className={styles.heroDocuments}>
              <div className={styles.cardHead}>
                <h3>Tələb olunan sənədlər</h3>
                <p>Müraciət üçün bu sənədlər kifayətdir</p>
              </div>

              <ul className={styles.docList}>
                {documents.map((doc) => {
                  const Icon = docIcons[doc.icon];
                  return (
                    <li key={doc.title}>
                      <span className={styles.docIcon}>
                        <Icon />
                      </span>
                      {doc.title}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.bento}>
          <div className={`${styles.glassCard} ${styles.stepsCard}`}>
            <div className={styles.cardHead}>
      
              <h2>4 addımda avtomobil sahibi olun</h2>
            </div>

            <ol className={styles.steps}>
              {steps.map((step, i) => (
                <li key={step.title}>
                  <span className={styles.stepNum}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h4>{step.title}</h4>
                  <p>{step.text}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className={`${styles.glassCard} ${styles.carsCard}`}>
            <div className={styles.cardHead}>
              <h2>Ən çox sorğulanan avtomobillər</h2>
            </div>

            <ul className={styles.carTags}>
              {popularCars.map((car) => (
                <li key={`${car.brand}-${car.model}`}>
                  <small>{car.brand}</small>
                  {car.model}
                </li>
              ))}
            </ul>
          </div>

          <div className={`${styles.glassCard} ${styles.faqCard}`}>
            <div className={styles.cardHead}>
              <h2>Ən çox verilən suallar</h2>
            </div>

            <div className={styles.faqList}>
              {faq.map((item, i) => {
                const isOpen = openFaq === i;
                return (
                  <div
                    key={item.q}
                    className={`${styles.faqItem} ${isOpen ? styles.faqOpen : ""}`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      aria-expanded={isOpen}
                    >
                      <span>{item.q}</span>
                      {isOpen ? <LuMinus /> : <LuPlus />}
                    </button>
                    {item.a && (
                      <div className={styles.faqAnswer}>
                        <p>{item.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className={styles.supportCol}>
            {supportLines.map((line, i) => (
              <div
                key={line.phone}
                className={`${styles.supportCard} ${i === 0 ? styles.supportAccent : styles.glassCard}`}
              >
                <a href={`tel:${line.tel}`} className={styles.supportPhone}>
                  <LuPhone />
                  {line.phone}
                </a>
                <ul>
                  {line.services.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeasingPage;
