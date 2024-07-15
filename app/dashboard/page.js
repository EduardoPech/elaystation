"use client";

import { LineChartHumity } from "../components/charts/humity/LineChartHumity";
import { LineChartTemperature } from "../components/charts/temperature/LineChartTemperature";
import { LineChartAnemometer } from "../components/charts/anemometer/LineChartAnemometer";
import { LineChartSoil } from "../components/charts/soil/LineChartSoil";
import { Switch } from "../components/Switch";
import { updateRealTime } from "../lib/features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Loading } from "../components/Loading";
import { Cards } from "../components/Cards";
import { LineColumnArea } from "../components/charts/LineColumnArea";
import { Multiple } from "../components/charts/Multiple";
import { LineColumn } from "../components/charts/LineColumn";
import { Radio } from "../components/Radio";
import { alertMixed } from "../utils/logicAlerts";
import { addAlert } from "../lib/features/alertSlice";


export default function Dashboard() {
  const MAX_TIME_ALERT = 60000; // 1 minute
  const dispatch = useDispatch();
  const realTimeState = useSelector((state) => state.user.realTime);
  const hour = 3600000;
  const [seconds, setSeconds] = useState(hour);
  const [humidity, setHumidity] = useState(0);
  const [temperature, setTemperature] = useState(0);
  const [wind, setWind] = useState(0);
  const [serie1, setSerie1] = useState(null);
  const [serie2, setSerie2] = useState(null);
  const [serie3, setSerie3] = useState(null);
  const [soilTemperature, setSoilTemperature] = useState(0);
  const [realTime, setRealTime] = useState(realTimeState);
  const [typeDate, setTypeDate] = useState("hour");
  const alerts = useSelector((state) => state.alert.alerts);
  const [listAlerts, setListAlerts] = useState(alerts);

  useEffect(() => {
    setRealTime(realTimeState);
    if (realTimeState) {
      setSeconds(2000);
    } else {
      setSeconds(hour);
    }
  }, [realTimeState]);

  useEffect(() => {
    setListAlerts(alerts);
  }, [alerts]);

  const formatDate = (date) => {
    const fechaOriginal = new Date(date);
    const day = fechaOriginal.getDate();
    const month = fechaOriginal.getMonth() + 1;
    const year = fechaOriginal.getFullYear();
    return `${month}/${day}/${year}`;
  };

  const getData = () => {
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

        const formatDataSerie1 = [
          {
            name: "Humedad",
            type: "column",
            data: formatDataHumity.map((item) => item.y),
          },
          {
            name: "Temperatura",
            type: "area",
            data: formatDataTemperature.map((item) => item.y),
          },
          {
            name: "Velocidad del Viento",
            type: "line",
            data: formatDataWind.map((item) => item.y),
          },
          {
            name: "Temperatura suelo",
            type: "column",
            data: formatDataSoilTemperature.map((item) => item.y),
          },
        ];
        setSerie1(formatDataSerie1);

        const formatDataSerie2 = [
          {
            name: "Humedad",
            type: "column",
            data: formatDataHumity.map((item) => item.y),
          },
          {
            name: "Temperatura",
            type: "column",
            data: formatDataTemperature.map((item) => item.y),
          },
          {
            name: "Velocidad del Viento",
            type: "line",
            data: formatDataWind.map((item) => item.y),
          },
          {
            name: "Temperatura suelo",
            type: "line",
            data: formatDataSoilTemperature.map((item) => item.y),
          },
        ];
        setSerie2(formatDataSerie2);

        const formatDataSerie3 = [
          {
            name: "Temperatura",
            type: "column",
            data: formatDataTemperature.map((item) => item.y),
          },
          {
            name: "Velocidad del Viento",
            type: "line",
            data: formatDataWind.map((item) => item.y),
          },
        ];
        setSerie3(formatDataSerie3);
      })
      .catch((error) => {
        throw new Error(error);
      });
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typeDate]);

  useEffect(() => {
    const interval = setInterval(() => {
      getData();
    }, seconds);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seconds]);

  useEffect(() => {
    const temperaturaAire = temperature[temperature.length - 1]?.y;
    const humedadSuelo = humidity[humidity.length - 1]?.y;
    const temperaturaSuelo = soilTemperature[soilTemperature.length - 1]?.y;
    const velocidadViento = wind[wind.length - 1]?.y;
    const alert = alertMixed({
      temperaturaAire,
      humedadSuelo,
      temperaturaSuelo,
      velocidadViento,
    });

      const lastAlert = listAlerts[listAlerts.length - 1];
      if(lastAlert && (new Date().getTime() - lastAlert.id) < MAX_TIME_ALERT){
        return;
      } else if(alert && alert.message) {
        dispatch(addAlert({
          id: new Date().getTime(),
          message: alert.message,
          ruleMessage: alert.ruleMessage,
          icon: alert.icon,
        }));
      }
  }, [temperature, humidity, soilTemperature, wind, dispatch, listAlerts]);

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
      <div className="flex justify-center mb-5 items-center gap-5">
        <div className="flex items-center">
          <Switch label="Tiempo real" checked={realTime} onChange={onChange} />
        </div>
        <div>
          <div className="flex justify-center">
            <Radio typeDate={typeDate} setTypeDate={setTypeDate} />
          </div>
        </div>
      </div>
      <Cards />
      <div className="md:flex justify-center gap-10 mb-10 md:w-full px-10">
        <div className="border border-gray shadow-md bg-white p-3 mb-3 md:mb-0 w-full">
          {humidity ? <LineChartHumity data={humidity} typeDate={typeDate} /> : <Loading />}
        </div>
        <div className="border border-gray shadow-md bg-white p-3 mb-3 md:mb-0 w-full">
          {temperature ? (
            <LineChartTemperature data={temperature} typeDate={typeDate} />
          ) : (
            <Loading />
          )}
        </div>
      </div>
      <div className="md:flex justify-center gap-10 mb-10 md:w-full px-10">
        <div className="border border-gray shadow-md bg-white p-3 mb-3 md:mb-0 w-full">
          {wind ? <LineChartAnemometer data={wind} typeDate={typeDate} /> : <Loading />}
        </div>
        <div className="border border-gray shadow-md bg-white p-3 mb-3 md:mb-0 w-full">
          {soilTemperature ? (
            <LineChartSoil data={soilTemperature} typeDate={typeDate} />
          ) : (
            <Loading />
          )}
        </div>
      </div>
      <div className="md:flex justify-center gap-10 mb-10 md:w-full px-10">
        <div className="border border-gray shadow-md bg-white p-3 mb-3 md:mb-0 w-full">
          {wind && serie1 ? (
            <LineColumnArea data={humidity} seriesData={serie1} typeDate={typeDate} />
          ) : (
            <Loading />
          )}
        </div>
      </div>
      <div className="md:flex justify-center gap-10 mb-10 md:w-full px-10">
        <div className="border border-gray shadow-md bg-white p-3 mb-3 md:mb-0 w-full">
          {wind && serie2 ? (
            <Multiple data={humidity} seriesData={serie2} typeDate={typeDate} />
          ) : (
            <Loading />
          )}
        </div>
      </div>
      <div className="md:flex justify-center gap-10 mb-10 md:w-full px-10">
        <div className="border border-gray shadow-md bg-white p-3 mb-3 md:mb-0 w-full">
          {wind && serie3 ? (
            <LineColumn data={humidity} seriesData={serie3} typeDate={typeDate} />
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </div>
  );
}
