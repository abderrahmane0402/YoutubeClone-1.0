import { create } from "zustand"

interface Settings {
  navMode: "open" | "close" | ""
  nav: "hidden" | "short" | ""
  setNavMode: (navMode: "open" | "close" | "") => void
}

export const useSettings = create<Settings>()((set) => ({
  navMode: "open",
  nav: "",
  setNavMode: (navMode: "open" | "close" | "") => set({ navMode }),
}))
