import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export function middleware(req) {
  const token = req.cookies.get("token")?.value;
  const secret = process.env.JWT_SECRET;

  if (!secret) {
    throw new Error("Falta JWT_SECRET en .env.local");
  }

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  try {
    const decoded = jwt.verify(token, secret);

    if (req.nextUrl.pathname.startsWith("/user/admin") && decoded.rol !== 1) {
      return NextResponse.redirect(new URL("/login", req.url));
    }

    if (req.nextUrl.pathname.startsWith("/user/cliente") && decoded.rol !== 2) {
      return NextResponse.redirect(new URL("/login", req.url));
    }

    return NextResponse.next();
  } catch (err) {
    const response = NextResponse.redirect(new URL("/login", req.url));
    response.cookies.delete("token");
    return response;
  }
}

export const config = {
  matcher: [
    "/user/admin",
    "/user/cliente",
  ],
};
