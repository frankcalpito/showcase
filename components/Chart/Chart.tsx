import type { ChartData, ChartOptions, ChartType } from "chart.js"
// import { Chart } from 'chart.js';
import ChartJS from "chart.js/auto"
import { useEffect, useRef } from "react"

export interface ChartProps {
  label?: string;
  onClick?: Function;
  className?: string;
  data?: ChartData;
  type?: ChartType
  values?: number[];
  labels?: string[];
  options?: ChartOptions<ChartType>;
  maintainAspectRatio?: boolean;
  scaleTicksColor?: string;
}

export const Chart = ({
  data,
  maintainAspectRatio = true,
  className = "",
  type = "line",
  scaleTicksColor = "#999",
  options
}: ChartProps) => {
  const chartRef = useRef<any>(null)

  useEffect(() => {
    const generateChart = () => {
      const ctx = chartRef.current.getContext("2d")
      if (ctx && data) {
        return new ChartJS(ctx, {
          type,
          data,
          options: { 
            responsive: true,
            maintainAspectRatio: maintainAspectRatio,
            scales: {
              x: {
                ticks: {
                  color: scaleTicksColor, // Change x axis label color here
                },
              },
              y: {
                ticks: {
                  color: scaleTicksColor,
                },
              },
            },
            plugins: {
              legend: {
                labels: {
                  color: scaleTicksColor, // Change legend label color here
                },
              },
            },
            ...options
          }
        })
      }
    }

    let customChart: any

    if (chartRef.current) {
      customChart = generateChart()
    }

    return () => {
      if (customChart) {
        customChart.destroy()
      }
    }
  }, [data])

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
    backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
    borderColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
    tension: 0.1
  }
}

export const chartDefaultColors = {
  backgroundColor: [
    "rgba(255, 206, 86, 0.5)",
    "rgba(255, 99, 132, 0.5)",
    "rgba(255, 205, 86, 0.5)",
    "rgba(75, 192, 192, 0.5)",
    "rgba(54, 162, 235, 0.5)",
    "rgba(153, 102, 255, 0.5)",
    "rgba(201, 203, 207, 0.5)",
  ],
  borderColor: [
    "rgb(255, 206, 86)",
    "rgb(255, 99, 132)",
    "rgb(255, 205, 86)",
    "rgb(120, 192, 192)",
    "rgb(100, 162, 235)",
    "rgb(153, 102, 255)",
    "rgb(201, 203, 207)",
  ],
}