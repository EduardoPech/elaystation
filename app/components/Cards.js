"use client";
import { useEffect, useState } from "react";
import { updateRealTime } from "../lib/features/userSlice";
import { useDispatch, useSelector } from "react-redux";

export function Cards() {
  const dispatch = useDispatch();
  const realTimeState = useSelector((state) => state.user.realTime);
  const [humidity, setHumidity] = useState(0);
  const [temperature, setTemperature] = useState(0);
  const [wind, setWind] = useState(0);
  const [soilTemperature, setSoilTemperature] = useState(0);
  const [uv, setUv] = useState(0);
  const [soilHumidity, setSoilHumidity] = useState(0);
  const [realTime, setRealTime] = useState(false);
  const hour = 3600000;
  const [seconds, setSeconds] = useState(hour);

  useEffect(() => {
    if (realTimeState) {
      setSeconds(1000);
    } else {
      setSeconds(hour);
    }
  }, [realTimeState]);

  const getData = () => {
    fetch("/api/temperature/1")
      .then((res) => res.json())
      .then((data) => {
        setHumidity(data[0].Humedad);
        setTemperature(data[0].Temperatura);
        setWind(data[0].velocidad_viento);
        setSoilTemperature(data[0].TemperaturaSuelo);
        setUv(data[0].uv);
        setSoilHumidity(data[0].humedad_suelo);
      })
      .catch((error) => {
        throw new Error(error);
      });
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
    <section id="sensor" className="bg-gray-100">
      <div className="py-8 mx-auto lg:px-10">
        <div className="grid gap-8 mb-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-3 justify-items-stretch">
          <div className="rounded overflow-hidden shadow-lg bg-white">
            <div className="px-6 py-4 text-center">
              <div className="font-bold text-lg mb-2">Humedad</div>
              <p className="text-gray-700 text-5xl">{humidity}%</p>
            </div>
          </div>
          <div className="rounded overflow-hidden shadow-lg bg-white">
            <div className="px-6 py-4 text-center">
              <div className="font-bold text-lg mb-2">Temperatura</div>
              <p className="text-gray-700 text-5xl">{temperature} ºC</p>
            </div>
          </div>
          <div className="rounded overflow-hidden shadow-lg bg-white">
            <div className="px-6 py-4 text-center">
              <div className="font-bold text-lg mb-2">Velocidad del viento</div>
              <p className="text-gray-700 text-5xl">{wind} Km/h</p>
            </div>
          </div>
        </div>
        <div className="grid gap-8 mb-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-3 justify-items-stretch">
          <div className="rounded overflow-hidden shadow-lg bg-white">
            <div className="px-6 py-4 text-center">
              <div className="font-bold text-lg mb-2">Temperatura de suelo</div>
              <p className="text-gray-700 text-5xl">{soilTemperature} ºC</p>
            </div>
          </div>
          <div className="rounded overflow-hidden shadow-lg bg-white">
            <div className="px-6 py-4 text-center">
              <div className="font-bold text-lg mb-2">Rayos UV</div>
              <p className="text-gray-700 text-5xl">{uv}</p>
            </div>
          </div>
          <div className="rounded overflow-hidden shadow-lg bg-white">
            <div className="px-6 py-4 text-center">
              <div className="font-bold text-lg mb-2">Humedad del suelo</div>
              <p className="text-gray-700 text-5xl">{soilHumidity}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
