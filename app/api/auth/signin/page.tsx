"use client";

import { useState, useEffect } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";

export default function AuthPage() {
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("USER");
  const [error, setError] = useState<string | null>(null);   // 🔥 Error message state

  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    // 🔥 Check for error query parameter
    const errorParam = searchParams.get("error");
    if (errorParam === "Unauthorized") {
      setError("You have been logged out due to unauthorized access.");
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
      name,
      role,
      isSignup: isSignup ? "on" : "off",
    });

    if (result?.error) {
      setError("Authentication failed. Please check your credentials.");
    } else {
      router.push(`/${role.toLowerCase()}`);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">{isSignup ? "Sign Up" : "Sign In"}</h2>

        {/* 🔥 Display error message */}
        {error && (
          <div className="bg-red-100 text-red-700 p-3 rounded mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {isSignup && (
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border rounded"
            />
          )}

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border rounded"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border rounded"
          />

          {isSignup && (
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full p-3 border rounded"
            >
              <option value="USER">User</option>
              <option value="ADMIN">Admin</option>
              <option value="VERIFIER">Verifier</option>
            </select>
          )}

          <button
            type="submit"
            className="w-full bg-green-500 text-white p-3 rounded hover:bg-green-600"
          >
            {isSignup ? "Sign Up" : "Sign In"}
          </button>
        </form>

        <div className="mt-4 text-center">
          <button
            onClick={() => setIsSignup(!isSignup)}
            className="text-blue-500 hover:underline"
          >
            {isSignup ? "Already have an account? Sign In" : "New here? Sign Up"}
          </button>
        </div>
      </div>
    </div>
  );
}
