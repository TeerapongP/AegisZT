'use client';
import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import type { EventData } from '@/types/events';
import StatusBadge from '../StatusBadge';
import SeverityBadge from '../badges/SeverityBadge';

export default function EventsTable({ rows }: { rows: EventData[] }) {
  const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);

  const statusBodyTemplate = (rowData: EventData) => {
    return <StatusBadge status={rowData.status} />;
  };

  const severityBodyTemplate = (rowData: EventData) => {
    return <SeverityBadge severity={rowData.severity} />;
  };

  const actionBodyTemplate = (rowData: EventData) => {
    return (
      <Button
        icon="pi pi-eye"
        onClick={() => setSelectedEvent(selectedEvent?.id === rowData.id ? null : rowData)}
        text
        size="small"
        tooltip="View details"
      />
    );
  };

  const descriptionBodyTemplate = (rowData: EventData) => {
    return (
      <span
        className="tw-max-w-xs tw-truncate tw-block"
        title={rowData.description}
      >
        {rowData.description}
      </span>
    );
  };

  const header = (
    <div className="tw-flex tw-justify-between tw-items-center tw-p-4">
      <h3 className="tw-text-lg tw-font-semibold tw-text-gray-900">Security Events</h3>
      <span className="tw-text-sm tw-text-gray-500">
        Total: {rows.length} events
      </span>
    </div>
  );

  return (
    <Card className="tw-shadow-sm">
      <DataTable
        value={rows}
        header={header}
        stripedRows
        showGridlines
        responsiveLayout="scroll"
        paginator
        rows={10}
        rowsPerPageOptions={[5, 10, 25, 50]}
        className="tw-w-full"
        selectionMode="single"
        selection={selectedEvent}
        onSelectionChange={(e) => setSelectedEvent(e.value as EventData | null)}
        dataKey="id"
      >
        <Column field="id" header="Event ID" sortable className="tw-font-mono" />
        <Column field="timestamp" header="Timestamp" sortable />
        <Column field="ip" header="IP Address" sortable className="tw-font-mono" />
        <Column field="user" header="User" sortable />
        <Column field="status" header="Status" body={statusBodyTemplate} />
        <Column field="severity" header="Severity" body={severityBodyTemplate} />
        <Column field="service" header="Service" sortable />
        <Column field="description" header="Description" body={descriptionBodyTemplate} />
        <Column header="Actions" body={actionBodyTemplate} />
      </DataTable>
    </Card>
  );
}
