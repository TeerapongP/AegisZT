import React from 'react';
import LineChart from './charts/LineChart';
import DonutChart from './charts/DonutChart';

export default function ChartsGrid() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
      <LineChart />
      <DonutChart />
    </div>
  );
}
