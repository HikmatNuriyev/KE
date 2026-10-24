const BRANCHES_URL = process.env.BRANCHES_API_URL;

const AZ_BOUNDS = { minLat: 38.39, maxLat: 41.91, minLng: 44.77, maxLng: 50.4 };

const cleanName = (title = "") =>
  title
    .replace(/filial[ıi]\s*$/i, "")
    .replace(/["“”«»]/g, "")
    .trim();

const cleanAddress = (address = "") => address.replace(/^Ünvan\s*:?\s*/i, "").trim();

const toSvgPoint = (lat, lng) => ({
  x: ((lng - AZ_BOUNDS.minLng) / (AZ_BOUNDS.maxLng - AZ_BOUNDS.minLng)) * 1024,
  y: ((AZ_BOUNDS.maxLat - lat) / (AZ_BOUNDS.maxLat - AZ_BOUNDS.minLat)) * 1024,
});

export function normalizeBranches(data) {
  const list = Array.isArray(data)
    ? data
    : Array.isArray(data?.branches)
      ? data.branches
      : Object.values(data?.branches ?? {});

  return list
    .map((item) => item?.branch ?? item)
    .map((b, i) => {
      const [lat, lng] = String(b?.geo ?? "")
        .split(",")
        .map((v) => parseFloat(v));

      return {
        id: String(b?.sn ?? i),
        slug: b?.slug?.replace(/-+$/, "") ?? "",
        name: cleanName(b?.title),
        address: cleanAddress(b?.address),
        lat,
        lng,
        ...toSvgPoint(lat, lng),
      };
    })
    .filter((b) => b.name && Number.isFinite(b.lat) && Number.isFinite(b.lng));
}

export async function getBranches() {
  if (!BRANCHES_URL) return [];
  try {
    const res = await fetch(BRANCHES_URL, {
      headers: { Accept: "application/json", "User-Agent": "Mozilla/5.0" },
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    const text = await res.text();
    return normalizeBranches(JSON.parse(text.replace(/^\uFEFF/, "").trim()));
  } catch {
    return [];
  }
}
