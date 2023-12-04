"use client";
import { useEffect, useState } from "react";

export function Sensors() {
  const [humidity, setHumidity] = useState(0);
  const [temperature, setTemperature] = useState(0);
  const [wind, setWind] = useState(0);
  const [soilTemperature, setSoilTemperature] = useState(0);

  useEffect(() => {
    fetch("/api/temperature/1")
      .then((res) => res.json())
      .then((data) => {
        setHumidity(data[0].humedad);
        setTemperature(data[0].temperatura);
      })
      .catch((error) => console.log(error));
    // const interval = setInterval(() => {
    //   fetch("/api/temperature/1")
    //     .then((res) => res.json())
    //     .then((data) => {
    //       setHumidity(data[0].humedad);
    //       setTemperature(data[0].temperatura);
    //     })
    //     .catch((error) => console.log(error));
    // }, 1000);

    // return () => clearInterval(interval);
  }, []);

  return (
    <section id="sensor" className="bg-white">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Sensores
          </h2>
          <p className="font-light text-gray-800  dark:text-gray-400">
            Datos climáticos en tiempo real y análisis meteorológicos
          </p>
        </div>
        <div className="grid gap-8 mb-6 grid-cols-4">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4 text-center">
              <div className="font-bold text-xl mb-2">Humedad</div>
              <p className="text-gray-700 text-5xl">{humidity}</p>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4 text-center">
              <div className="font-bold text-xl mb-2">Temperatura</div>
              <p className="text-gray-700 text-5xl">{temperature}</p>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4 text-center">
              <div className="font-bold text-xl mb-2">Anemómetro</div>
              <p className="text-gray-700 text-5xl">10.4</p>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4 text-center">
              <div className="font-bold text-xl mb-2">Temperatura de suelo</div>
              <p className="text-gray-700 text-5xl">10.4</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
