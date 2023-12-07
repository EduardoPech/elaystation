"use client";
import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

export function LineChartHumity({ data }) {
  const convertTime = (time) => {
    const date = new Date(time);
    return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  };

  const option = {
    title: {
      text: "Humedad en tiempo real",
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
        text: "Humedad",
      },
      min: 0,
      max: 60,
    },
    // stroke: {
    //   curve: "smooth",
    // },
  };

  const series = [
    {
      name: "Humedad",
      type: "column",
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
