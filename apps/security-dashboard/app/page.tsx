"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import StatsGrid from "@/components/StatsGrid";
import ChartsGrid from "@/components/ChartsGrid";
import EventsTable from "@/components/EventsTable";

export default function Page() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <main className="flex-1 flex flex-col">
        <Topbar onMenuClick={() => setSidebarOpen(true)} />
        <div className="p-4 sm:p-6 lg:p-8 space-y-8">
          <StatsGrid />
          <ChartsGrid />
          <EventsTable />
        </div>
      </main>
    </div>
  );
}
