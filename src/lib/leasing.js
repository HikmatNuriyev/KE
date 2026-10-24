export const LEASING = {
  marketNew: 0.9,
  marketUsed: 0.85,
  liquid: 0.8,
  maxLoanShare: 0.98,
  bankCommission: 0.05,
  defaultMonths: 36,
  maxMonths: 48,
  baseRateShort: 26,
  baseRateLong: 28,
  shortTermLimit: 36,
  hiddenRate: 0.5,
  gpsPerMonth: 11,
  lifeInsurance: 100,
  expert: 100,
  cashOut: 0.003,
  cascoOldAge: 15,
  cascoOld: 0.0406,
  cascoThreshold: 20000,
  cascoHigh: 0.026,
  cascoLow: 0.037,
};

export const clampMonths = (months) => {
  const m = Math.floor(Number(months) || 0);
  if (m <= 0) return LEASING.defaultMonths;
  return Math.min(m, LEASING.maxMonths);
};

export const monthlyPayment = (loan, annualRate, months) => {
  const r = annualRate / 12 / 100;
  if (r === 0) return loan / months;
  return (loan * r) / (1 - Math.pow(1 + r, -months));
};

export const calculateLeasing = ({
  price,
  year,
  isNew,
  months,
  downPayment,
  currentYear = new Date().getFullYear(),
}) => {
  const p = Number(price) || 0;
  if (p <= 0) return null;

  const n = clampMonths(months);
  const age = Math.max(0, currentYear - Number(year));

  const marketValue = p * (isNew ? LEASING.marketNew : LEASING.marketUsed);
  const liquidValue = p * LEASING.liquid;
  const maxLoan = liquidValue * LEASING.maxLoanShare;

  let cascoRate;
  if (age > LEASING.cascoOldAge) cascoRate = LEASING.cascoOld;
  else if (marketValue >= LEASING.cascoThreshold) cascoRate = LEASING.cascoHigh;
  else cascoRate = LEASING.cascoLow;

  const costs = {
    casco: marketValue * cascoRate,
    gps: LEASING.gpsPerMonth * n,
    life: LEASING.lifeInsurance,
    expert: LEASING.expert,
    cashOut: p * LEASING.cashOut,
  };
  const totalCosts = Object.values(costs).reduce((a, b) => a + b, 0);

  const baseRate =
    n <= LEASING.shortTermLimit ? LEASING.baseRateShort : LEASING.baseRateLong;
  const rate = baseRate + LEASING.hiddenRate;
  const payout = 1 - LEASING.bankCommission;

  const hasDown = downPayment !== "" && downPayment != null;
  const minDownPayment = p + totalCosts - maxLoan * payout;

  let loan;
  let down;
  let shortfall = 0;

  if (hasDown) {
    down = Number(downPayment) || 0;
    loan = (p - down + totalCosts) / payout;
    if (loan > maxLoan) shortfall = (loan - maxLoan) * payout;
  } else {
    loan = maxLoan;
    down = minDownPayment;
  }

  const noLoanNeeded = loan <= 0;
  const valid = !noLoanNeeded && shortfall === 0;

  return {
    months: n,
    age,
    marketValue,
    liquidValue,
    maxLoan,
    costs,
    totalCosts,
    rate,
    loan,
    downPayment: down,
    minDownPayment,
    autoDownPayment: !hasDown,
    shortfall,
    noLoanNeeded,
    valid,
    monthly: valid ? monthlyPayment(loan, rate, n) : null,
  };
};
