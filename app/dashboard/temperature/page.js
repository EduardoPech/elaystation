"use client";

import { LineChartTemperature } from "../../components/charts/temperature/LineChartTemperature";
import { Loading } from "../../components/Loading";
import { useState, useEffect } from "react";


export default function Temperature() {
  const [temperature, setTemperature] = useState(0);
  const [typeDate, setTypeDate] = useState("hour");

  useEffect(() => {
    const getData = async () => {
      const url = typeDate === 'hour' ? "/api/temperature/30" : "/api/bydate";
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          const formatDataTemperature = data.map((item) => {
            return {
              x: new Date(item.FechaRegistro).getTime(),
              y: item.Temperatura,
            };
          });
          setTemperature(formatDataTemperature);
        })
        .catch((error) => {
          throw new Error(error);
        });
    };

    getData();
  }, [typeDate]);

  return (
    <div className="m-10">
      <h1 className="text-center">Temperatura</h1>
      {temperature ? <LineChartTemperature data={temperature} typeDate={typeDate} /> : <Loading />}
    </div>
  );
}