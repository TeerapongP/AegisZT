'use client';
import React, { useState } from 'react';
import { Eye, ChevronLeft, ChevronRight } from 'lucide-react';
import type { EventData } from '@/types/events';
import StatusBadge from '../StatusBadge';
import SeverityBadge from '../badges/SeverityBadge';

export default function EventsTable({ rows }: { rows: EventData[] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(rows.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentEvents = rows.slice(startIndex, endIndex);

  return (
    <div className="tw-bg-white tw-rounded-lg tw-shadow-sm">
      <div className="tw-p-6 tw-border-b tw-border-gray-200">
        <div className="tw-flex tw-justify-between tw-items-center">
          <h3 className="tw-text-lg tw-font-semibold tw-text-gray-900">Security Events</h3>
          <div className="tw-text-sm tw-text-gray-500">
            Showing {startIndex + 1}-{Math.min(endIndex, rows.length)} of {rows.length} events
          </div>
        </div>
      </div>

      <div className="tw-overflow-x-auto">
        <table className="tw-w-full">
          <thead className="tw-bg-gray-50">
            <tr>
              {['Event ID','Timestamp','IP Address','User','Status','Severity','Service','Description','Actions'].map((h) => (
                <th key={h} className="tw-px-6 tw-py-3 tw-text-left tw-text-xs tw-font-medium tw-text-gray-500 tw-uppercase tw-tracking-wider">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="tw-bg-white tw-divide-y tw-divide-gray-200">
            {currentEvents.map((event) => (
              <tr key={event.id} className="hover:tw-bg-gray-50">
                <td className="tw-px-6 tw-py-4 tw-whitespace-nowrap tw-text-sm tw-font-mono tw-text-gray-900">{event.id}</td>
                <td className="tw-px-6 tw-py-4 tw-whitespace-nowrap tw-text-sm tw-text-gray-900">{event.timestamp}</td>
                <td className="tw-px-6 tw-py-4 tw-whitespace-nowrap tw-text-sm tw-font-mono tw-text-gray-900">{event.ip}</td>
                <td className="tw-px-6 tw-py-4 tw-whitespace-nowrap tw-text-sm tw-text-gray-900">{event.user}</td>
                <td className="tw-px-6 tw-py-4 tw-whitespace-nowrap"><StatusBadge status={event.status} /></td>
                <td className="tw-px-6 tw-py-4 tw-whitespace-nowrap"><SeverityBadge severity={event.severity} /></td>
                <td className="tw-px-6 tw-py-4 tw-whitespace-nowrap tw-text-sm tw-text-gray-900">{event.service}</td>
                <td className="tw-px-6 tw-py-4 tw-text-sm tw-text-gray-900 tw-max-w-xs tw-truncate" title={event.description}>
                  {event.description}
                </td>
                <td className="tw-px-6 tw-py-4 tw-whitespace-nowrap tw-text-sm tw-text-gray-500">
                  <button
                    onClick={() => setSelectedEvent(selectedEvent === event.id ? null : event.id)}
                    className="tw-text-blue-600 hover:tw-text-blue-900"
                    title="View details"
                  >
                    <Eye className="tw-w-4 tw-h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="tw-px-6 tw-py-4 tw-border-t tw-border-gray-200 tw-flex tw-items-center tw-justify-between">
        <button
          onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
          disabled={currentPage === 1}
          className="tw-flex tw-items-center tw-space-x-2 tw-px-3 tw-py-2 tw-border tw-border-gray-300 tw-rounded-md tw-text-sm disabled:tw-opacity-50 disabled:tw-cursor-not-allowed hover:tw-bg-gray-50"
        >
          <ChevronLeft className="tw-w-4 tw-h-4" />
          <span>Previous</span>
        </button>

        <div className="tw-flex tw-items-center tw-space-x-2">
          {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
            const page = i + 1;
            return (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`tw-px-3 tw-py-2 tw-rounded-md tw-text-sm ${
                  page === currentPage ? 'tw-bg-blue-600 tw-text-white' : 'tw-text-gray-700 hover:tw-bg-gray-100'
                }`}
              >
                {page}
              </button>
            );
          })}
          {totalPages > 5 && <span className="tw-text-gray-500">...</span>}
        </div>

        <button
          onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
          disabled={currentPage === totalPages}
          className="tw-flex tw-items-center tw-space-x-2 tw-px-3 tw-py-2 tw-border tw-border-gray-300 tw-rounded-md tw-text-sm disabled:tw-opacity-50 disabled:tw-cursor-not-allowed hover:tw-bg-gray-50"
        >
          <span>Next</span>
          <ChevronRight className="tw-w-4 tw-h-4" />
        </button>
      </div>
    </div>
  );
}
