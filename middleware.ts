import { NextResponse } from "next/server";
import { withAuth } from "next-auth/middleware";
import { getToken } from "next-auth/jwt";

export default withAuth(
  async function middleware(req) {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

    const { pathname } = req.nextUrl;

    if (!token) {
      return NextResponse.redirect(new URL("/api/auth/signin", req.url));
    }

    const userRole = token.role as string;

    const isAdminRoute = pathname.startsWith("/admin");
    const isVerifierRoute = pathname.startsWith("/verifier");
    const isUserRoute = pathname.startsWith("/user");

    if (
      (isAdminRoute && userRole !== "ADMIN") ||
      (isVerifierRoute && userRole !== "VERIFIER") ||
      (isUserRoute && userRole !== "USER")
    ) {
      // Redirect to logout endpoint
      const logoutUrl = new URL("/api/auth/signout", req.url);
      logoutUrl.searchParams.set(
        "callbackUrl",
        "/api/auth/signin?error=Unauthorized"
      );
      return NextResponse.redirect(logoutUrl);
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = {
  matcher: ["/:path* /user/:path*", "/verifier/:path*", "/admin/:path*"],
};
