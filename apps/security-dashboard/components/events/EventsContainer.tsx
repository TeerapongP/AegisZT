'use client';
import React, { useMemo, useState } from 'react';
import type { EventData } from '@/types/events';
import EventsChart from './EventsChart';
import EventsTable from './EventsTable';
import { FilterValues } from '@/types/filterValues';
import FilterBar from '../FilterBar';

function EventsHeader() {
  return (
    <div className="tw-mb-4 sm:tw-mb-6">
      <h1 className="tw-text-2xl tw-font-bold tw-text-gray-900">Events</h1>
      <p className="tw-text-sm tw-text-gray-500">
        Monitor and analyze security events in real-time
      </p>
    </div>
  );
}

export default function EventsContainer({ rows }: { rows: EventData[] }) {
  const [filters, setFilters] = useState<FilterValues>({
    status: 'all',
    severity: 'all',
    service: 'all',
    date: null,
  });

  const filtered = useMemo(() => {
    const norm = (s: string) => s.trim().toLowerCase();

    return rows.filter((r) => {
      const statusOk =
        filters.status === 'all' || norm(r.status) === norm(filters.status);

      const severityOk =
        filters.severity === 'all' ||
        norm(r.severity) === norm(filters.severity);

      const serviceOk =
        filters.service === 'all' ||
        (filters.service === 'web' && norm(r.service).includes('web')) ||
        norm(r.service) === norm(filters.service);

      const dateOk =
        !filters.date || r.timestamp.slice(0, 10) === filters.date.toISOString().slice(0, 10);

      return statusOk && severityOk && serviceOk && dateOk;
    });
  }, [rows, filters]);

  const handleExport = () => {
    const header = [
      'id',
      'timestamp',
      'ip',
      'user',
      'status',
      'severity',
      'service',
      'description',
      'location',
    ];
    const lines = filtered.map((e) =>
      [
        e.id,
        e.timestamp,
        e.ip,
        e.user,
        e.status,
        e.severity,
        e.service,
        `"${e.description.replace(/"/g, '""')}"`,
        e.location ?? '',
      ].join(',')
    );
    const csv = [header.join(','), ...lines].join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'events.csv';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <EventsHeader />
      <EventsChart />
      <FilterBar onChange={setFilters} onExport={handleExport} />
      <EventsTable rows={filtered} />
    </>
  );
}
