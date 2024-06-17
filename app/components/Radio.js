export function Radio ({ typeDate, setTypeDate}) {
  return (
    <ul className="flex flex-col sm:flex-row">
      <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border text-gray-600 -mt-px first:rounded-t-full first:mt-0 last:rounded-b-full sm:-ml-px sm:mt-0 sm:first:rounded-tr-none sm:first:rounded-bl-full sm:last:rounded-bl-none sm:last:rounded-tr-full ">
        <div className="flex items-center">
          <input id="hour" type="radio" name="typeDate" 
            className="hidden checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100"
            value="hour" checked={ typeDate === 'hour'} onClick={() => setTypeDate('hour')} onChange={() => setTypeDate('hour')} />
          <label htmlFor="hour" className="flex items-center cursor-pointer text-gray-600 text-sm font-normal">
            <span className="border border-gray-300  rounded-full mr-2 w-4 h-4"></span> Horas 
          </label>
        </div>
      </li>
      <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-full first:mt-0 last:rounded-b-full sm:-ml-px sm:mt-0 sm:first:rounded-tr-none sm:first:rounded-bl-full sm:last:rounded-bl-none sm:last:rounded-tr-full ">
        <div className="flex items-center">
          <input id="days" type="radio" name="typeDate"
            className="hidden checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100"
            value="days" checked={ typeDate === 'days'} onClick={() => setTypeDate('days')} onChange={() => setTypeDate('days')} />
          <label htmlFor="days" className="flex items-center cursor-pointer text-gray-600 text-sm font-normal">
            <span className="border border-gray-300  rounded-full mr-2 w-4 h-4"></span> Días
          </label>
        </div>
      </li>
    </ul>
  );
} 