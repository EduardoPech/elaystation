"use client"; // if you use app dir, don't forget this line
import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { convertTime, formatHour } from "../../utils/utils";

export function Multiple({ data, seriesData, typeDate }) {
  const option = {
    title: {
      text: "Comparación tiempo real",
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
    tooltip: {
      fixed: {
        enabled: true,
        position: "topLeft", // topRight, topLeft, bottomRight, bottomLeft
        offsetY: 30,
        offsetX: 60,
      },
    },
    legend: {
      horizontalAlign: "left",
      offsetX: 40,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: [1, 1, 4],
    },
    plotOptions: {
      bar: {
        columnWidth: "50%",
      },
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
          style: {
            color: "#008FFB",
          },
        },
        tooltip: {
          enabled: true,
        },
        min: 0,
        tickAmount: 20,
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: "#008FFB",
        },
        labels: {
          style: {
            colors: "#008FFB",
          },
        },
      },
      {
        seriesName: "Humedad",
        opposite: true,
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: "#00E396",
        },
        labels: {
          style: {
            colors: "#00E396",
          },
        },
        title: {
          text: "Tiempo",
          style: {
            color: "#00E396",
          },
        },
      },
      {
        seriesName: "Temperatura",
        opposite: true,
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: "#FEB019",
        },
        labels: {
          style: {
            colors: "#FEB019",
          },
        },
        title: {
          text: "Temperatura",
          style: {
            color: "#FEB019",
          },
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
