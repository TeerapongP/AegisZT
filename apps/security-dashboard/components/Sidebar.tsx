"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Shield, BarChart3, AlertTriangle, FileText, Settings, Activity, X } from "lucide-react";
import { Button } from 'primereact/button';
import { Sidebar as PrimeSidebar } from 'primereact/sidebar';
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
        className={`tw-fixed tw-inset-0 tw-z-40 tw-bg-black/40 tw-transition-opacity lg:tw-hidden ${
          open ? "tw-opacity-100" : "tw-opacity-0 tw-pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* sidebar */}
      <aside
        className={`tw-fixed tw-z-50 tw-inset-y-0 tw-left-0 tw-w-64
        tw-bg-slate-900 tw-text-slate-100
        tw-transform tw-transition-transform tw-duration-300 tw-ease-in-out
        lg:tw-translate-x-0 lg:tw-static lg:tw-block
        ${open ? "tw-translate-x-0" : "-tw-translate-x-full"}`}
      >
        <div className="tw-p-6 tw-flex tw-justify-between tw-items-center">
          <div className="tw-flex tw-items-center tw-space-x-2">
            <Shield className="tw-w-8 tw-h-8 tw-text-blue-400" />
            <span className="tw-text-xl tw-font-bold">AegisZT</span>
          </div>
          <Button 
            icon="pi pi-times" 
            onClick={onClose} 
            text 
            className="lg:tw-hidden tw-text-slate-300"
            size="small"
          />
        </div>

        <nav className="tw-mt-6 tw-space-y-1 tw-px-2">
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
                className={`tw-flex tw-items-center tw-gap-3 tw-px-3 tw-py-2 tw-rounded-lg tw-transition-colors ${
                  isActive
                    ? "tw-bg-slate-700 tw-text-slate-100"
                    : "tw-text-slate-300 hover:tw-bg-slate-700 hover:tw-text-white"
                }`}
              >
                <Icon className="tw-w-5 tw-h-5" />
                <span className="tw-text-sm tw-font-medium">{label}</span>
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
