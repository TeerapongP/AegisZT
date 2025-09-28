'use client';
import React from 'react';
import { Menu, Search, User, ChevronDown } from 'lucide-react';

export default function Topbar({ onMenuClick }: { onMenuClick?: () => void }) {
  return (
    <div className="flex items-center justify-between mb-6 px-4 sm:px-6 lg:px-8 h-16">
      {/* Left: Title + Hamburger */}
      <div className="flex items-center space-x-3">
        {/* hamburger เฉพาะจอเล็ก */}
        <button
          className="lg:hidden p-2 rounded-md border border-gray-200"
          onClick={onMenuClick}
        >
          <Menu className="w-5 h-5 text-gray-600" />
        </button>
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
          Security Monitoring Dashboard
        </h1>
      </div>

      {/* Right: Search + User */}
      <div className="flex items-center space-x-4">
        {/* Search bar - ซ่อนบนจอเล็ก */}
        <div className="relative hidden sm:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
          />
        </div>

        {/* Profile */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
            <User className="w-4 h-4 text-white" />
          </div>
          {/* ชื่อซ่อนบนมือถือ */}
          <span className="hidden sm:inline text-gray-700">John Doe</span>
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </div>
      </div>
    </div>
  );
}
