import "./globals.css";
import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import Providers from "./providers";

const roboto = Roboto({ subsets: ["latin"], weight: "500" });

export const metadata: Metadata = {
  title: "Youtube - Clone 1.0",
  description: "Full Youtube clone using next js by S.abderrahmane",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Providers>
          <main className="h-screen w-screen overflow-auto bg-light text-dark dark:bg-dark dark:text-light">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
