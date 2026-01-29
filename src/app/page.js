import CreditCalculator from "@/components/molecules/Calculator/Calculator";
import AppBanner from "@/components/organisms/AppBanner/AppBanner";
import Hero from "@/components/organisms/Hero/Hero";
import SocialBanner from "@/components/organisms/SocialBanner/SocialBanner";


export default function Home() {
  return (
    <main style={{ position: 'relative', minHeight: '200vh' }}>
      
     
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

      
      <div style={{ height: '100vh', pointerEvents: 'none' }}></div>

  
      <div style={{ 
        position: 'relative', 
        zIndex: 10, 
        background: '#0d0211', 
        borderRadius: '80px 80px 0 0',
        minHeight: '100vh'
      }}>
        <div style={{ padding: '20px 0' }}>
           <AppBanner />
           <SocialBanner />
           <CreditCalculator/>
        </div>
      </div>
      
    </main>
  );
}

