import ErickPhoto from "../assets/team/erick.jpeg";
import EmilyPhoto from "../assets/team/emily.jpeg";
import BrandonPhoto from "../assets/team/brandon.jpeg";
import IvanPhoto from "../assets/team/ivan.jpeg";
import Image from "next/image";

export function OurTeam() {
  return (
    <section id="team" className="bg-teal-500">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white dark:text-white">
            Equipo
          </h2>
          <p className="font-light text-white lg:mb-16 sm:text-xl dark:text-gray-400">
            ¡Descubre el clima como nunca antes en ElayStation gracias a nuestro
            equipo!
          </p>
        </div>
        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
          <div className="bg-gray-50 rounded-lg shadow md:flex items-center">
            <a href="#" className="basis-1/3">
              <Image
                src={ErickPhoto}
                alt="Erick"
                className="rounded-lg sm:rounded-none sm:rounded-l-lg"
                width={400}
                height={400}
              ></Image>
            </a>
            <div className="basis-2/3 p-5">
              <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Erick Hoil</a>
              </h3>
              <span className="text-gray-500 dark:text-gray-400">
                Ceo y creador de Elaystation
              </span>
              <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                Encargado del desarrollo y programación para el funcionamiento
                de Elaystation.
              </p>
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg shadow md:flex items-center">
            <a href="#" className="basis-1/3">
              <Image
                src={IvanPhoto}
                alt="Erick"
                className="rounded-lg sm:rounded-none sm:rounded-l-lg"
                width={400}
                height={400}
              ></Image>
            </a>
            <div className="basis-2/3 p-5">
              <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Iván Mauricio Sansores Iuit</a>
              </h3>
              <span className="text-gray-500 dark:text-gray-400">
                Desarrollador Web
              </span>
              <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                Desarrollo y programación para el funcionamiento óptimo de
                Elaystation.
              </p>
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg shadow md:flex items-center">
            <a href="#" className="basis-1/3">
              <Image
                src={BrandonPhoto}
                alt="Erick"
                className="rounded-lg sm:rounded-none sm:rounded-l-lg"
                width={400}
                height={400}
              ></Image>
            </a>
            <div className="basis-2/3 p-5">
              <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Brandon Manuel</a>
              </h3>
              <span className="text-gray-500 dark:text-gray-400">
                Servicios en la nube(AWS)
              </span>
              <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                Encargado de los servicios en la nube y desarollo.
              </p>
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg shadow md:flex items-center">
            <a href="#" className="basis-1/3">
              <Image
                src={EmilyPhoto}
                alt="Erick"
                className="rounded-lg sm:rounded-none sm:rounded-l-lg"
                width={400}
              ></Image>
            </a>
            <div className="basis-2/3 p-5">
              <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Emily Rosado</a>
              </h3>
              <span className="text-gray-500 dark:text-gray-400">
                Marketing y Ventas
              </span>
              <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                Marketing y ventas, programación, y con experiencia con el
                lenguaje de Python.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
