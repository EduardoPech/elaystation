"use client"; // if you use app dir, don't forget this line
import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useState } from "react";

export function LineColumn({ data, seriesData }) {
  const convertTime = (time) => {
    const date = new Date(time);
    return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  };

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
        show: false,
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
      categories: data.map((item) => convertTime(item.x)),
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
