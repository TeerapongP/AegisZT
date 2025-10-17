import { EventSeverity } from '@/types/eventSeverity';
import React from 'react';
import { Tag } from 'primereact/tag';

export default function SeverityBadge({ severity }: { severity: EventSeverity }) {
  const getSeverity = (severity: EventSeverity) => {
    switch (severity) {
      case 'Low':
        return 'info';
      case 'Medium':
        return 'warning';
      case 'High':
        return 'danger';
      case 'Critical':
        return 'danger';
      default:
        return 'info';
    }
  };

  const getIcon = (severity: EventSeverity) => {
    switch (severity) {
      case 'Low':
        return 'pi pi-info-circle';
      case 'Medium':
        return 'pi pi-exclamation-triangle';
      case 'High':
        return 'pi pi-exclamation-triangle';
      case 'Critical':
        return 'pi pi-times-circle';
      default:
        return 'pi pi-info-circle';
    }
  };

  return (
    <Tag 
      value={severity} 
      severity={getSeverity(severity)}
      icon={getIcon(severity)}
      rounded
    />
  );
}
