import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "@/styles/globals.scss";
import Header from "@/components/organisms/Header/Header";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const metadata = {
  title: {
    default: "KE - Qızıl Girovlu Kredit və Lizinq",
    template: "%s | KE"
  },
  description: "Qızıl girovu ilə sürətli kreditlər, lizinq və onlayn maliyyə həlləri.",
  keywords: ["kredit", "qızıl girovu", "lizinq", "fintech", "azərbaycan"],
  alternates: {
    canonical: "https://ke.az", // Gələcəkdə real domeni bura yazacağıq
  },
  openGraph: {
    title: "KE - Modern Maliyyə Platforması",
    description: "Sürətli və etibarlı kredit müraciəti.",
    type: "website",
    locale: "az_AZ",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="az" className={`${inter.variable} ${jakarta.variable}`}>
      <body suppressHydrationWarning={true}>
        <Header />
        {children}
      </body>
    </html>
  );
}