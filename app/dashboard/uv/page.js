"use client";

import { LineChartUV } from "../../components/charts/uv/LineChartUV";
import { Loading } from "../../components/Loading";
import { useState, useEffect } from "react";
import { Radio } from "../../components/Radio";
import { Switch } from "../../components/Switch";
import { useDispatch, useSelector } from "react-redux";
import { updateRealTime } from "../../lib/features/userSlice";

export default function UV() {
  const [temperature, setTemperature] = useState(0);
  const [typeDate, setTypeDate] = useState("hour");
  const realTimeState = useSelector((state) => state.user.realTime);
  const [realTime, setRealTime] = useState(realTimeState);
  const dispatch = useDispatch();
  const hour = 3600000;
  const [seconds, setSeconds] = useState(hour);

  const getData = async () => {
    const url = typeDate === 'hour' ? "/api/temperature/30" : "/api/bydate";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const formatDataTemperature = data.map((item) => {
          return {
            x: new Date(item.FechaRegistro).getTime(),
            y: item.uv,
          };
        });
        setTemperature(formatDataTemperature);
      })
      .catch((error) => {
        throw new Error(error);
      });
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, [typeDate]);

  useEffect(() => {
    const interval = setInterval(() => {
      getData();
    }, seconds);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seconds]);

  const onChange = () => {
    setRealTime(!realTime);
    dispatch(updateRealTime(!realTime));
  };

  useEffect(() => {
    setRealTime(realTimeState);
    if (realTimeState) {
      setSeconds(2000);
    } else {
      setSeconds(hour);
    }
  }, [realTimeState]);

  return (
    <div className="m-10">
      <h1 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 text-center pt-10">
        Rayos UV
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
      {temperature ? <LineChartUV data={temperature} typeDate={typeDate} /> : <Loading />}
    </div>
  );
}