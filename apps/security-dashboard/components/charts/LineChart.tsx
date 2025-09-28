'use client';
import React, { useEffect, useRef } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  LineController,
  Title,
  Tooltip,
  Legend,
  Filler,
  ChartOptions
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, LineController, Title, Tooltip, Legend, Filler);

export default function LineChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const instance = useRef<ChartJS | null>(null);

  const eventData = [2, 4, 5, 5, 6, 9, 7, 6];
  const labels = ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'SFD', 'Jul', 'Aug'];

  useEffect(() => {
    const ctx = canvasRef.current?.getContext('2d');
    if (!ctx) return;

    instance.current?.destroy();
    instance.current = new ChartJS(ctx, {
      type: 'line',
      data: {
        labels,
        datasets: [
          {
            data: eventData,
            borderColor: '#3b82f6',
            backgroundColor: 'rgba(59,130,246,0.1)',
            fill: true,
            tension: 0.4,
            pointRadius: 4,
            pointBackgroundColor: '#3b82f6'
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          y: {
            beginAtZero: true,
            max: 10,
            grid: { color: '#e5e7eb' },
            ticks: { color: '#6b7280' }
          },
          x: {
            grid: { display: false },
            ticks: { color: '#6b7280' }
          }
        }
      } as ChartOptions<'line'>
    });

    return () => instance.current?.destroy();
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Events over time</h3>
      <div className="h-64">
        <canvas ref={canvasRef} />
      </div>
    </div>
  );
}
