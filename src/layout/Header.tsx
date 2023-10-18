"use client"
import { useSettings } from "@/app/settings"
import YoutubeLogo from "@/assets/YoutubeLogo"
import Menu from "@/components/menu"
import { Button } from "@nextui-org/button"
import { AlignJustify } from "lucide-react"
import { useTheme } from "next-themes"
import Search from "@/components/search"

export default function Header() {
  const { navMode, setNavMode } = useSettings()
  const { theme, systemTheme } = useTheme()
  return (
    <header className="flex h-14  w-full items-center justify-between">
      <div className="flex h-full w-60 items-center justify-center gap-2 px-5 py-2">
        <Button
          isIconOnly
          className="bg-inherit transition-colors hover:bg-slate-400/30 dark:hover:bg-slate-700"
          radius="full"
          onClick={() => {
            setNavMode(navMode == "open" ? "close" : "open")
          }}
        >
          <AlignJustify />
        </Button>
        <div className="flex-grow">
          <YoutubeLogo theme={theme == "system" ? systemTheme : theme} />
        </div>
      </div>
      <Search />
      <Menu />
    </header>
  )
}
