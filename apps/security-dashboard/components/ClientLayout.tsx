"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="tw-min-h-screen tw-bg-gray-100 tw-flex ">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <main className="tw-flex-1 tw-flex tw-flex-col">
        <Topbar onMenuClick={() => setSidebarOpen(true)} />
        <div className="tw-p-4 sm:tw-p-6 lg:tw-p-8 tw-space-y-8 tw-px-5">{children}</div>
      </main>
    </div>
  );
}
