import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    id: string;
    name: string;
    email: string;
    role: string;    // Add role here
  }

  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
      role: string;   // Add role to the session user
    };
  }

  interface JWT {
    id: string;
    name: string;
    email: string;
    role: string;     // Add role to the JWT
  }
}
