"use client";

import Navbar from "@/components/navBar";

export default function ({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="flex-1 flex flex-col">
        <Navbar />
      </div>
      {children}
    </div>
  );
}
