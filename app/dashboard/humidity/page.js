"use client";

import { LineChartHumity } from "../../components/charts/humity/LineChartHumity";
import { Loading } from "../../components/Loading";
import { useState, useEffect } from "react";


export default function Humidity() {
  const [humidity, setHumidity] = useState(0);
  const [typeDate, setTypeDate] = useState("hour");

  useEffect(() => {
    const getData = async () => {
      const url = typeDate === 'hour' ? "/api/temperature/30" : "/api/bydate";
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          const formatDataHumity = data.map((item) => {
            return {
              x: typeDate === 'hour' ? new Date(item.FechaRegistro).getTime() : formatDate(item.FechaRegistro),
              y: item.Humedad,
            };
          });
          setHumidity(formatDataHumity);
        })
        .catch((error) => {
          throw new Error(error);
        });
    };

    getData();
  }, [typeDate]);

  return (
    <div className="m-10">
      <h1 className="text-center">Humedad</h1>
      {humidity ? <LineChartHumity data={humidity} typeDate={typeDate} /> : <Loading />}
    </div>
  );
}