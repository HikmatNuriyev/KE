
"use client"
import { useState } from 'react';
import styles from './FAQ.module.scss';
import { FaPlus, FaMinus } from 'react-icons/fa';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    { q: "Krediti necə əldə edə bilərəm?", a: "Onlayn müraciət edərək və ya 34 filialımızdan birinə yaxınlaşaraq cəmi 15 dəqiqəyə kredit əldə edə bilərsiniz." },
    { q: "Hansı sənədlər tələb olunur?", a: "Kredit növündən asılı olaraq, əksər hallarda yalnız şəxsiyyət vəsiqəsi kifayətdir." },
    { q: "Ödənişləri harada edə bilərəm?", a: "Ödənişləri saytımız üzərindən onlayn, terminallar vasitəsilə və ya filiallarımızda edə bilərsiniz." }
  ];

  return (
    <section className={styles.faqSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span>Dəstək</span>
          <h2>Sualınız var? <span>Cavablandırırıq</span></h2>
        </div>

        <div className={styles.accordion}>
          {questions.map((item, index) => (
            <div 
              key={index} 
              className={`${styles.faqItem} ${activeIndex === index ? styles.active : ''}`}
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            >
              <div className={styles.question}>
                <h3>{item.q}</h3>
                <div className={styles.icon}>
                  {activeIndex === index ? <FaMinus /> : <FaPlus />}
                </div>
              </div>
              <div className={styles.answer}>
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Faq