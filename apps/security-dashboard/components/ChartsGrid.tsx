import React from 'react';
import LineChart from './charts/LineChart';
import DonutChart from './charts/DonutChart';

export default function ChartsGrid() {
  return (
    <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-8 tw-mb-8">
      <LineChart />
      <DonutChart />
    </div>
  );
}
