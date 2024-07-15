"use client";
import logo from "../assets/logo.png";
import Image from "next/image";
import { use, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { set } from "../lib/features/userSlice";
import { usePathname } from "next/navigation";
import { Notifications } from "./Notifications";

export default function Header() {
  const path = usePathname();
  const userCurrent = useSelector((state) => state.user.user);
  const alerts = useSelector((state) => state.alert.alerts);
  const [listAlerts, setListAlerts] = useState(alerts);
  const [isLogged, setIsLogged] = useState(!!userCurrent.id);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [pathName, setPathName] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("user");
    dispatch(set({ id: "", name: "", user: "" }));
    router.push("/");
  };

  useEffect(() => {
    setPathName(path);
  }, [path, userCurrent]);

  useEffect(() => {
    setIsLogged(!!userCurrent.id);
  }, [userCurrent]);

  useEffect(() => {
    setListAlerts(alerts);
  }, [alerts]);

  return (
    <header className="w-full text-gray-700 bg-white shadow-sm body-font">
      <div className="container flex flex-md-col items-center justify-between p-6 mx-auto md:flex-row">
        <a
          href="/"
          className="flex items-center mb-md-4 font-medium text-gray-900 title-font md:mb-0"
        >
          <Image src={logo} alt="logo" className="w-auto h-10" priority />
        </a>
        {!pathName.includes('/dashboard') && (
          <>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <pathName
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <nav
              className={`flex-wrap items-center justify-between md:pl-24 text-base md:ml-auto md:mr-auto w-full md:flex md:w-auto ${
                isMenuOpen
                  ? "block absolute top-20 left-0 bg-white z-10 text-center p-6"
                  : "hidden"
              }`}
            >
              <a
                href="/#hero"
                className="block p-3 md:mr-5 font-medium hover:text-gray-900"
              >
                Inicio
              </a>
              <a
                href="/#company"
                className="block p-3 md:mr-5 font-medium hover:text-gray-900"
              >
                Misión
              </a>
              <a
                href="/#team"
                className="block p-3 md:mr-5 font-medium hover:text-gray-900"
              >
                Equipo
              </a>
              <a
                href="/#offer"
                className="block p-3 md:mr-5 font-medium hover:text-gray-900"
              >
                App
              </a>
              <div>
                {!isLogged && (
                  <div className="md:flex items-center h-full">
                    <a
                      href="/login"
                      className="block md:mr-5 font-medium hover:text-gray-900 mb-5 md:mb-0"
                    >
                      Iniciar sesión
                    </a>
                    <a
                      href="/register"
                      className="block px-4 py-2 text-xs font-bold text-white uppercase transition-all duration-150 bg-teal-500 rounded shadow outline-none active:bg-teal-600 hover:shadow-md focus:outline-none ease"
                    >
                      Suscripción
                    </a>
                  </div>
                )}
                {isLogged && (
                  <div className="md:flex items-center h-full">
                    <a
                      href="/dashboard"
                      className="block md:mr-5 font-medium hover:text-gray-900 mb-5 md:mb-0"
                    >
                      Dashboard
                    </a>
                    <a
                      href="#"
                      onClick={handleLogout}
                      className="block px-4 py-2 text-xs font-bold text-white uppercase transition-all duration-150 bg-teal-500 rounded shadow outline-none active:bg-teal-600 hover:shadow-md focus:outline-none ease"
                    >
                      Cerrar sesión
                    </a>
                  </div>
                )}
              </div>
            </nav>
          </>
        )}

        {isLogged && pathName.includes('/dashboard') && (
          <>
            <div className="flex gap-2 relative">
            <Notifications listAlerts={listAlerts} />
              {userCurrent.name}
            </div>
          </>
        )}
      </div>
    </header>
  );
}
