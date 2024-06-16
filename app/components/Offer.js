"use client";
import Image from "next/image";
import Charts from "../assets/charts.jpeg";

export function Offer() {
  return (
    <section id="offer" className="bg-white">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto lg:col-span-12">
          <h2 className="max-w-6xl mb-10 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-center">
          ¡Descubre tu nueva app meteorológica!
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="mt-3">
              <p className="mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
                Obtén acceso instantáneo a pronósticos detallados, datos en tiempo real y análisis meteorológicos precisos, todo en un solo lugar. Con ElayStation, estarás siempre un paso adelante, preparado para cualquier cambio en las condiciones climáticas.
              </p>
              <ul className="space-y-4 text-left text-gray-500 dark:text-gray-400 mb-7">
                <li className="flex items-center space-x-3 rtl:space-x-reverse">
                    <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                    </svg>
                    <span>Información Detallada</span>
                </li>
                <li className="flex items-center space-x-3 rtl:space-x-reverse">
                    <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                    </svg>
                    <span>Datos en Tiempo Real</span>
                </li>
                <li className="flex items-center space-x-3 rtl:space-x-reverse">
                    <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                    </svg>
                    <span>Gráficas personalizadas</span>
                </li>
                <li className="flex items-center space-x-3 rtl:space-x-reverse">
                    <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                    </svg>
                    <span>Análisis Meteorológicos Precisos</span>
                </li>
                <li className="flex items-center space-x-3 rtl:space-x-reverse">
                    <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                    </svg>
                    <span>Experiencia sin Interrupciones</span>
                </li>
              </ul>
              <a href="/register" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-500	hover:bg-blue-800 focus:ring-4 focus:ring-blue-300">
                Empezar ahora
                <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </a>
            </div>
            <div>
              <Image src={Charts} alt="Charts" width={700} height={500} />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
