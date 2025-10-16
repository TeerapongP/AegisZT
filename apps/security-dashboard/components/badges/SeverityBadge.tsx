import { EventSeverity } from '@/types/eventSeverity';
import React from 'react';

export default function SeverityBadge({ severity }: { severity: EventSeverity }) {
  const map: Record<EventSeverity, string> = {
    Low: 'bg-blue-100 text-blue-800',
    Medium: 'bg-indigo-100 text-indigo-800',
    High: 'bg-purple-100 text-purple-800',
    Critical: 'bg-red-100 text-red-800',
  };
  return (
    <span className={`px-2 py-1 text-xs font-medium rounded-full ${map[severity]}`}>
      {severity}
    </span>
  );
}
