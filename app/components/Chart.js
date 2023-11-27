"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Tooltip,
  PointElement,
  LineElement,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register ChartJS components using ChartJS.register
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);

export function Chart() {
  return (
    <div>
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white text-center">
        Gráficas
      </h2>
      <div className="flex my-10 gap-3">
        <div className="p-3 shadow-md">
          <Line
            height={500}
            width={500}
            data={{
              labels: [
                "2023-01",
                "2023-02",
                "2023-03",
                "2023-04",
                "2023-05",
                "2023-06",
                "2023-07",
              ],
              datasets: [
                {
                  data: [100, 120, 115, 134, 168, 132, 200],
                  backgroundColor: "purple",
                },
              ],
            }}
          />
        </div>
        <div className="p-3 shadow-md">
          <Line
            height={500}
            width={500}
            data={{
              labels: [
                "2023-01",
                "2023-02",
                "2023-03",
                "2023-04",
                "2023-05",
                "2023-06",
                "2023-07",
              ],
              datasets: [
                {
                  data: [100, 120, 115, 134, 168, 132, 200],
                  backgroundColor: "purple",
                },
              ],
            }}
          />
        </div>
        <div className="p-3 shadow-md">
          <Line
            height={500}
            width={500}
            data={{
              labels: [
                "2023-01",
                "2023-02",
                "2023-03",
                "2023-04",
                "2023-05",
                "2023-06",
                "2023-07",
              ],
              datasets: [
                {
                  data: [100, 120, 115, 134, 168, 132, 200],
                  backgroundColor: "purple",
                },
              ],
            }}
          />
        </div>
      </div>
    </div>
  );
}
