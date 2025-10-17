import { StatCardProps } from '@/types/statCard';
import React from 'react';

export default function StatsCard({ title, value }: StatCardProps) {
  return (
    <div className="tw-bg-white tw-p-6 tw-rounded-lg tw-shadow-sm">
      <h3 className="tw-text-sm tw-font-medium tw-text-gray-500 tw-mb-2">{title}</h3>
      <p className="tw-text-3xl tw-font-bold tw-text-gray-900">{value}</p>
    </div>
  );
}
