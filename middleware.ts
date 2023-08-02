import { NextRequest, NextResponse } from "next/server";
// import { verifyJWT } from "./lib/token";
// import { getErrorResponse } from "./lib/helpers";

/* interface AuthenticatedRequest extends NextRequest {
  user: {
    id: string;
  };
} */

let redirectToLogin = false;
export async function middleware(req: NextRequest) {
  let token: string | undefined;
  const path = req.nextUrl.pathname;

  const isPublicPath =
    path === "/login" || path === "/register" || path === "/forgot-password";
    
  if (req.cookies.has("token")) {
    token = req.cookies.get("token")?.value;
  } else if (req.headers.get("Authorization")?.startsWith("Bearer ")) {
    token = req.headers.get("Authorization")?.substring(7);
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
  }

  const response = NextResponse.next();

  /*
  try {
    if (token) {
      const { sub } = await verifyJWT<{ sub: string }>(token);
      response.headers.set("X-USER-ID", sub);
      (req as AuthenticatedRequest).user = { id: sub };
    }
  } catch (error) {
    redirectToLogin = true;
    if (req.nextUrl.pathname.startsWith("/api")) {
      return getErrorResponse(401, "Token is invalid or user doesn't exists");
    }

    return NextResponse.redirect(
      new URL(`/login?${new URLSearchParams({ error: "badauth" })}`, req.url)
    );
  }

  const authUser = (req as AuthenticatedRequest).user;

  if (!authUser) {
    return NextResponse.redirect(
      new URL(
        `/login?${new URLSearchParams({
          error: "badauth",
          forceLogin: "true",
        })}`,
        req.url
      )
    );
  }

  if (req.url.includes("/login") && authUser) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  } */

  return response;
}

export const config = {
  matcher: ["/dashboard", "/login", "/api/users/:path*", "/api/auth/logout"],
};
