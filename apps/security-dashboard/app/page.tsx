"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import StatsGrid from "@/components/StatsGrid";
import ChartsGrid from "@/components/ChartsGrid";
import EventsTable from "@/components/EventsTable";

export default function Page() {
  return (
     <>
      <StatsGrid />
      <ChartsGrid />
      <EventsTable />
    </>
  );
}
