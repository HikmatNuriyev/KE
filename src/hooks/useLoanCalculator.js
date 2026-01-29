import { useState, useEffect } from "react";

/**
 * Kredit hesablama məntiqini idarə edən Custom Hook
 * @param {number} initialWeight - Başlanğıc qram (məsələn: 10)
 * @param {number} initialCarat - Başlanğıc əyar (məsələn: 585)
 */
export const useLoanCalculator = (initialWeight = 10, initialCarat = 585) => {
  const [weight, setWeight] = useState(initialWeight);
  const [carat, setCarat] = useState(initialCarat);
  const [amount, setAmount] = useState(0);

  // Qiymət cədvəli - Sabah bunu API-dan gələn dataya da bağlaya bilərik
  const GOLD_PRICES = {
    585: 65,  // 14K üçün qram başına verilən kredit (AZN)
    750: 85,  // 18K
    999: 115, // 24K (Saf qızıl)
  };

  useEffect(() => {
    // Çəki və ya əyar dəyişəndə işə düşür
    const calculate = () => {
      const pricePerGram = GOLD_PRICES[carat] || 0;
      const total = Number(weight) * pricePerGram;
      
      // Rəqəmi tamamlayaq (məsələn: 1250.50 yerinə 1251 və ya yuvarlaq)
      setAmount(Math.round(total));
    };

    calculate();
  }, [weight, carat]);

  return {
    weight,
    setWeight,
    carat,
    setCarat,
    amount,
    prices: GOLD_PRICES // Lazım olarsa komponentdə qiymətləri göstərmək üçün
  };
};