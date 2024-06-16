"use client";

import { LineChartSoil } from "../../components/charts/soil/LineChartSoil";
import { Loading } from "../../components/Loading";
import { useState, useEffect } from "react";


export default function Floor() {
  const [floor, setFloor] = useState(0);
  const [typeDate, setTypeDate] = useState("hour");

  useEffect(() => {
    const getData = async () => {
      const url = typeDate === 'hour' ? "/api/temperature/30" : "/api/bydate";
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          const formatDataSoilTemperature = data.map((item) => {
            return {
              x: new Date(item.FechaRegistro).getTime(),
              y: item.TemperaturaSuelo,
            };
          });
          setFloor(formatDataSoilTemperature);
        })
        .catch((error) => {
          throw new Error(error);
        });
    };

    getData();
  }, [typeDate]);

  return (
    <div className="m-10">
      <h1 className="text-center">Temperatura del suelo</h1>
      {floor ? <LineChartSoil data={floor} typeDate={typeDate} /> : <Loading />}
    </div>
  );
}