import { NextResponse } from "next/server";
import { getBranches } from "@/lib/branches";

export const revalidate = 3600;

export async function GET() {
  const branches = await getBranches();
  return NextResponse.json(branches);
}
