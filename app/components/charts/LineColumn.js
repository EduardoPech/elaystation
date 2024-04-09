"use client"; // if you use app dir, don't forget this line
import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { convertTime, formatHour } from "../../utils/utils";

export function LineColumn({ data, seriesData, typeDate }) {
  const option = {
    title: {
      text: "Comparación en tiempo real",
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
      stacked: false,
    },
    stroke: {
      width: [0, 4],
    },
    plotOptions: {
      bar: {
        columnWidth: "50%",
      },
    },
    dataLabels: {
      enabled: true,
      enabledOnSeries: [1],
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
    yaxis: [
      {
        title: {
          text: "Velocidad de viento (K/H)",
        },
        min: 0,
        tickAmount: 20,
      },
      {
        opposite: true,
        title: {
          text: "Temperatura (°C)",
        },
      },
    ],
  };

  return (
    <ApexChart
      type="line"
      options={option}
      series={seriesData}
      height={350}
      width={"100%"}
    />
  );
}
