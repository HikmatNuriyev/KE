import AppBanner from "@/components/organisms/AppBanner/AppBanner";
import Hero from "@/components/organisms/Hero/Hero";
import SocialBanner from "@/components/organisms/SocialBanner/SocialBanner";

export default function Home() {
  return (
    <main >
    <Hero/>
    <SocialBanner/>
    <AppBanner/>
    </main>
  );
}