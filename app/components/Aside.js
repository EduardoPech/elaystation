"use client";

import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { usePathname } from 'next/navigation'
import { set } from "../lib/features/userSlice";

export function Aside() {
  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = () => {
    localStorage.removeItem("user");
    dispatch(set({ id: "", name: "", user: "" }));
    router.push("/login");
  };

  const IconSquares = () => (
    <svg
       className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 size-5"
    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M4.25 2A2.25 2.25 0 0 0 2 4.25v2.5A2.25 2.25 0 0 0 4.25 9h2.5A2.25 2.25 0 0 0 9 6.75v-2.5A2.25 2.25 0 0 0 6.75 2h-2.5Zm0 9A2.25 2.25 0 0 0 2 13.25v2.5A2.25 2.25 0 0 0 4.25 18h2.5A2.25 2.25 0 0 0 9 15.75v-2.5A2.25 2.25 0 0 0 6.75 11h-2.5Zm9-9A2.25 2.25 0 0 0 11 4.25v2.5A2.25 2.25 0 0 0 13.25 9h2.5A2.25 2.25 0 0 0 18 6.75v-2.5A2.25 2.25 0 0 0 15.75 2h-2.5Zm0 9A2.25 2.25 0 0 0 11 13.25v2.5A2.25 2.25 0 0 0 13.25 18h2.5A2.25 2.25 0 0 0 18 15.75v-2.5A2.25 2.25 0 0 0 15.75 11h-2.5Z" clipRule="evenodd" />
    </svg>
  );

  const IconGraph = () => (
    <svg
      className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 22 21"
    >
      <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
      <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
    </svg>
  );

  const IconLogout = () => (
    <svg
      className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 18 16"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
      />
    </svg>
  );

  const tabs = [
    { name: "Todos", href: "/dashboard", icon: IconSquares },
    { name: "Humedad", href: "/dashboard/humidity", icon: IconGraph},
    { name: "Temperatura", href: "/dashboard/temperature", icon: IconGraph},
    { name: "Viento", href: "/dashboard/wind", icon: IconGraph},
    { name: "Suelo", href: "/dashboard/floor", icon: IconGraph},
    { name: "Rayos UV", href: "/dashboard/uv", icon: IconGraph},
  ];

  return (
    <aside
      id="default-sidebar"
      className="hidden md:block w-64 h-full transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="h-[calc(100vh-88px)] px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        <ul className="space-y-2 font-medium">
          {tabs.map((tab, index) => (
            <li key={`tab-${index}`}>
              <a
                href={tab.href}
                className={`flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 group ${pathname === tab.href ? 'bg-gray-200' : ''}`}
              >
                {tab.icon && <tab.icon />}
                <span className="ms-3">{tab.name}</span>
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={handleLogout}
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              {IconLogout && <IconLogout />}
              <span className="flex-1 ms-3 whitespace-nowrap">
                Cerrar sesión
              </span>
            </button>
          </li>
        </ul>
      </div>
    </aside>
  );
}
