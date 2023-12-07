"use client";

import { LineChartHumity } from "../components/charts/humity/LineChartHumity";
import { LineChartTemperature } from "../components/charts/temperature/LineChartTemperature";
import { LineChartAnemometer } from "../components/charts/anemometer/LineChartAnemometer";
import { LineChartSoil } from "../components/charts/soil/LineChartSoil";
import { Switch } from "../components/Switch";
import { set, updateRealTime } from "../lib/features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Loading } from "../components/Loading";
import { Cards } from "../components/Cards";

export default function Dashboard() {
  const dispatch = useDispatch();
  const realTimeState = useSelector((state) => state.user.realTime);
  const hour = 3600000;
  const [seconds, setSeconds] = useState(hour);
  const [humidity, setHumidity] = useState(0);
  const [temperature, setTemperature] = useState(0);
  const [wind, setWind] = useState(0);
  const [soilTemperature, setSoilTemperature] = useState(0);
  const [realTime, setRealTime] = useState(realTimeState);

  useEffect(() => {
    setRealTime(realTimeState);
    if (realTimeState) {
      setSeconds(1000);
    } else {
      setSeconds(hour);
    }
  }, [realTimeState]);

  const getData = () => {
    fetch("/api/temperature/35")
      .then((res) => res.json())
      .then((data) => {
        console.log("data ->", data);
        const formatDataHumity = data.map((item) => {
          return {
            x: new Date(item.FechaRegistro).getTime(),
            y: item.Humedad,
          };
        });
        setHumidity(formatDataHumity);
        const formatDataTemperature = data.map((item) => {
          return {
            x: new Date(item.FechaRegistro).getTime(),
            y: item.Temperatura,
          };
        });
        setTemperature(formatDataTemperature);
        const formatDataWind = data.map((item) => {
          return {
            x: new Date(item.FechaRegistro).getTime(),
            y: item.velocidad_viento,
          };
        });
        setWind(formatDataWind);
        const formatDataSoilTemperature = data.map((item) => {
          return {
            x: new Date(item.FechaRegistro).getTime(),
            y: item.TemperaturaSuelo,
          };
        });
        setSoilTemperature(formatDataSoilTemperature);
      })
      .catch((error) => console.log("error ->", error));
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      getData();
    }, seconds);

    return () => clearInterval(interval);
  }, [seconds]);

  const onChange = () => {
    setRealTime(!realTime);
    dispatch(updateRealTime(!realTime));
  };

  return (
    <div className="w-full bg-gray-100 h-full">
      <h1 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 text-center pt-10">
        Gráficas
      </h1>
      <p className="font-light text-gray-800 mb-5 text-center">
        Datos climáticos en tiempo real y análisis meteorológicos
      </p>
      <div className="flex justify-center mb-5">
        <Switch label="Tiempo real" checked={realTime} onChange={onChange} />
      </div>
      <Cards />
      <div className="md:flex justify-center gap-10 mb-10 md:w-full px-10">
        <div className="border border-gray shadow-md bg-white p-3 mb-3 md:mb-0 w-full">
          {humidity ? <LineChartHumity data={humidity} /> : <Loading />}
        </div>
        <div className="border border-gray shadow-md bg-white p-3 mb-3 md:mb-0 w-full">
          {temperature ? (
            <LineChartTemperature data={temperature} />
          ) : (
            <Loading />
          )}
        </div>
      </div>
      <div className="md:flex justify-center gap-10 mb-10 md:w-full px-10">
        <div className="border border-gray shadow-md bg-white p-3 mb-3 md:mb-0 w-full">
          {wind ? <LineChartAnemometer data={wind} /> : <Loading />}
        </div>
        <div className="border border-gray shadow-md bg-white p-3 mb-3 md:mb-0 w-full">
          {soilTemperature ? (
            <LineChartSoil data={soilTemperature} />
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </div>
  );
}
