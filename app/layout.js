import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./lib/provider";

const inter = Inter({ subsets: ["latin"] });
import dynamic from "next/dynamic";

const Header = dynamic(() => import("./components/Header"), {
  ssr: false,
});

export const metadata = {
  title: "Elaystation",
  description: "Clima en tiempo real",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
