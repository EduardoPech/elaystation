import hero from "../assets/hero.jpeg";

export function Hero() {
  return (
    <>
      <div class="flex justify-center items-center flex-col">
        <div
          class="w-full h-[32rem] bg-cover bg-center"
          style={{ backgroundImage: `url(${hero.src})` }}
        >
          <div class="w-full h-full flex justify-center items-center backdrop-brightness-50">
            <div className="text-center">
              <h1 className="max-w-4xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
                Tu Portal Metereológico en Línea
              </h1>
              <p className="max-w-4xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl">
                Explora pronósticos detallados, datos en tiempo real y análisis
                meteorológicos en ElayStation. La información precisa que
                necesitas para estar siempre preparado.
              </p>
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white hover:text-black"
              >
                Empezar
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
