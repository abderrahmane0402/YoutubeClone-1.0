"use client"

import { NextUIProvider } from "@nextui-org/react"
import { ThemeProvider } from "next-themes"
import { useEffect, ReactNode, useState } from "react"

const Providers = ({ children }: { children: ReactNode }) => {
  const [monted, setMonted] = useState(false)
  useEffect(() => {
    setMonted(true)
  }, [])
  if (!monted) return null

  return (
    <NextUIProvider>
      <ThemeProvider
        attribute='class'
        defaultTheme='system'
        themes={["dark", "light"]}
      >
        {children}
      </ThemeProvider>
    </NextUIProvider>
  )
}

export default Providers
