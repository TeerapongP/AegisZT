"use client";

import { useState } from "react";
import { User, Bell, Shield, Key, Globe, Mail, Save, Moon } from "lucide-react";
import { useDarkMode } from "@/hooks/useDarkMode";

type TabKey = "profile" | "security" | "notifications" | "preferences";

interface Tab {
  key: TabKey;
  label: string;
  icon: React.ElementType;
}

const tabs: Tab[] = [
  { key: "profile", label: "Profile", icon: User },
  { key: "security", label: "Security", icon: Shield },
  { key: "notifications", label: "Notifications", icon: Bell },
  { key: "preferences", label: "Preferences", icon: Globe },
];

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<TabKey>("profile");
  const [isSaving, setIsSaving] = useState(false);
  const { isDark, toggle: toggleDarkMode } = useDarkMode();

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => setIsSaving(false), 1000);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return (
          <div className="tw-space-y-6">
            <div>
              <h2 className="tw-text-lg tw-font-semibold tw-text-slate-900 dark:tw-text-slate-100">Profile Information</h2>
              <p className="tw-text-sm tw-text-slate-500 dark:tw-text-slate-400 tw-mt-1">Update your account and profile information</p>
            </div>

            <div className="tw-grid tw-gap-4">
              <div className="tw-grid tw-gap-2">
                <label className="tw-text-sm tw-font-medium tw-text-slate-700 dark:tw-text-slate-200">Full Name</label>
                <input
                  type="text"
                  defaultValue="SOC Analyst"
                  className="tw-px-3 tw-py-2 tw-border tw-border-slate-300 dark:tw-border-slate-600 tw-rounded-lg tw-text-sm tw-focus:tw-outline-none tw-focus:tw-ring-2 tw-focus:tw-ring-blue-500 tw-bg-white dark:tw-bg-slate-700 tw-text-slate-900 dark:tw-text-slate-100"
                />
              </div>

              <div className="tw-grid tw-gap-2">
                <label className="tw-text-sm tw-font-medium tw-text-slate-700 dark:tw-text-slate-200">Email Address</label>
                <input
                  type="email"
                  defaultValue="analyst@example.com"
                  className="tw-px-3 tw-py-2 tw-border tw-border-slate-300 dark:tw-border-slate-600 tw-rounded-lg tw-text-sm tw-focus:tw-outline-none tw-focus:tw-ring-2 tw-focus:tw-ring-blue-500 tw-bg-white dark:tw-bg-slate-700 tw-text-slate-900 dark:tw-text-slate-100"
                />
              </div>

              <div className="tw-grid tw-gap-2">
                <label className="tw-text-sm tw-font-medium tw-text-slate-700 dark:tw-text-slate-200">Role</label>
                <input
                  type="text"
                  defaultValue="Security Analyst"
                  disabled
                  className="tw-px-3 tw-py-2 tw-border tw-border-slate-300 dark:tw-border-slate-600 tw-rounded-lg tw-text-sm tw-bg-slate-100 dark:tw-bg-slate-800 tw-text-slate-500 dark:tw-text-slate-400"
                />
              </div>
            </div>
          </div>
        );

      case "security":
        return (
          <div className="tw-space-y-6">
            <div>
              <h2 className="tw-text-lg tw-font-semibold tw-text-slate-900 dark:tw-text-slate-100">Security Settings</h2>
              <p className="tw-text-sm tw-text-slate-500 dark:tw-text-slate-400 tw-mt-1">Manage your password and authentication settings</p>
            </div>

            <div className="tw-grid tw-gap-4">
              <div className="tw-grid tw-gap-2">
                <label className="tw-text-sm tw-font-medium tw-text-slate-700 dark:tw-text-slate-200">Current Password</label>
                <input
                  type="password"
                  className="tw-px-3 tw-py-2 tw-border tw-border-slate-300 dark:tw-border-slate-600 tw-rounded-lg tw-text-sm tw-focus:tw-outline-none tw-focus:tw-ring-2 tw-focus:tw-ring-blue-500 tw-bg-white dark:tw-bg-slate-700 tw-text-slate-900 dark:tw-text-slate-100"
                />
              </div>

              <div className="tw-grid tw-gap-2">
                <label className="tw-text-sm tw-font-medium tw-text-slate-700 dark:tw-text-slate-200">New Password</label>
                <input
                  type="password"
                  className="tw-px-3 tw-py-2 tw-border tw-border-slate-300 dark:tw-border-slate-600 tw-rounded-lg tw-text-sm tw-focus:tw-outline-none tw-focus:tw-ring-2 tw-focus:tw-ring-blue-500 tw-bg-white dark:tw-bg-slate-700 tw-text-slate-900 dark:tw-text-slate-100"
                />
              </div>

              <div className="tw-grid tw-gap-2">
                <label className="tw-text-sm tw-font-medium tw-text-slate-700 dark:tw-text-slate-200">Confirm New Password</label>
                <input
                  type="password"
                  className="tw-px-3 tw-py-2 tw-border tw-border-slate-300 dark:tw-border-slate-600 tw-rounded-lg tw-text-sm tw-focus:tw-outline-none tw-focus:tw-ring-2 tw-focus:tw-ring-blue-500 tw-bg-white dark:tw-bg-slate-700 tw-text-slate-900 dark:tw-text-slate-100"
                />
              </div>
            </div>

            <div className="tw-pt-4 tw-border-t tw-border-slate-200 dark:tw-border-slate-700">
              <h3 className="tw-text-sm tw-font-medium tw-text-slate-900 dark:tw-text-slate-100 tw-mb-3">Two-Factor Authentication</h3>
              <div className="tw-flex tw-items-center tw-justify-between tw-p-4 tw-bg-slate-50 dark:tw-bg-slate-700/50 tw-rounded-lg">
                <div className="tw-flex tw-items-center tw-gap-3">
                  <Key className="tw-w-5 tw-h-5 tw-text-slate-400" />
                  <div>
                    <p className="tw-text-sm tw-font-medium tw-text-slate-700 dark:tw-text-slate-200">Enable 2FA</p>
                    <p className="tw-text-xs tw-text-slate-500 dark:tw-text-slate-400">Add an extra layer of security</p>
                  </div>
                </div>
                <button className="tw-px-4 tw-py-2 tw-text-sm tw-bg-blue-600 tw-text-white tw-rounded-lg hover:tw-bg-blue-700 tw-transition-colors">
                  Enable
                </button>
              </div>
            </div>
          </div>
        );

      case "notifications":
        return (
          <div className="tw-space-y-6">
            <div>
              <h2 className="tw-text-lg tw-font-semibold tw-text-slate-900 dark:tw-text-slate-100">Notification Preferences</h2>
              <p className="tw-text-sm tw-text-slate-500 dark:tw-text-slate-400 tw-mt-1">Choose how you want to receive alerts and updates</p>
            </div>

            <div className="tw-space-y-3">
              {[
                { id: "email-alerts", label: "Email Alerts", desc: "Receive security alerts via email", icon: Mail },
                { id: "browser-notif", label: "Browser Notifications", desc: "Get real-time notifications in your browser", icon: Bell },
                { id: "digest", label: "Daily Digest", desc: "Receive a summary of events daily", icon: Globe },
              ].map((item) => (
                <div key={item.id} className="tw-flex tw-items-center tw-justify-between tw-p-4 tw-border tw-border-slate-200 dark:tw-border-slate-700 tw-rounded-lg">
                  <div className="tw-flex tw-items-center tw-gap-3">
                    <item.icon className="tw-w-5 tw-h-5 tw-text-slate-400" />
                    <div>
                      <p className="tw-text-sm tw-font-medium tw-text-slate-700 dark:tw-text-slate-200">{item.label}</p>
                      <p className="tw-text-xs tw-text-slate-500 dark:tw-text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                  <label className="tw-relative tw-inline-flex tw-items-center tw-cursor-pointer">
                    <input type="checkbox" className="tw-sr-only tw-peer" defaultChecked />
                    <div className="tw-w-11 tw-h-6 tw-bg-slate-200 dark:tw-bg-slate-700 tw-peer-focus:tw-outline-none tw-peer-focus:tw-ring-4 tw-peer-focus:tw-ring-blue-100 tw-rounded-full tw-peer tw-peer-checked:tw-bg-blue-600 tw-transition-colors"></div>
                    <div className="tw-absolute tw-top-0.5 tw-left-0.5 tw-w-5 tw-h-5 tw-bg-white tw-rounded-full tw-transition-transform tw-peer-checked:tw-translate-x-5"></div>
                  </label>
                </div>
              ))}
            </div>
          </div>
        );

      case "preferences":
        return (
          <div className="tw-space-y-6">
            <div>
              <h2 className="tw-text-lg tw-font-semibold tw-text-slate-900 dark:tw-text-slate-100">Preferences</h2>
              <p className="tw-text-sm tw-text-slate-500 dark:tw-text-slate-400 tw-mt-1">Customize your dashboard experience</p>
            </div>

            <div className="tw-grid tw-gap-4">
              <div className="tw-flex tw-items-center tw-justify-between tw-p-4 tw-border tw-border-slate-200 dark:tw-border-slate-700 tw-rounded-lg">
                <div className="tw-flex tw-items-center tw-gap-3">
                  <Moon className="tw-w-5 tw-h-5 tw-text-slate-400" />
                  <div>
                    <p className="tw-text-sm tw-font-medium tw-text-slate-700 dark:tw-text-slate-200">Dark Mode</p>
                    <p className="tw-text-xs tw-text-slate-500 dark:tw-text-slate-400">Use dark theme across the dashboard</p>
                  </div>
                </div>
                <label className="tw-relative tw-inline-flex tw-items-center tw-cursor-pointer">
                  <input
                    type="checkbox"
                    className="tw-sr-only tw-peer"
                    checked={isDark}
                    onChange={toggleDarkMode}
                  />
                  <div className="tw-w-11 tw-h-6 tw-bg-slate-200 dark:tw-bg-slate-700 tw-peer-focus:tw-outline-none tw-peer-focus:tw-ring-4 tw-peer-focus:tw-ring-blue-100 tw-rounded-full tw-peer tw-peer-checked:tw-bg-blue-600 tw-transition-colors"></div>
                  <div className="tw-absolute tw-top-0.5 tw-left-0.5 tw-w-5 tw-h-5 tw-bg-white tw-rounded-full tw-transition-transform tw-peer-checked:tw-translate-x-5"></div>
                </label>
              </div>

              <div className="tw-grid tw-gap-2">
                <label className="tw-text-sm tw-font-medium tw-text-slate-700 dark:tw-text-slate-200">Timezone</label>
                <select className="tw-px-3 tw-py-2 tw-border tw-border-slate-300 dark:tw-border-slate-600 tw-rounded-lg tw-text-sm tw-focus:tw-outline-none tw-focus:tw-ring-2 tw-focus:tw-ring-blue-500 tw-bg-white dark:tw-bg-slate-700 tw-text-slate-900 dark:tw-text-slate-100">
                  <option>UTC</option>
                  <option>America/New_York</option>
                  <option>America/Los_Angeles</option>
                  <option>Europe/London</option>
                  <option>Asia/Bangkok</option>
                </select>
              </div>

              <div className="tw-grid tw-gap-2">
                <label className="tw-text-sm tw-font-medium tw-text-slate-700 dark:tw-text-slate-200">Date Format</label>
                <select className="tw-px-3 tw-py-2 tw-border tw-border-slate-300 dark:tw-border-slate-600 tw-rounded-lg tw-text-sm tw-focus:tw-outline-none tw-focus:tw-ring-2 tw-focus:tw-ring-blue-500 tw-bg-white dark:tw-bg-slate-700 tw-text-slate-900 dark:tw-text-slate-100">
                  <option>MM/DD/YYYY</option>
                  <option>DD/MM/YYYY</option>
                  <option>YYYY-MM-DD</option>
                </select>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="tw-max-w-4xl tw-space-y-6">
      {/* Header */}
      <div>
        <h1 className="tw-text-2xl tw-font-bold tw-text-slate-900 dark:tw-text-slate-100">Settings</h1>
        <p className="tw-text-sm tw-text-slate-500 dark:tw-text-slate-400 tw-mt-1">Manage your account settings and preferences</p>
      </div>

      {/* Tabs */}
      <div className="tw-border-b tw-border-slate-200 dark:tw-border-slate-700">
        <nav className="tw-flex tw-gap-6" aria-label="Settings tabs">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`tw-inline-flex tw-items-center tw-gap-2 tw-py-3 tw-text-sm tw-font-medium tw-border-b-2 tw-transition-colors ${
                  isActive
                    ? "tw-border-blue-600 tw-text-blue-600"
                    : "tw-border-transparent tw-text-slate-500 dark:tw-text-slate-400 hover:tw-text-slate-700 dark:hover:tw-text-slate-200 hover:tw-border-slate-300"
                }`}
              >
                <Icon className="tw-w-4 tw-h-4" />
                {tab.label}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Content */}
      <div className="tw-bg-white dark:tw-bg-slate-800 tw-border tw-border-slate-200 dark:tw-border-slate-700 tw-rounded-xl tw-p-6">
        {renderContent()}
      </div>

      {/* Save Button */}
      <div className="tw-flex tw-justify-end tw-gap-3">
        <button className="tw-px-4 tw-py-2 tw-text-sm tw-text-slate-700 dark:tw-text-slate-200 tw-bg-white dark:tw-bg-slate-800 tw-border tw-border-slate-300 dark:tw-border-slate-600 tw-rounded-lg hover:tw-bg-slate-50 dark:hover:tw-bg-slate-700 tw-transition-colors">
          Cancel
        </button>
        <button
          onClick={handleSave}
          disabled={isSaving}
          className="tw-inline-flex tw-items-center tw-gap-2 tw-px-4 tw-py-2 tw-text-sm tw-bg-blue-600 tw-text-white tw-rounded-lg hover:tw-bg-blue-700 tw-transition-colors disabled:tw-opacity-50"
        >
          <Save className="tw-w-4 tw-h-4" />
          {isSaving ? "Saving..." : "Save Changes"}
        </button>
      </div>
    </div>
  );
}
