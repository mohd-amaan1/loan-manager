"use client";

import DashboardCards from "@/components/cards";
import NavbarA from "@/components/navBarA";
import Sidebar from "@/components/sideBar";
import { useState } from "react";

export default function Home() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <div className="flex-1 flex flex-col">
        <NavbarA toggleSidebar={toggleSidebar} />
        
        <div className="flex-1 p-6 bg-gray-100">
          <DashboardCards />
        </div>
      </div>
    </div>
  );
}
