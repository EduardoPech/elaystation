"use client"; // if you use app dir, don't forget this line
import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useState } from "react";

export function LineChartSoil({ data }) {
  const convertTime = (time) => {
    const date = new Date(time);
    return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  };

  const option = {
    title: {
      text: "Temperatura de suelo en tiempo real",
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
    },
    xaxis: {
      title: {
        text: "Tiempo",
      },
      categories: data.map((item) => convertTime(item.x)),
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
      name: "sensor",
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
