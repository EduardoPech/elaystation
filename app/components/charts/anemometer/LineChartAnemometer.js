"use client"; // if you use app dir, don't forget this line
import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { convertTime, formatHour } from "../../../utils/utils";

export function LineChartAnemometer({ data, typeDate }) {
  const option = {
    title: {
      text: "Velocidad de viento en tiempo real",
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
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },
    fill: {
      opacity: [0.85, 0.25, 1],
      gradient: {
        inverseColors: false,
        shade: "light",
        type: "vertical",
        opacityFrom: 0.85,
        opacityTo: 0.55,
        stops: [0, 100, 100, 100],
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
        text: "Velocidad de viento (K/H)",
      },
      min: 0,
      max: 20,
      tickAmount: 20,
    },
  };

  const series = [
    {
      name: "Velocidad de viento",
      type: "area",
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
