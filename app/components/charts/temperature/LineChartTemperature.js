"use client";
import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { convertTime, formatHour } from "../../../utils/utils";

export function LineChartTemperature({ data, typeDate }) {
  const option = {
    title: {
      text: "Temperatura en tiempo real",
      align: "center",
      margin: 25,
    },
    chart: {
      id: "line-realtime",
      animations: {
        enabled: true,
        easing: "linear",
        dynamicAnimation: {
          speed: 1000,
        },
      },
      toolbar: {
        show: true,
      },
    },
    xaxis: {
      title: {
        text: "Tiempo",
      },
      categories: typeDate === 'hour' ? data.map((item) => convertTime(item.x)) : data.map((item) => item.x),
      labels: {
        formatter: (value) => {
          if (typeDate === 'hour') {
            return formatHour(value);
          }
          const date = new Date(value);
          const day = date.getDate();
          const month = date.toLocaleString('default', { month: 'short' });;
          return `${day} ${month}`;
        }
      }
    },
    yaxis: {
      title: {
        text: "Temperatura",
      },
      min: 0,
      max: 40,
    },
    stroke: {
      curve: "smooth",
    },
  };

  const series = [
    {
      name: "Temperatura",
      data: data.map((item) => item.y),
    },
  ];

  return (
    <ApexChart
      type="line"
      options={option}
      series={series}
      height={350}
      width={"100%"}
    />
  );
}
