import Image from "next/image";
import chichen from "../assets/chichen.jpeg";
import sun from "../assets/sun.jpeg";

export function Section() {
  return (
    <section id="company" className="bg-white dark:bg-gray-900 mt-2">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Misión
          </h2>
          <p className="mb-4">
            Nuestra misión es proporcionar una plataforma integral de
            información meteorológica en tiempo real, a través de una estación
            meteorológica ubicada en la universidad. Buscamos fomentar la
            conciencia ambiental y la curiosidad científica al ofrecer métricas
            precisas y actualizadas para estudiantes, académicos y cualquier
            persona interesada. Nos comprometemos a facilitar el acceso a datos
            meteorológicos de calidad, promoviendo la comprensión del clima y su
            impacto en nuestro entorno.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <Image
            className="w-full rounded-lg"
            src={chichen}
            alt="office content 1"
            width={500}
            height={300}
          />
          <Image
            className="mt-4 w-full lg:mt-10 rounded-lg"
            src={sun}
            alt="office content 2"
            width={500}
            height={300}
          />
        </div>
      </div>
    </section>
  );
}
