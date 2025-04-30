import { auth } from "@/auth";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const session = await auth(); // Get session

  if (!session) {
    const callbackUrl = encodeURIComponent(req.nextUrl.pathname); // Get the original path
    return NextResponse.redirect(
      new URL(`/signin?callbackUrl=${callbackUrl}`, req.url)
    );
  }

  return NextResponse.next(); // Allow access if authenticated
}

// Apply middleware to specific routes
export const config = {
  matcher: ["/cart", "/wishlist"], // Protects "/cart" and "/wishlist"
};
