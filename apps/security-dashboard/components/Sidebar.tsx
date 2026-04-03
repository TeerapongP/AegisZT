"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Shield, BarChart3, AlertTriangle, FileText, Settings, Activity } from "lucide-react";
import type { MenuItem } from "@/types";

const menuItems: MenuItem[] = [
  { icon: BarChart3, label: "Overview", path: "/" },
  { icon: Activity,  label: "Events",   path: "/events" },
  { icon: AlertTriangle, label: "Alerts",  path: "/alerts" },
  { icon: FileText,  label: "Reports",  path: "/reports" },
  { icon: Settings,  label: "Settings", path: "/settings" },
];

export default function Sidebar({
  open,
  collapsed,
  onClose,
  onToggleCollapse,
}: {
  open: boolean;
  collapsed: boolean;
  onClose: () => void;
  onToggleCollapse: () => void;
}) {
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
        tw-bg-slate-900 tw-text-slate-100 tw-shrink-0
        tw-transform tw-transition-transform tw-duration-300 tw-ease-in-out
        lg:tw-translate-x-0 lg:tw-static lg:tw-block
        lg:tw-transition-[width] lg:tw-duration-300
        ${collapsed ? "lg:tw-w-20" : "lg:tw-w-64"}
        ${open ? "tw-translate-x-0" : "-tw-translate-x-full"}`}
      >
        <button
          type="button"
          onClick={onToggleCollapse}
          className={`tw-w-full tw-p-6 tw-flex tw-items-center tw-justify-between tw-text-left tw-transition-colors hover:tw-bg-white/5 ${
            collapsed ? "lg:tw-justify-center" : ""
          }`}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          <div className={`tw-flex tw-items-center tw-gap-2 ${collapsed ? "lg:tw-gap-0" : ""}`}>
            <Shield className="tw-w-8 tw-h-8 tw-text-blue-400 tw-shrink-0" />
            <span className={`tw-text-xl tw-font-bold ${collapsed ? "lg:tw-hidden" : ""}`}>AegisZT</span>
          </div>
        </button>

        <div className="tw-px-6 tw-pb-2 lg:tw-hidden">
          <button
            type="button"
            onClick={onClose}
            className="tw-grid tw-place-items-center tw-h-9 tw-w-9 tw-rounded-md tw-border tw-border-white/40 tw-bg-white/10 tw-text-white hover:tw-bg-white/20"
            aria-label={open ? "Close sidebar" : "Open sidebar"}
          >
            <span className="tw-sr-only">Close sidebar</span>
            <span className="tw-text-sm tw-font-semibold">×</span>
          </button>
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
                  collapsed ? "lg:tw-justify-center lg:tw-px-2" : ""
                } ${
                  isActive
                    ? "tw-bg-slate-700 tw-text-slate-100"
                    : "tw-text-slate-300 hover:tw-bg-slate-700 hover:tw-text-white"
                }`}
              >
                <Icon className="tw-w-5 tw-h-5" />
                <span className={`tw-text-sm tw-font-medium ${collapsed ? "lg:tw-hidden" : ""}`}>{label}</span>
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
