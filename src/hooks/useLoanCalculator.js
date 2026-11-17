import { useState, useEffect } from "react";

export const useLoanCalculator = (initialWeight = 10, initialCarat = 585) => {
  const [weight, setWeight] = useState(initialWeight);
  const [carat, setCarat] = useState(initialCarat);
  const [amount, setAmount] = useState(0);

  const GOLD_PRICES = {
    585: 65,
    750: 85,
    999: 115,
  };

  useEffect(() => {
    const calculate = () => {
      const pricePerGram = GOLD_PRICES[carat] || 0;
      const total = Number(weight) * pricePerGram;

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
    prices: GOLD_PRICES
  };
};
