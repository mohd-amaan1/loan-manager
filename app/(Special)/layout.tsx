"use client";

import Sidebar from "@/components/sideBar";
import NavbarA from "@/components/navBarA";
import { useState } from "react";

export default function ({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };
  return (
    <div>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <div className="flex-1 flex flex-col">
        <NavbarA />
      </div>
      <div>{children}</div>
    </div>
  );
}
