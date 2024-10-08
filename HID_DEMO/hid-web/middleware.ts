// app/middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
   const isLoggedIn = req.cookies.get("isLoggedIn");

   if (isLoggedIn?.value == "false") {
      return NextResponse.redirect(new URL("/login", req.url));
   }

   return NextResponse.next();
}

export const config = {
   matcher: "/dashboard",
};
