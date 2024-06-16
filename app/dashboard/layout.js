import { Providers } from "../lib/provider";
import { Aside } from "../components/Aside";

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
