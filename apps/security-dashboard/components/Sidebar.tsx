"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Shield, BarChart3, AlertTriangle, FileText, Settings, Activity, X } from "lucide-react";
import type { MenuItem } from "@/types";

const menuItems: MenuItem[] = [
  { icon: BarChart3, label: "Overview", path: "/" },
  { icon: Activity,  label: "Events",   path: "/events" },
  { icon: AlertTriangle, label: "Alerts",  path: "/alerts" },
  { icon: FileText,  label: "Reports",  path: "/reports" },
  { icon: Settings,  label: "Settings", path: "/settings" },
];

export default function Sidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  const pathname = usePathname();

  return (
    <>
      {/* overlay (mobile) */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity lg:hidden ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* sidebar */}
      <aside
        className={`fixed z-50 inset-y-0 left-0 w-64
        bg-slate-900 text-slate-100
        transform transition-transform duration-300 ease-in-out
        lg:translate-x-0 lg:static lg:block
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Shield className="w-8 h-8 text-blue-400" />
            <span className="text-xl font-bold">AegisZT</span>
          </div>
          <button onClick={onClose} className="lg:hidden">
            <X className="w-6 h-6 text-slate-300" />
          </button>
        </div>

        <nav className="mt-6 space-y-1 px-2">
          {menuItems.map(({ icon: Icon, label, path = "#" }, idx) => {
            const isActive =
              path === "/"
                ? pathname === "/"
                : pathname.startsWith(path);

            return (
              <Link
                key={idx}
                href={path}
                aria-current={isActive ? "page" : undefined}
                onClick={onClose} 
                className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                  isActive
                    ? "bg-slate-700 text-slate-100"
                    : "text-slate-300 hover:bg-slate-700 hover:text-white"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-sm font-medium">{label}</span>
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
