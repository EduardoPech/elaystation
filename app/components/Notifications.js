import { useRef, useEffect, useState } from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export function Notifications({listAlerts = []}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdown = useRef(null);

  const openDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdown.current && !dropdown.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    if(isDropdownOpen){
      document.addEventListener("mousedown", handleClickOutside);  
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isDropdownOpen]);

  const showSwal = ({text, icon, rule}) => {
    withReactContent(Swal).fire({
      title: `Alerta: ${text}`,
      text: rule,
      icon,
    })
  }

  const timeAgo = (date) => {
    const currentDate = new Date();
    const previousDate = new Date(date);
    const diff = currentDate - previousDate;
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);
    if (years > 0) return `Hace ${years} año${years > 1 ? "s" : ""}`;
    if (months > 0) return `Hace ${months} mes${months > 1 ? "es" : ""}`;
    if (days > 0) return `Hace ${days} día${days > 1 ? "s" : ""}`;
    if (hours > 0) return `Hace ${hours} hora${hours > 1 ? "s" : ""}`;
    if (minutes > 0) return `Hace ${minutes} minuto${minutes > 1 ? "s" : ""}`;
    if (seconds > 0) return `Hace ${seconds} segundo${seconds > 1 ? "s" : ""}`;
  };

  return (<>
    <button
    data-dropdown-toggle="dropdownNotification"
    className="relative inline-flex items-center text-sm font-medium text-center text-gray-500 hover:text-gray-900 focus:outline-none dark:hover:text-white dark:text-gray-400"
    type="button" onClick={openDropdown}>
      <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 20">
        <path d="M12.133 10.632v-1.8A5.406 5.406 0 0 0 7.979 3.57.946.946 0 0 0 8 3.464V1.1a1 1 0 0 0-2 0v2.364a.946.946 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C1.867 13.018 0 13.614 0 14.807 0 15.4 0 16 .538 16h12.924C14 16 14 15.4 14 14.807c0-1.193-1.867-1.789-1.867-4.175ZM3.823 17a3.453 3.453 0 0 0 6.354 0H3.823Z"/>
      </svg>
      {listAlerts.length > 0 && (
        <div className="absolute block w-3 h-3 bg-red-500 border-2 border-white rounded-full -top-0.5 start-2.5 dark:border-gray-900"></div>
      )}
    </button>
    <div ref={dropdown}
      className={`z-20 w-60 mt-10 bg-white divide-y divide-gray-100 rounded-lg shadow absolute top-0 right-0 ${isDropdownOpen ? "block" : "hidden"}`}
      aria-labelledby="dropdownNotificationButton">
      <div className="block px-4 py-2 font-medium text-center text-gray-700 rounded-t-lg bg-gray-50 dark:bg-gray-800 dark:text-white">
          Notificaciones
      </div>
      <div className="divide-y divide-gray-100 dark:divide-gray-700">
        {listAlerts.length > 0 && (
          listAlerts.slice(listAlerts.length - 5, listAlerts.length).map((alert) => {
            return (
              <button key={alert.id} className="flex w-full px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700" onClick={() => showSwal({text: alert.message, icon: alert.icon, rule: alert.ruleMessage})}>
                <div className="w-full">
                    <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400">Alerta: <span className="font-semibold text-gray-900 dark:text-white">{alert.message}</span></div>
                    <div className="text-xs text-blue-600 dark:text-blue-500">{timeAgo(alert.id) || 'Hace 1 segundo'}</div>
                </div>
              </button>
            )
          })
        )}
        {listAlerts.length === 0 && (
          <div className="px-4 py-3 text-center text-gray-500 dark:text-gray-400">
            No hay notificaciones
          </div>
        )}
      </div>
      {/* <a href="#" className="block py-2 text-sm font-medium text-center text-gray-900 rounded-b-lg bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white">
        <div className="inline-flex items-center ">
          <svg className="w-4 h-4 me-2 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
            <path d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"/>
          </svg>
            Ver todas
        </div>
      </a> */}
    </div>
    </>)};