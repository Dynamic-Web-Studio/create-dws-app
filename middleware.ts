import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {
    if (req.nextauth.token?.admin !== true) {
      return NextResponse.redirect(`${process.env.BASE_URL}/auth/login`);
    }
  },
  {
    secret: process.env.AUTH_SECRET,
  }
);

export const config = { matcher: ["/user-post"] };
