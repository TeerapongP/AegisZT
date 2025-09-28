'use client';
import React, { useEffect, useRef } from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  DoughnutController,
  Tooltip,
  Legend,
  ChartOptions
} from 'chart.js';
import ChartLegend from './ChartLegend';

ChartJS.register(ArcElement, DoughnutController, Tooltip, Legend);

export default function DonutChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const instance = useRef<ChartJS | null>(null);

  useEffect(() => {
    const ctx = canvasRef.current?.getContext('2d');
    if (!ctx) return;

    instance.current?.destroy();

    instance.current = new ChartJS(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Low', 'Medium', 'High', 'Critical'],
        datasets: [
          {
            data: [40, 30, 20, 10],
            backgroundColor: ['#60a5fa', '#3b82f6', '#8b5cf6', '#ef4444'],
            borderWidth: 0
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        cutout: '60%'
      } as ChartOptions<'doughnut'>,
      plugins: [
        {
          id: 'centerText',
          beforeDraw: (chart) => {
            const { ctx, chartArea: { top, width, height } } = chart;
            ctx.save();
            const total = (chart.data.datasets[0].data as number[]).reduce((a, b) => a + b, 0);
            ctx.fillStyle = '#1f2937';
            ctx.font = 'bold 24px sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(String(total), width / 2, top + height / 2 - 10);
            ctx.fillStyle = '#6b7280';
            ctx.font = '14px sans-serif';
            ctx.fillText('Total Alerts', width / 2, top + height / 2 + 15);
            ctx.restore();
          }
        }
      ]
    });

    return () => instance.current?.destroy();
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Alerts by severity</h3>
      <div className="h-64 flex items-center">
        <div className="w-48 h-48 mx-auto">
          <canvas ref={canvasRef} />
        </div>
        <ChartLegend />
      </div>
    </div>
  );
}
