import { prisma } from '@/prisma/client';
import { PrismaAdapter } from "@auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        name: { label: "Name", type: "text", placeholder: "John Doe" },
        email: { label: "Email", type: "email", placeholder: "johndoe@example.com" },
        password: { label: "Password", type: "password", placeholder: "••••••••" },
        role: { label: "Role", type: "text", placeholder: "USER / ADMIN / VERIFIER" },
        isSignup: { label: "Signup?", type: "checkbox" }
      },
      async authorize(credentials) {
        const { name, email, password, role, isSignup } = credentials as {
          name: string;
          email: string;
          password: string;
          role: string;
          isSignup: string;
        };

        if (!email || !password || !role) {
          throw new Error("Missing required fields.");
        }

        // Check if the user exists
        const existingUser = await prisma.user.findUnique({ where: { email } });

        if (isSignup === "on") {
          if (existingUser) {
            throw new Error("User already exists.");
          }

          const hashedPassword = await bcrypt.hash(password, 10);

          // Use Prisma Adapter to create the user
          const newUser = await prisma.user.create({
            data: {
              name,
              email,
              password: hashedPassword,
              role: role.toUpperCase(),  // Ensure consistent casing
            },
          });

          return newUser;
        } else {
          // Signin Logic
          if (!existingUser) {
            throw new Error("No user found with this email.");
          }

          const passwordMatch = await bcrypt.compare(password, existingUser.password);

          if (!passwordMatch) {
            throw new Error("Invalid credentials.");
          }

          return existingUser;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;  // Store role in the token
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as string;  // Attach role to the session
      }
      return session;
    },
    async redirect({ url, baseUrl }) {
      return url.startsWith(baseUrl) ? url : baseUrl;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
