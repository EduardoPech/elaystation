import { Inter } from "next/font/google";
import { Providers } from "../lib/provider";
import { Aside } from "../components/Aside";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }) {
  return (
    <Providers>
      <div className="flex">
        <Aside />
        <div className="w-full">{children}</div>
      </div>
    </Providers>
  );
}
