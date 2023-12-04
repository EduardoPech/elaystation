import { AChart } from "../components/AChart";
import { LineChartHumity } from "../components/charts/humity/LineChartHumity";
import { LineChartTemperature } from "../components/charts/temperature/LineChartTemperature";
import { LineChartAnemometer } from "../components/charts/anemometer/LineChartAnemometer";
import { LineChartSoil } from "../components/charts/soil/LineChartSoil";

export default function Dashboard() {
  return (
    <div className="w-full bg-gray-100 h-full">
      <h1 className="text-center font-bold text-3xl text-gray-600 py-5">
        Gráficas
      </h1>
      <div className="flex justify-center gap-10 mb-10">
        <div className="border border-gray shadow-md bg-white p-3">
          <LineChartHumity />
        </div>
        <div className="border border-gray shadow-md bg-white p-3">
          <LineChartTemperature />
        </div>
      </div>
      <div className="flex justify-center gap-10 mb-10">
        <div className="border border-gray shadow-md bg-white p-3">
          <LineChartAnemometer />
        </div>
        <div className="border border-gray shadow-md bg-white p-3">
          <LineChartSoil />
        </div>
      </div>
    </div>
  );
}
