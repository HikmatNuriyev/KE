import Link from "next/link";
import Image from "next/image";

import { FaArrowRight, FaPlus } from "react-icons/fa";
import { LuPhone } from "react-icons/lu";
import LombardCalculator from "./LombardCalculator";
import styles from "./GoldLoan.module.scss";

const ANNUAL_RATE = 13;

const advantages = [
  {
    title: "Sürətli xidmət",
    text: "Qiymətləndirmə və razılaşmadan sonra pul dərhal verilir.",
  },
  { title: "Minimum sənəd", text: "Yalnız şəxsiyyət vəsiqəsi tələb olunur." },
  {
    title: "Təhlükəsiz saxlanma",
    text: "Əşyanız qorunur və borc ödənildikdən sonra tam qaytarılır.",
  },
];

const products = [
  {
    id: "gold",

    title: "Qızıl girovu ilə kredit",
    text: "Qızıl zinət əşyalarınızı satmadan, dəyərinin yüksək hissəsi qədər kredit alın.",
    terms: [
      { label: "Kredit məbləği", value: "Qızılın 140%-ədək dəyərində" },
      { label: "Məbləğ aralığı", value: "100 – 100 000 AZN" },
      { label: "Müddət", value: "1 – 36 ay" },
      { label: "İllik effektiv faiz", value: `${ANNUAL_RATE}%-dən` },
    ],
  },
  {
    id: "tech",

    title: "Elektronika girovu ilə kredit",
    text: "Mobil telefon, kompüter və ya planşetinizi girov qoyaraq qısa müddətli kredit alın.",
    terms: [
      { label: "Kredit məbləği", value: "Girovun 100%-ədək dəyərində" },
      { label: "Müddət", value: "1 – 3 ay" },
      { label: "Qəbul olunur", value: "Telefon, kompüter, planşet" },
    ],
  },
];

const steps = [
  {
    title: "Əşyanı gətirin",
    text: "Girov qoymaq istədiyiniz əşyanı və şəxsiyyət vəsiqənizi təqdim edin.",
  },
  {
    title: "Qiymətləndirmə",
    text: "Mütəxəssis qısa vaxtda əşyanın vəziyyətini yoxlayır və dəyərini müəyyən edir.",
  },
  {
    title: "Şərtlərlə tanış olun",
    text: "Veriləcək məbləğ, faiz və müddət barədə məlumat alırsınız.",
  },
  {
    title: "Müqavilə və pul",
    text: "Şərtlər uyğundursa, müqavilə bağlanır və kredit məbləği verilir.",
  },
  {
    title: "Əşyanı geri alın",
    text: "Borc tam ödəndikdən sonra əşyanız sizə qaytarılır.",
  },
];

const sampleLoans = [
  { amount: 100, months: 3 },
  { amount: 1000, months: 12 },
  { amount: 3000, months: 24 },
];

const monthlyPayment = (amount, months) => {
  const r = Math.pow(1 + ANNUAL_RATE / 100, 1 / 12) - 1;
  return (amount * r) / (1 - Math.pow(1 + r, -months));
};

const faqs = [
  {
    q: "Müddəti uzatmaq olar?",
    a: "Bəli, müddət bitməmiş filiala müraciət edərək müqaviləni uzada bilərsiniz. Uzatma şərtləri müqavilədə göstərilir.",
  },
  {
    q: "Girov qoyduğum əşya harada saxlanılır?",
    a: "Əşyanız təşkilatın təhlükəsiz saxlama yerində qorunur və borc ödənilənə qədər toxunulmaz qalır.",
  },
  {
    q: "Əşyamın dəyərini kim təyin edir?",
    a: "Qiymətləndirmə mütəxəssis tərəfindən əşyanın vəziyyətinə, markasına və bazar qiymətinə uyğun aparılır.",
  },
  {
    q: "Kredit üçün hansı sənədlər lazımdır?",
    a: "Əsasən şəxsiyyət vəsiqəsi tələb olunur.",
  },
  {
    q: "Borcu vaxtından əvvəl ödəyə bilərəm?",
    a: "Bəli, borcu istənilən vaxt ödəyib əşyanı geri ala bilərsiniz. Faizin hansı müddətə hesablanacağı müqavilədə qeyd olunur.",
  },
  {
    q: "Əşyanı başqa şəxs geri ala bilər?",
    a: "Bəli. Bunun üçün notarius təsdiqli etibarnamə və etibar edilən şəxsin şəxsiyyət vəsiqəsi lazımdır.",
  },
];

const contacts = [
  { title: "Kredit müraciəti ilə bağlı", phone: "*2200" },
  { title: "Kredit ödənişi ilə bağlı", phone: "*2200" },
];

const formatAzn = (n) => `${Math.round(n).toLocaleString("az-AZ")} AZN`;

