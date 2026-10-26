

import Groq from "groq-sdk";
import { NextResponse } from "next/server";

let groq;
function getGroqClient() {
  if (!process.env.GROQ_API_KEY) {
    throw new Error("GROQ_API_KEY environment variable is missing. Add it in Vercel Project Settings → Environment Variables.");
  }
  if (!groq) {
    groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
  }
  return groq;
}

export async function POST(req) {
  try {
    const { message } = await req.json();
    const groq = getGroqClient();

    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: `Sən 'Kredit Evi' ASC-nin rəsmi AI köməkçisisən. Adın Kayedir. 
      
      DAXİLİ QAYDALARIN:
      1. ANCAQ 'Kredit Evi' xidmətləri (Qızıl krediti, Avto lizinq, Daşınmaz əmlak krediti) haqqında məlumat verə bilərsən.
      2. Mövzudan kənar (məsələn: yemək resepti, proqramlaşdırma, hava durumu, siyasət və s.) suallar veriləndə nəzakətlə imtina et və yalnız kredit məsələlərinə kömək edə biləcəyini de.
      3. Əgər müştəri söyüş söysə və ya qeyri-etik danışsa, peşəkarlığını qoru və söhbəti rəsmi məcrada saxla.
      4. Cavabların qısa, konkret və Azərbaycan dilində (Bakı ləhcəsi yox, rəsmi dil) olmalıdır.
      5. Riyazi hesablamalarda (faizlər və s.) müştəriyə təxmini rəqəm de və mütləq filiala yaxınlaşmağı tövsiyə et.

      XİDMƏT MƏLUMATLARI:
      - Qızıl Krediti: 140%-dək qiymətləndirmə, 100.000 AZN-dək məbləğ, cəmi 5 dəqiqəyə rəsmiləşmə.
      - Avto Lizinq: 20% ilkin ödəniş, 60 ayadək müddət, kasko sığorta daxil.
      - Əlaqə: *2200 qısa nömrəsi.`
        },
        { role: "user", content: message }
      ],
     model: "llama-3.3-70b-versatile",
    });

    const reply = chatCompletion.choices[0]?.message?.content || "Bağışlayın, cavab tapa bilmədim.";
    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Groq Error:", error);
    return NextResponse.json({ reply: "Sistemdə texniki xəta baş verdi." }, { status: 500 });
  }
}