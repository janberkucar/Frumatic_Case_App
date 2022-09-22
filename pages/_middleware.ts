import { nanoid } from "nanoid";
import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  console.log("Request", req.cookies);
  if (req.cookies.get("app-token")) return;

  const random = nanoid();
  console.log(random);

  const res = NextResponse.next();

  res.cookie("app-token", random, { sameSite: "strict" });

  return res;
}
