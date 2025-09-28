import React from 'react';
import StatsCard from './StatsCard';

const stats = [
  { title: 'Total Events', value: '12,455' },
  { title: 'Open Alerts', value: '284' },
  { title: 'Critical Incidents', value: '12' },
  { title: 'Active Users', value: '478' }
];

export default function StatsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
      {stats.map((s, i) => (
        <StatsCard key={i} title={s.title} value={s.value} />
      ))}
    </div>
  );
}
