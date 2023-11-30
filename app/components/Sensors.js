export function Sensors() {
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
              <p className="text-gray-700 text-5xl">10.4</p>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4 text-center">
              <div className="font-bold text-xl mb-2">Humedad</div>
              <p className="text-gray-700 text-5xl">10.4</p>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4 text-center">
              <div className="font-bold text-xl mb-2">Humedad</div>
              <p className="text-gray-700 text-5xl">10.4</p>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4 text-center">
              <div className="font-bold text-xl mb-2">Humedad</div>
              <p className="text-gray-700 text-5xl">10.4</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
