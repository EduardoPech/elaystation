import logo from "../assets/logo.png";
import Image from "next/image";

export function Header() {
  return (
    <header className="w-full text-gray-700 bg-white shadow-sm body-font">
      <div className="container flex flex-col items-center justify-between p-6 mx-auto md:flex-row">
        <a
          href="/"
          className="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0"
        >
          <Image src={logo} alt="logo" className="w-auto h-10" />
        </a>
        <nav className="flex flex-wrap items-center justify-center pl-24 text-base md:ml-auto md:mr-auto">
          <a href="/#hero" className="mr-5 font-medium hover:text-gray-900">
            Inicio
          </a>
          <a href="/#company" className="mr-5 font-medium hover:text-gray-900">
            Misión
          </a>
          <a href="/#team" className="mr-5 font-medium hover:text-gray-900">
            Equipo
          </a>
          <a href="/#sensor" className="mr-5 font-medium hover:text-gray-900">
            Sensor
          </a>
        </nav>
        <div className="items-center h-full">
          <a href="/login" className="mr-5 font-medium hover:text-gray-900">
            Login
          </a>
          <a
            href="/register"
            className="px-4 py-2 text-xs font-bold text-white uppercase transition-all duration-150 bg-teal-500 rounded shadow outline-none active:bg-teal-600 hover:shadow-md focus:outline-none ease"
          >
            Sign Up
          </a>
        </div>
      </div>
    </header>
  );
}
