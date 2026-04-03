import NextAuth from "next-auth";
import Passkey from "next-auth/providers/passkey";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/lib/prisma";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  providers: [
    Passkey({
      relayingParty: {
        id: process.env.WEBAUTHN_RP_ID,
        name: "Hybrid AI-SOC Triage",
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = "analyst";
      }

      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.role = typeof token.role === "string" ? token.role : undefined;
      }

      return session;
    },
  },
});