import { EventStatus } from '@/types/eventStatus';
import React from 'react';
import { Tag } from 'primereact/tag';

export default function StatusBadge({ status }: { status: EventStatus }) {
  const getSeverity = (status: EventStatus) => {
    switch (status) {
      case 'Success':
        return 'success';
      case 'Failure':
        return 'danger';
      case 'Warning':
        return 'warning';
      default:
        return 'info';
    }
  };

  return (
    <Tag 
      value={status} 
      severity={getSeverity(status)}
      rounded
    />
  );
}
