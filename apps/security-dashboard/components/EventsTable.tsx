import React from 'react';
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
  return (
    <div className="tw-bg-white tw-rounded-lg tw-shadow-sm">
      <div className="tw-p-6 tw-border-b tw-border-gray-200">
        <h3 className="tw-text-lg tw-font-semibold tw-text-gray-900">Recent events</h3>
      </div>
      <div className="tw-overflow-x-auto">
        <table className="tw-w-full">
          <thead className="tw-bg-gray-50">
            <tr>
              {['Timestamp','IP Address','User','Status','Service'].map((h) => (
                <th key={h} className="tw-px-6 tw-py-3 tw-text-left tw-text-xs tw-font-medium tw-text-gray-500 tw-uppercase tw-tracking-wider">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="tw-bg-white tw-divide-y tw-divide-gray-200">
            {recentEvents.map((e, i) => (
              <tr key={i} className="hover:tw-bg-gray-50">
                <td className="tw-px-6 tw-py-4 tw-whitespace-nowrap tw-text-sm tw-text-gray-900">{e.timestamp}</td>
                <td className="tw-px-6 tw-py-4 tw-whitespace-nowrap tw-text-sm tw-text-gray-900">{e.ip}</td>
                <td className="tw-px-6 tw-py-4 tw-whitespace-nowrap tw-text-sm tw-text-gray-900">{e.user}</td>
                <td className="tw-px-6 tw-py-4 tw-whitespace-nowrap"><StatusBadge status={e.status} /></td>
                <td className="tw-px-6 tw-py-4 tw-whitespace-nowrap tw-text-sm tw-text-gray-900">{e.service}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
