
const CBAR_BASE = process.env.CBAR_API_URL ?? "";
const CBAR_URL = (date) => `${CBAR_BASE.replace(/\/+$/, "")}/${date}.xml`;
const GOLD_URL = process.env.GOLD_PRICES_API_URL;

const REQUEST_OPTIONS = {
  headers: { "User-Agent": "Mozilla/5.0" },
  next: { revalidate: 3600 },
};


const TIMEOUT_MS = 8000;

const withTimeout = () => ({ ...REQUEST_OPTIONS, signal: AbortSignal.timeout(TIMEOUT_MS) });

const bakuDate = (daysAgo = 0) => {
  const date = new Date(Date.now() - daysAgo * 86400000);
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Baku",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).formatToParts(date);
  const get = (type) => parts.find((p) => p.type === type)?.value;
  return `${get("day")}.${get("month")}.${get("year")}`;
};

const readTag = (xml, tag) =>
  xml.match(new RegExp(`<${tag}>([\\s\\S]*?)</${tag}>`))?.[1]?.trim();

function parseCbar(xml) {
  const rates = {};
  const valutes = xml.matchAll(/<Valute\s+Code="([^"]+)"\s*>([\s\S]*?)<\/Valute>/g);

  for (const [, code, body] of valutes) {
    const nominal = parseFloat(readTag(body, "Nominal")) || 1;
    const value = parseFloat(readTag(body, "Value"));
    if (Number.isFinite(value)) {
      rates[code] = { name: readTag(body, "Name") ?? code, value: value / nominal };
    }
  }

  return rates;
}

export { CBAR_URL, GOLD_URL, bakuDate };

async function fetchCbar(date) {
  if (!CBAR_BASE) return null;
  try {
   
    const res = await fetch(CBAR_URL(date), withTimeout());
    if (!res.ok) return null;
    const rates = parseCbar(await res.text());
    return Object.keys(rates).length ? rates : null;
  } catch {
    return null;
  }
}



async function findCbarDays(count = 2, maxDays = 10) {
  const results = await Promise.all(
    Array.from({ length: maxDays }, async (_, day) => {
      const date = bakuDate(day);
      const rates = await fetchCbar(date);
      return rates ? { date, day, rates } : null;
    })
  );
  return results.filter(Boolean).slice(0, count);
}

const trendOf = (current, previous) => {
  if (!Number.isFinite(previous) || current === previous) return "stable";
  return current > previous ? "up" : "down";
};

export async function getCurrencyRates(codes = ["USD"]) {

  const [latest, previous] = await findCbarDays();
  if (!latest) return { date: null, rates: [] };

  const rates = codes
    .filter((code) => latest.rates[code])
    .map((code) => ({
      code,
      name: latest.rates[code].name,
      value: latest.rates[code].value,
      trend: trendOf(latest.rates[code].value, previous?.rates[code]?.value),
    }));

  return { date: latest.date, rates };
}

export async function getGoldPrices() {
  if (!GOLD_URL) return [];
  try {

    const res = await fetch(GOLD_URL, { ...withTimeout(), next: { revalidate: 300 } });
    if (!res.ok) return [];
    const data = JSON.parse((await res.text()).replace(/^﻿/, "").trim());
    const list = Array.isArray(data?.prices) ? data.prices : [];

    return list
      .map((item) => item?.price ?? item)
      .map((p) => ({ assay: String(p?.name ?? "").trim(), price: parseFloat(p?.price) }))
      .filter((p) => p.assay && Number.isFinite(p.price));
  } catch {
    return [];
  }
}
