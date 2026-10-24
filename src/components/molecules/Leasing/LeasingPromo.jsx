// import Link from "next/link";
// import {
//   LuIdCard,
//   LuCarFront,
//   LuFileText,
//   LuArrowRight,
//   LuArrowUpRight,
// } from "react-icons/lu";
// import { documents, steps } from "@/app/lizing/data";
// import branches from "../../../../public/data/branches.json";
// import styles from "./LeasingPromo.module.scss";

// const docIcons = {
//   id: LuIdCard,
//   car: LuCarFront,
//   file: LuFileText,
// };

// const stats = [
//   { value: branches.length, label: "Filial", href: "/filiallar" },
//   { value: "30", label: "Güclü Tərəfdaş" },
//   { value: "50K+", label: "Razı Müştəri" },
//   { value: "10 İllik", label: "Peşəkar Təcrübə" },
// ];

// const LeasingPromo = () => {
//   return (
//     <section className={styles.promoSection}>
//       <div className="container">
//         <div className={styles.grid}>
//           <div className={styles.intro}>
//             <span className={styles.badge}>Avtomobil Lizinqi</span>
//             <h2>
//               Yolunuz <span>açıq olsun!</span>
//             </h2>
//             <p>15%-dən başlayan ilkin ödəniş və 48 ayadək lizinq müddəti.</p>
//             <Link href="/lizing" className={styles.cta}>
//               Ətraflı bax <LuArrowRight />
//             </Link>
//           </div>

//           <div className={styles.docs}>
//             <h3>Tələb olunan sənədlər</h3>
//             <ul>
//               {documents.map((doc) => {
//                 const Icon = docIcons[doc.icon];
//                 return (
//                   <li key={doc.title}>
//                     <span className={styles.docIcon}>
//                       <Icon />
//                     </span>
//                     {doc.title}
//                   </li>
//                 );
//               })}
//             </ul>
//           </div>

//           {steps.map((step, i) => (
//             <div key={step.title} className={styles.step}>
//               <span className={styles.stepNum}>
//                 {String(i + 1).padStart(2, "0")}
//               </span>
//               <h4>{step.title}</h4>
//               <p>{step.text}</p>
//             </div>
//           ))}
//         </div>

//         <div className={styles.stats}>
//           {stats.map((s) =>
//             s.href ? (
//               <Link key={s.label} href={s.href} className={`${styles.stat} ${styles.statLink}`}>
//                 <strong>{s.value}</strong>
//                 <span>
//                   {s.label} <LuArrowUpRight />
//                 </span>
//               </Link>
//             ) : (
//               <div key={s.label} className={styles.stat}>
//                 <strong>{s.value}</strong>
//                 <span>{s.label}</span>
//               </div>
//             )
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LeasingPromo;

import Link from "next/link";
import {
  LuIdCard,
  LuCarFront,
  LuFileText,
  LuArrowRight,
  LuArrowUpRight,
} from "react-icons/lu";
import { documents, steps } from "@/app/lizing/data";
// import branches from "../../../../public/data/branches.json";
import { getBranches } from "@/lib/branches";
import styles from "./LeasingPromo.module.scss";

const docIcons = {
  id: LuIdCard,
  car: LuCarFront,
  file: LuFileText,
};

// const stats = [
//   { value: branches.length, label: "Filial", href: "/filiallar" },
//   { value: "30", label: "Güclü Tərəfdaş" },
//   { value: "50K+", label: "Razı Müştəri" },
//   { value: "10 İllik", label: "Peşəkar Təcrübə" },
// ];

// const LeasingPromo = () => {
const LeasingPromo = async () => {
  const branches = await getBranches();
  const stats = [
    { value: branches.length, label: "Filial", href: "/filiallar" },
    { value: "30", label: "Güclü Tərəfdaş" },
    { value: "50K+", label: "Razı Müştəri" },
    { value: "10 İllik", label: "Peşəkar Təcrübə" },
  ];

  return (
    <section className={styles.promoSection}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.intro}>
            <span className={styles.badge}>Avtomobil Lizinqi</span>
            <h2>
              Yolunuz <span>açıq olsun!</span>
            </h2>
            <p>15%-dən başlayan ilkin ödəniş və 48 ayadək lizinq müddəti.</p>
            <Link href="/lizing" className={styles.cta}>
              Ətraflı bax <LuArrowRight />
            </Link>
          </div>

          <div className={styles.docs}>
            <h3>Tələb olunan sənədlər</h3>
            <ul>
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

          {steps.map((step, i) => (
            <div key={step.title} className={styles.step}>
              <span className={styles.stepNum}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <h4>{step.title}</h4>
              <p>{step.text}</p>
            </div>
          ))}
        </div>

        <div className={styles.stats}>
          {stats.map((s) =>
            s.href ? (
              <Link key={s.label} href={s.href} className={`${styles.stat} ${styles.statLink}`}>
                <strong>{s.value}</strong>
                <span>
                  {s.label} <LuArrowUpRight />
                </span>
              </Link>
            ) : (
              <div key={s.label} className={styles.stat}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default LeasingPromo;
