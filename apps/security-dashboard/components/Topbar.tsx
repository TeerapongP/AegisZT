'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Avatar } from 'primereact/avatar';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Menu as PrimeMenu } from 'primereact/menu';
import type { MenuItem } from 'primereact/menuitem';

type TopbarProps = {
  onMenuClick?: () => void;
  title?: string;
  username?: string;
};

export default function Topbar({
  onMenuClick,
  title = 'Security Monitoring Dashboard',
  username = 'John Doe',
}: TopbarProps) {
  const [q, setQ] = useState('');
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const menuRef = useRef<PrimeMenu>(null);

  const userMenuItems: MenuItem[] = [
    { label: 'Profile', icon: 'pi pi-user' },
    { label: 'Settings', icon: 'pi pi-cog' },
    { separator: true },
    { label: 'Logout', icon: 'pi pi-sign-out' },
  ];

  // shortcut กด "/" เพื่อโฟกัสช่องค้นหา
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement | null;
      const typing =
        t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable);
      if (!typing && e.key === '/') {
        e.preventDefault();
        const el = document.getElementById('topbar-search') as HTMLInputElement | null;
        if (el) el.focus();
        else {
          setMobileSearchOpen(true);
          setTimeout(() => {
            (document.getElementById('topbar-search-mobile') as HTMLInputElement | null)?.focus();
          }, 0);
        }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <div className="tw-sticky tw-top-0 tw-z-40 tw-bg-slate-50/80 tw-backdrop-blur tw-border-b tw-border-slate-200">
      <div className="tw-h-16 tw-px-4 sm:tw-px-6 lg:tw-px-8 tw-flex tw-items-center tw-justify-between">
        {/* Left: Hamburger + Title */}
        <div className="tw-flex tw-items-center tw-gap-3">
          <Button
            icon="pi pi-bars"
            text
            rounded
            className="lg:tw-hidden tw-h-10 tw-w-10 tw-text-slate-600 hover:tw-text-slate-800"
            onClick={onMenuClick}
            aria-label="Open sidebar"
          />
          <h1 className="tw-text-xl sm:tw-text-2xl tw-font-semibold tw-tracking-tight tw-text-slate-800">
            <span className="tw-bg-clip-text tw-text-transparent tw-bg-gradient-to-r tw-from-sky-600 tw-to-cyan-500">
              {title}
            </span>
          </h1>
        </div>

        {/* Right: search + user */}
        <div className="tw-flex tw-items-center tw-gap-2 sm:tw-gap-4">
          {/* Desktop search */}
          <div className="tw-hidden md:tw-block">
            <span className="p-input-icon-left">
              <i className="pi pi-search tw-text-slate-400 tw-ml-4" />
              <InputText
                id="topbar-search"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search… ( / )"
                className={[
                  'tw-h-10 tw-rounded-full tw-pl-10 tw-pr-4 tw-text-sm tw-text-black',
                  'tw-bg-white tw-border tw-border-slate-300',
                  'focus:tw-ring-2 focus:tw-ring-sky-400 focus:tw-border-sky-400',
                  'tw-placeholder-slate-400',
                ].join(' ')}
              />

            </span>
          </div>

          {/* Mobile search toggle */}
          <Button
            icon="pi pi-search"
            text
            rounded
            className="md:tw-hidden tw-h-10 tw-w-10 tw-text-slate-600 hover:tw-text-slate-800"
            onClick={() => setMobileSearchOpen((s) => !s)}
            aria-label="Open search"
          />

          {/* Profile */}
          <div className="tw-flex tw-items-center tw-gap-2">
            <Avatar
              icon="pi pi-user"
              className="tw-bg-sky-500 tw-text-white"
              shape="circle"
            />
            <span className="tw-hidden sm:tw-inline tw-text-sm tw-font-medium tw-text-slate-700">
              {username}
            </span>
            <Button
              icon="pi pi-chevron-down"
              text
              rounded
              className="tw-h-10 tw-w-10 tw-text-slate-500 hover:tw-text-slate-700"
              onClick={(e) => menuRef.current?.toggle(e)}
              aria-label="Open user menu"
              aria-haspopup
              aria-controls="user_menu"
            />
            <PrimeMenu
              id="user_menu"
              popup
              ref={menuRef}
              model={userMenuItems}
              className="tw-min-w-[12rem] tw-border tw-border-slate-200 tw-rounded-lg tw-shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Mobile search bar */}
      {mobileSearchOpen && (
        <div className="tw-px-4 sm:tw-px-6 lg:tw-px-8 tw-pb-3 md:tw-hidden">
          <span className="p-input-icon-left tw-w-full">
            <i className="pi pi-search tw-text-slate-400" />
            <InputText
              id="topbar-search-mobile"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search…"
              className={[
                'tw-w-full tw-h-11 tw-rounded-xl tw-pl-10 tw-pr-4 tw-text-sm',
                'tw-bg-white tw-border tw-border-slate-300',
                'focus:tw-ring-2 focus:tw-ring-sky-400 focus:tw-border-sky-400',
                'tw-placeholder-slate-400',
              ].join(' ')}
            />
          </span>
        </div>
      )}
    </div>
  );
}
