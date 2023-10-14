import "./globals.css"
import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import Providers from "./providers"
import Header from "@/layout/Header"

const roboto = Roboto({ subsets: ["latin"], weight: "400" })

export const metadata: Metadata = {
  title: "Youtube - Clone 1.0",
  description: "Full Youtube clone using next js by S.abderrahmane",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
          <Providers>
            <main className="flex h-screen w-screen flex-col overflow-hidden bg-light text-dark dark:bg-dark dark:text-light">
              <Header />
              <div className="flex flex-grow">
                <nav className="h-full w-60 border"></nav>
                <div className="flex-grow border"></div>
              </div>
              {children}
            </main>
          </Providers>
      </body>
    </html>
  )
}
