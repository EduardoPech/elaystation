import Image from "next/image";

export function Vision() {
  return (
    <section className="bg-white dark:bg-gray-900 mt-2">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="grid grid-cols-2 gap-4 mt-8">
          <Image
            className="w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
            alt="office content 1"
            width={500}
            height={300}
          />
          <Image
            className="mt-4 w-full lg:mt-10 rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
            alt="office content 2"
            width={500}
            height={300}
          />
        </div>
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Visión
          </h2>
          <p className="mb-4">
            Aspiramos a ser líderes en la provisión de datos meteorológicos
            accesibles, convirtiendo nuestra estación en un recurso
            indispensable para la comunidad universitaria y más allá. Buscamos
            inspirar el interés en la meteorología y la ciencia ambiental,
            contribuyendo al conocimiento colectivo sobre el clima local.
            Visualizamos una comunidad informada y consciente, utilizando
            nuestra estación como herramienta educativa y de toma de decisiones,
            promoviendo así un enfoque sostenible hacia el medio ambiente.
          </p>
        </div>
      </div>
    </section>
  );
}
