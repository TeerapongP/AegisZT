"use client";
import { Shield, BarChart3, AlertTriangle, FileText, Settings, Activity, X } from "lucide-react";
import type { MenuItem } from "@/types";

const menuItems: MenuItem[] = [
  { icon: BarChart3, label: "Overview", active: true },
  { icon: Activity, label: "Events" },
  { icon: AlertTriangle, label: "Alerts" },
  { icon: FileText, label: "Reports" },
  { icon: Settings, label: "Settings" },
];

export default function Sidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity lg:hidden ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={onClose}
      />
      <aside
        className={`fixed z-50 inset-y-0 left-0 w-64 bg-white border-r border-gray-200 text-gray-900 transform transition-transform lg:translate-x-0 lg:static lg:block
          ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Shield className="w-8 h-8 text-blue-500" />
            <span className="text-xl font-bold text-gray-900">AegisZT</span>
          </div>
          <button onClick={onClose} className="lg:hidden">
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>
        <nav className="mt-6 space-y-1">
          {menuItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <a
                key={idx}
                href="#"
                className={`flex items-center px-4 py-3 space-x-3 rounded-lg ${
                  item.active ? "bg-blue-50 text-blue-600 border-r-2 border-blue-600" : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{item.label}</span>
              </a>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
