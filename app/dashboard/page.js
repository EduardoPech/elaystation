import { AChart } from "../components/AChart";

export default function Dashboard() {
  return (
    <div className="w-full bg-gray-100 h-full">
      <h1 className="text-center font-bold text-3xl text-gray-600 py-5">
        Gráficas
      </h1>
      <div className="flex justify-center gap-10 mb-10">
        <div className="border border-gray shadow-md bg-white p-3">
          <AChart />
        </div>
        <div className="border border-gray shadow-md bg-white p-3">
          <AChart />
        </div>
      </div>
      <div className="flex justify-center gap-10 mb-10">
        <div className="border border-gray shadow-md bg-white p-3">
          <AChart />
        </div>
        <div className="border border-gray shadow-md bg-white p-3">
          <AChart />
        </div>
      </div>
    </div>
  );
}
