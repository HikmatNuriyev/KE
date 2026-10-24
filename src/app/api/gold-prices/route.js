import { NextResponse } from "next/server";
import { getGoldPrices } from "@/lib/rates";

export const revalidate = 3600;

export async function GET() {
  const prices = await getGoldPrices();
  return NextResponse.json(prices);
}
