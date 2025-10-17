import { EventStatus } from '@/types/eventStatus';
import React from 'react';

export default function StatusBadge({ status }: { status: EventStatus }) {
  const map = {
    Success: 'tw-bg-green-100 tw-text-green-800',
    Failure: 'tw-bg-red-100 tw-text-red-800',
    Warning:'tw-bg-yellow-100 tw-text-yellow-800'
  } as const;

  return (
    <span className={`tw-px-2 tw-py-1 tw-text-xs tw-font-medium tw-rounded-full ${map[status]}`}>
      {status}
    </span>
  );
}
