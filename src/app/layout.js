// import { Inter, Plus_Jakarta_Sans } from "next/font/google";
// import "@/styles/globals.scss";
// import Header from "@/components/organisms/Header/Header";
// import Providers from "./providers"; // Bunu indi yaradacağıq
// import Chatbot from "@/components/Chatbot/Chatbot";

// const inter = Inter({
//   subsets: ["latin"],
//   variable: "--font-inter",
// });

// const jakarta = Plus_Jakarta_Sans({
//   subsets: ["latin"],
//   variable: "--font-jakarta",
// });

// export const metadata = {
//   title: {
//     default: "KE - Qızıl Girovlu Kredit və Lizinq",
//     template: "%s | KE"
//   },
//   description: "Qızıl girovu ilə sürətli kreditlər, lizinq və onlayn maliyyə həlləri.",
//   // ... digər metadata hissələri olduğu kimi qalır
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="az" className={`${inter.variable} ${jakarta.variable}`} suppressHydrationWarning>
//       <body suppressHydrationWarning={true}>
//         <Providers>
//           <Header />
//           {children}
//           <Chatbot/>
//         </Providers>
//       </body>
//     </html>
//   );
// }

import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "@/styles/globals.scss";
import Header from "@/components/organisms/Header/Header";
import Chatbot from "@/components/Chatbot/Chatbot"; // Chatbotu bura əlavə etdik
import Providers from "./providers";

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
    template: "%s | KE",
  },
  description:
    "Qızıl girovu ilə sürətli kreditlər, lizinq və onlayn maliyyə həlləri.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="az"
      className={`${inter.variable} ${jakarta.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning={true}>
        <Providers>
          <Header />
          <main>{children}</main>
          <Chatbot />
        </Providers>
      </body>
    </html>
  );
}
