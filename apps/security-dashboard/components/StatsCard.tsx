import { StatCardProps } from '@/types/statCard';
import React from 'react';
import { Card } from 'primereact/card';

export default function StatsCard({ title, value }: StatCardProps) {
  return (
    <Card className="tw-shadow-sm">
      <div className="tw-p-2">
        <h3 className="tw-text-sm tw-font-medium tw-text-gray-500 tw-mb-2">{title}</h3>
        <p className="tw-text-3xl tw-font-bold tw-text-gray-900">{value}</p>
      </div>
    </Card>
  );
}
