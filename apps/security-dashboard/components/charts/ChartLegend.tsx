import React from 'react';

const items = [
  { color: 'bg-blue-400', label: 'Low' },
  { color: 'bg-blue-600', label: 'Medium' },
  { color: 'bg-purple-500', label: 'High' },
  { color: 'bg-red-500', label: 'Critical' }
];

export default function ChartLegend() {
  return (
    <div className="ml-8 space-y-3">
      {items.map((it, i) => (
        <div key={i} className="flex items-center space-x-3">
          <div className={`w-3 h-3 rounded-full ${it.color}`} />
          <span className="text-sm text-gray-600">{it.label}</span>
        </div>
      ))}
    </div>
  );
}
