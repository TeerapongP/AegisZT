import { EventStatus } from '@/types/eventStatus';
import React from 'react';

export default function StatusBadge({ status }: { status: EventStatus }) {
  const map = {
    Success: 'bg-green-100 text-green-800',
    Failure: 'bg-red-100 text-red-800'
  } as const;

  return (
    <span className={`px-2 py-1 text-xs font-medium rounded-full ${map[status]}`}>
      {status}
    </span>
  );
}
