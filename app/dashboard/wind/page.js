"use client";

import { LineChartAnemometer } from "../../components/charts/anemometer/LineChartAnemometer";
import { Loading } from "../../components/Loading";
import { useState, useEffect } from "react";


export default function Wind() {
  const [wind, setWind] = useState(0);
  const [typeDate, setTypeDate] = useState("hour");

  useEffect(() => {
    const getData = async () => {
      const url = typeDate === 'hour' ? "/api/temperature/30" : "/api/bydate";
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          const formatDataWind = data.map((item) => {
            return {
              x: new Date(item.FechaRegistro).getTime(),
              y: item.velocidad_viento,
            };
          });
          setWind(formatDataWind);
        })
        .catch((error) => {
          throw new Error(error);
        });
    };

    getData();
  }, [typeDate]);

  return (
    <div className="m-10">
      <h1 className="text-center">Velocidad del viento</h1>
      {wind ? <LineChartAnemometer data={wind} typeDate={typeDate} /> : <Loading />}
    </div>
  );
}