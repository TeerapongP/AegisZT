import NextAuth from "next-auth";
import authConfig from "@/auth";

const handler = NextAuth(authConfig);

export const runtime = "nodejs";

export { handler as GET, handler as POST };