'use client';
import React, { useEffect, useRef } from 'react';
import { RefreshCw } from 'lucide-react';
import { Chart } from 'chart.js/auto'; // ✅ auto register controllers/plugins ให้ครบ

export default function EventsChart() {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null); // ✅ ใช้ Chart จาก auto

  const eventData = {
    success: [15,22,18,25,30,28,35,32,38,42,45,50,48,55,60,58,65,70,68,72,75,78,80,85],
    failure: [5,8,6,10,12,8,15,10,18,20,15,22,18,25,20,28,25,30,28,35,32,38,40,45],
    warning: [3,5,4,7,8,6,10,8,12,15,10,18,15,20,18,22,20,25,22,28,25,30,32,35],
  };
  const hours = Array.from({ length: 24 }, (_, i) => `${String(i).padStart(2, '0')}:00`);

  useEffect(() => {
    const ctx = chartRef.current?.getContext('2d');
    if (!ctx) return;

    chartInstance.current?.destroy();
    chartInstance.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: hours,
        datasets: [
          {
            label: 'Success',
            data: eventData.success,
            borderColor: '#10b981',
            backgroundColor: 'rgba(16,185,129,0.1)',
            fill: true, tension: 0.4, pointRadius: 2, pointBackgroundColor: '#10b981',
          },
          {
            label: 'Failure',
            data: eventData.failure,
            borderColor: '#ef4444',
            backgroundColor: 'rgba(239,68,68,0.1)',
            fill: true, tension: 0.4, pointRadius: 2, pointBackgroundColor: '#ef4444',
          },
          {
            label: 'Warning',
            data: eventData.warning,
            borderColor: '#f59e0b',
            backgroundColor: 'rgba(245,158,11,0.1)',
            fill: true, tension: 0.4, pointRadius: 2, pointBackgroundColor: '#f59e0b',
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: true, position: 'top', labels: { usePointStyle: true, padding: 20 } } },
        scales: {
          y: { beginAtZero: true, grid: { color: '#e5e7eb' }, ticks: { color: '#6b7280' } },
          x: { grid: { display: false }, ticks: { color: '#6b7280', maxTicksLimit: 8 } },
        },
      },
    });

    return () => chartInstance.current?.destroy();
  }, []);

  return (
    <div className="tw-bg-white tw-p-6 tw-rounded-lg tw-shadow-sm tw-mb-8">
      <div className="tw-flex tw-items-center tw-justify-between tw-mb-4">
        <h3 className="tw-text-lg tw-font-semibold tw-text-gray-900">Events Timeline (Last 24 Hours)</h3>
        <button className="tw-px-3 tw-py-1 tw-text-sm tw-border tw-border-gray-300 tw-rounded-md hover:tw-bg-gray-50">
          <RefreshCw className="tw-w-4 tw-h-4 tw-inline tw-mr-1" />
          Refresh
        </button>
      </div>
      <div className="tw-h-80">
        <canvas ref={chartRef} />
      </div>
    </div>
  );
}
