import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

const SESSION_COOKIE = "aegis_session";
const PUBLIC_PATHS = ["/api/auth", "/login", "/forgot-password"];

function isPublicPath(pathname: string) {
  return PUBLIC_PATHS.some((path) => pathname === path || pathname.startsWith(`${path}/`));
}

export default async function middleware(request: NextRequest) {
  const { nextUrl, url, cookies } = request;
  const pathname = nextUrl.pathname;

  // Demo sign-in hook: /?login=1 creates a session cookie, then lands on dashboard.
  if (nextUrl.searchParams.get("login") === "1") {
    const redirectUrl = new URL("/", url);
    const response = NextResponse.redirect(redirectUrl);
    response.cookies.set(SESSION_COOKIE, "demo-auth", {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 8,
    });
    return response;
  }

  const token = await getToken({ req: request, secret: process.env.AUTH_SECRET });
  const hasSession = Boolean(cookies.get(SESSION_COOKIE)?.value) || Boolean(token);
  const isPublic = isPublicPath(pathname);

  if (!hasSession && !isPublic) {
    return NextResponse.redirect(new URL("/login", url));
  }

  if (hasSession && isPublic) {
    return NextResponse.redirect(new URL("/", url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};
