'use client';
import React from 'react';
import { Menu, Search, User, ChevronDown } from 'lucide-react';

export default function Topbar({ onMenuClick }: { onMenuClick?: () => void }) {
  return (
    <div className="tw-flex tw-items-center tw-justify-between tw-mb-6 tw-px-4 sm:tw-px-6 lg:tw-px-8 tw-h-16">
      {/* Left: Title + Hamburger */}
      <div className="tw-flex tw-items-center tw-space-x-3">
        {/* hamburger เฉพาะจอเล็ก */}
        <button
          className="lg:tw-hidden tw-p-2 tw-rounded-md tw-border tw-border-gray-200"
          onClick={onMenuClick}
        >
          <Menu className="tw-w-5 tw-h-5 tw-text-gray-600" />
        </button>
        <h1 className="tw-text-xl sm:tw-text-2xl tw-font-bold tw-text-gray-900">
          Security Monitoring Dashboard
        </h1>
      </div>

      {/* Right: Search + User */}
      <div className="tw-flex tw-items-center tw-space-x-4">
        {/* Search bar - ซ่อนบนจอเล็ก */}
        <div className="tw-relative tw-hidden sm:tw-block">
          <Search className="tw-absolute tw-left-3 tw-top-1/2 -tw-translate-y-1/2 tw-w-4 tw-h-4 tw-text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="tw-pl-10 tw-pr-4 tw-py-2 tw-border tw-border-gray-300 tw-rounded-lg focus:tw-ring-2 focus:tw-ring-blue-500 focus:tw-border-transparent tw-text-sm"
          />
        </div>

        {/* Profile */}
        <div className="tw-flex tw-items-center tw-space-x-2">
          <div className="tw-w-8 tw-h-8 tw-bg-blue-500 tw-rounded-full tw-flex tw-items-center tw-justify-center">
            <User className="tw-w-4 tw-h-4 tw-text-white" />
          </div>
          {/* ชื่อซ่อนบนมือถือ */}
          <span className="tw-hidden sm:tw-inline tw-text-gray-700">John Doe</span>
          <ChevronDown className="tw-w-4 tw-h-4 tw-text-gray-400" />
        </div>
      </div>
    </div>
  );
}
