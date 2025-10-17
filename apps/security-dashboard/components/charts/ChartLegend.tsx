import React from 'react';

const items = [
  { color: 'tw-bg-blue-400', label: 'Low' },
  { color: 'tw-bg-blue-600', label: 'Medium' },
  { color: 'tw-bg-purple-500', label: 'High' },
  { color: 'tw-bg-red-500', label: 'Critical' }
];

export default function ChartLegend() {
  return (
    <div className="tw-ml-8 tw-space-y-3">
      {items.map((it, i) => (
        <div key={i} className="tw-flex tw-items-center tw-space-x-3">
          <div className={`tw-w-3 tw-h-3 tw-rounded-full ${it.color}`} />
          <span className="tw-text-sm tw-text-gray-600">{it.label}</span>
        </div>
      ))}
    </div>
  );
}
