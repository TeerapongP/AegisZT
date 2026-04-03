import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Card } from 'primereact/card';
import StatusBadge from './StatusBadge';
import type { EventData } from '@/types';

const recentEvents: EventData[] = [
  { timestamp: '2024-04-08 12:24:96', ip: '192.158.143.43', user: 'Heloseenn', status: 'Success', service: 'Web Application' },
  { timestamp: '2024-04-08 10:36:57', ip: '192.158.17:152', user: 'Jon Doe', status: 'Failure', service: 'SSH' },
  { timestamp: '2024-04-08 12:30:46', ip: '192.158.13:158', user: 'Johnsun', status: 'Success', service: 'Database' },
  { timestamp: '2024-04-08 19:55:33', ip: '192.158.17:147', user: 'Falcongn', status: 'Failure', service: 'Web Application' },
  { timestamp: '2024-04-08 10:36:00', ip: '192.158.17:120', user: 'Webcford', status: 'Success', service: 'SSH' },
  { timestamp: '2024-04-08 08:21:45', ip: '092.158.08:21', user: '0225436', status: 'Success', service: 'Database' }
];

export default function EventsTable() {
  const statusBodyTemplate = (rowData: EventData) => {
    return <StatusBadge status={rowData.status} />;
  };

  const header = (
    <div className="tw-p-4">
      <h3 className="tw-text-lg tw-font-semibold tw-text-gray-900">Recent events</h3>
    </div>
  );

  return (
    <Card className="tw-shadow-sm">
      <DataTable 
        value={recentEvents} 
        header={header}
        stripedRows 
        showGridlines 
        responsiveLayout="scroll"
        className="tw-w-full"
      >
        <Column field="timestamp" header="Timestamp" sortable />
        <Column field="ip" header="IP Address" sortable />
        <Column field="user" header="User" sortable />
        <Column field="status" header="Status" body={statusBodyTemplate} />
        <Column field="service" header="Service" sortable />
      </DataTable>
    </Card>
  );
}
