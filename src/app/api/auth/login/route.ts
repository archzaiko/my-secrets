import { NextResponse } from "next/server";

import { getApi } from "@/api";

const { authPort } = getApi();

export async function GET() {
  const data = await authPort.login();
  return NextResponse.json(data);
}
