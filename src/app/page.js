import CreditCalculator from "@/components/molecules/Calculator/Calculator";
import NetworkStats from "@/components/molecules/NetworkStats/NetworkStats";
import VacancyBanner from "@/components/molecules/VacancyBanner/VacancyBanner";
import AppBanner from "@/components/organisms/AppBanner/AppBanner";
import Hero from "@/components/organisms/Hero/Hero";
import SocialBanner from "@/components/organisms/SocialBanner/SocialBanner";
import Faq, { FAQQ } from "@/components/molecules/FAQ/faqq";
import Footer from "@/components/organisms/Footer/Footer";
import NewsSection from "@/components/molecules/NewsSection/NewsSection";
import BranchPreview from "@/components/organisms/BranchPreview/BranchPreview";
import styles from "./page.module.scss"

// export default function Home() {
//   return (
//     <main style={{ position: 'relative', minHeight: '200vh' }}>
      
     
//       <section style={{ 
//         position: 'fixed', 
//         top: '80px', 
//         left: 0,
//         width: '100%',
//         height: 'calc(100vh - 80px)', 
//         zIndex: 1,
//         backgroundColor: '#fff' 
//       }}>
//         <Hero />
//       </section>

      
//       <div style={{ height: '100vh', pointerEvents: 'none' }}></div>

  
//       <div style={{ 
//         position: 'relative', 
//         zIndex: 10, 
//         background: '#0d0211', 
//         borderRadius: '80px 80px 0 0',
//         minHeight: '100vh'
//       }}>
//         <div className={styles.mainWrapper}
//         style={{ padding: '20px 0' }}>
//            <AppBanner />
//            <SocialBanner />
//            <CreditCalculator/>
//            <VacancyBanner/>
//            <NetworkStats/>
//            {/* <BranchPreview/> */}
//            <NewsSection/>
//             <Faq/>
//             <Footer/>
//         </div>
//       </div>
      
//     </main>
//   );
// }
export default function Home() {
  return (
    <main style={{ position: 'relative', minHeight: '200vh' }}>
      
      {/* Hero Section - Arxa tərəfdə sabit qalır */}
      <section style={{ 
        position: 'fixed', 
        top: '80px', 
        left: 0,
        width: '100%',
        height: 'calc(100vh - 80px)', 
        zIndex: 1,
        backgroundColor: '#fff' 
      }}>
        <Hero />
      </section>

      {/* Hero-nun altından keçmək üçün boşluq */}
      <div style={{ height: '100vh', pointerEvents: 'none' }}></div>

      {/* ƏSAS KONTREYNER - Bütün alt panellər buradadır */}
      <div className={styles.mainWrapper}>
        <div style={{ padding: '20px 0' }}>
           <AppBanner />
           <SocialBanner />
           <CreditCalculator/>
           <VacancyBanner/>
           <NetworkStats/>
           <NewsSection/>
           <Faq/>
           <Footer/>
        </div>
      </div>
      
    </main>
  );
}

