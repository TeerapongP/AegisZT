import { EventSeverity } from '@/types/eventSeverity';
import React from 'react';

export default function SeverityBadge({ severity }: { severity: EventSeverity }) {
  const map: Record<EventSeverity, string> = {
    Low: 'tw-bg-blue-100 tw-text-blue-800',
    Medium: 'tw-bg-indigo-100 tw-text-indigo-800',
    High: 'tw-bg-purple-100 tw-text-purple-800',
    Critical: 'tw-bg-red-100 tw-text-red-800',
  };
  return (
    <span className={`tw-px-2 tw-py-1 tw-text-xs tw-font-medium tw-rounded-full ${map[severity]}`}>
      {severity}
    </span>
  );
}
