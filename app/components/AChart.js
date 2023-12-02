"use client"; // if you use app dir, don't forget this line
import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useState } from "react";

export function AChart() {
  const [data, setData] = useState([]);

  const generateData = () => {
    return {
      x: new Date().getTime(),
      y: Math.floor(Math.random() * (100 - 1 + 1)) + 1,
    };
  };

  const convertTime = (time) => {
    const date = new Date(time);
    return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  };

  useState(() => {
    const interval = setInterval(() => {
      setData((prev) => [...prev.slice(-10), generateData()]);
    }, 3000);

    return () => clearInterval(interval);
  });

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
      max: 100,
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
    <>
      <ApexChart
        type="line"
        options={option}
        series={series}
        height={350}
        width={600}
      />
    </>
  );
}
