import type { ChartData, ChartOptions, ChartType } from 'chart.js';
// import { Chart } from 'chart.js';
import ChartJS from 'chart.js/auto';
import { useEffect, useRef } from 'react';

export interface ChartProps {
  label?: string;
  onClick?: string;
  className?: string;
  data?: ChartData;
  type?: ChartType
  values?: number[];
  labels?: string[];
  options?: ChartOptions<ChartType>;
  maintainAspectRatio?: boolean;
  
}

export const Chart = ({
  data,
  maintainAspectRatio = true,
  className = '',
  type = 'line',
  options
}: ChartProps) => {
  const chartRef = useRef<any>(null);

  useEffect(() => {
    const generateChart = () => {
      const ctx = chartRef.current.getContext("2d");
      if (ctx && data) {
        return new ChartJS(ctx, {
          type,
          data,
          options: { 
            responsive: true,
            maintainAspectRatio: maintainAspectRatio,
            ...options
          }
        });
      }
    };

    let customChart: any;

    if (chartRef.current) {
      customChart = generateChart();
    }

    return () => {
      if (customChart) {
        customChart.destroy()
      }
    }
  }, [data]);

  return (
    <div className={`custom-chart overflow-hidden relative ${className}`.trimEnd()}>
      <canvas ref={chartRef} />
    </div>
  )
}

export const transformToDataset = (data: number[], label: string) => {
  return {
    label,
    data,
    fill: false,
    borderColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
    tension: 0.1
  }
}

export const chartDefaultColors = {
  backgroundColor: [
    'rgba(255, 99, 132, 0.2)',
    'rgba(255, 159, 64, 0.2)',
    'rgba(255, 205, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(201, 203, 207, 0.2)'
  ],
  borderColor: [
    'rgb(255, 99, 132)',
    'rgb(255, 159, 64)',
    'rgb(255, 205, 86)',
    'rgb(75, 192, 192)',
    'rgb(54, 162, 235)',
    'rgb(153, 102, 255)',
    'rgb(201, 203, 207)'
  ]
}