const GoldLoan = () => {
  return (
    <section className={styles.goldSection}>
      <div className="container">
        <div className={styles.grid}>
          {/*
          <div className={`${styles.glass} ${styles.intro}`}>
            <span className={styles.badge}>Lombard</span>
            <h1>
              Əşyanızı satmayın, <span>girov qoyun</span>
            </h1>
            <p>
              Dəyərli əşyanızı (qızıl, telefon, kompüter və s.) gətirirsiniz, mütəxəssis onu
              qiymətləndirir və dəyərinin müəyyən hissəsi qədər pulu dərhal verir. Borcu
              razılaşdırılmış müddətdə faizi ilə qaytardıqda əşyanızı geri alırsınız.
            </p>
            <div className={styles.introActions}>
              <a href="#kalkulyator" className={styles.primaryBtn}>
                Məbləği hesabla <FaArrowRight />
              </a>
              <a href="tel:*2200" className={styles.ghostBtn}>
                <LuPhone /> *2200
              </a>
            </div>
          </div>

          <aside className={styles.advantageCard}>
            <h2>Lombardın üstünlükləri</h2>
            <ul>
              {advantages.map((a) => (
                <li key={a.title}>
                  <span className={styles.advIcon}>{a.icon}</span>
                  <div>
                    <strong>{a.title}</strong>
                    <p>{a.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </aside>
          */}
          <div className={styles.heroBanner}>
            <h1 className={styles.srOnly}>
              Lombard: qızıl və elektronika girovu ilə kredit
            </h1>
            <Image
              src="/images/lpage.jpg"
              alt="Qızıl girovu ilə kredit"
              fill
              sizes="(max-width: 600px) 1px, 1200px"
              className={styles.bannerDesktop}
              style={{ objectFit: "cover" }}
              priority
            />
            <Image
              src="/images/lombardMobile.jpg"
              alt="Qızıl girovu ilə kredit"
              fill
              sizes="(max-width: 600px) 100vw, 1px"
              className={styles.bannerMobile}
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
          {/*
          <div className={styles.heroBanner}>
            <h1>
              Əşyanızı satmayın, <span>girov qoyun</span>
            </h1>
            <p>Qızıl və ya elektronikanızı gətirin, dəyərləndirək və pulu dərhal verək.</p>
            <ul className={styles.heroChips}>
              {advantages.map((a) => (
                <li key={a.title}>{a.title}</li>
              ))}
            </ul>
            <div className={styles.heroActions}>
              <a href="#kalkulyator" className={styles.heroPrimary}>
                Məbləği hesabla <FaArrowRight />
              </a>
              <a href="tel:*2200" className={styles.heroGhost}>
                <LuPhone /> *2200
              </a>
            </div>
          </div>
          */}

          <div className={styles.sectionHead}>
            <h2>Lombard məhsullarımız</h2>
          </div>

          {products.map((p) => (
            <article
              key={p.id}
              className={`${styles.glass} ${styles.productCard} ${styles[p.id]}`}
            >
              {/* <span className={styles.productIcon}>{p.icon}</span> */}
              <h3>{p.title}</h3>
              <p>{p.text}</p>
              <dl className={styles.terms}>
                {p.terms.map((t) => (
                  <div key={t.label}>
                    <dt>{t.label}</dt>
                    <dd>{t.value}</dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}

          <div className={`${styles.glass} ${styles.stepsCard}`}>
            <h2>Necə əldə etmək olar?</h2>
            <ol className={styles.steps}>
              {steps.map((s, i) => (
                <li key={s.title}>
                  <span className={styles.stepNum}>{i + 1}</span>
                  <strong>{s.title}</strong>
                  <p>{s.text}</p>
                </li>
              ))}
            </ol>
          </div>

          <div id="kalkulyator" className={styles.calcWrap}>
            <LombardCalculator />
          </div>

          <div className={`${styles.glass} ${styles.tableCard}`}>
            <h3>Nümunə ödəniş cədvəli</h3>
            {/* <p className={styles.tableNote}>İllik effektiv faiz {ANNUAL_RATE}% ilə, bərabər aylıq ödənişlər</p> */}
            <table className={styles.loanTable}>
              <thead>
                <tr>
                  <th>Kreditin məbləği</th>
                  <th>Müddət</th>
                  <th>Aylıq ödəniş</th>
                </tr>
              </thead>
              <tbody>
                {sampleLoans.map((item) => (
                  <tr key={item.amount}>
                    <td data-label="Kreditin məbləği">
                      {formatAzn(item.amount)}
                    </td>
                    <td data-label="Müddət">{item.months} ay</td>
                    <td data-label="Aylıq ödəniş">
                      {formatAzn(monthlyPayment(item.amount, item.months))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className={`${styles.glass} ${styles.faqCard}`}>
            <h2>Tez-tez verilən suallar</h2>
            <div className={styles.faqList}>
              {faqs.map((f) => (
                <details key={f.q} className={styles.faqItem}>
                  <summary>
                    {f.q}
                    <FaPlus className={styles.faqIcon} />
                  </summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>

          <div className={styles.contactCard}>
            <h2>Əlaqə</h2>
            <div className={styles.contactList}>
              {contacts.map((c) => (
                <a
                  key={c.title}
                  href={`tel:${c.phone}`}
                  className={styles.contactRow}
                >
                  <LuPhone />
                  <span>
                    <small>{c.title}</small>
                    {c.phone}
                  </span>
                  <FaArrowRight className={styles.contactArrow} />
                </a>
              ))}
            </div>
            <Link href="/filiallar" className={styles.branchLink}>
              Ən yaxın filialı tapın <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoldLoan;
