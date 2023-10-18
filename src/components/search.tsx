import { Button } from "@nextui-org/button"
import Tooltip from "@/ui/tooltip"
import { Mic, Search as Se } from "lucide-react"
const Search = () => {
  return (
    <div className="flex h-full w-1/2 items-center justify-center py-2">
      <div className="search ml-10 flex h-full flex-grow items-center justify-center gap-4 rounded-l-full border border-[#2c2c2c] px-4 py-1 focus-within:m-0 focus-within:border-blue-600">
        <input
          type="text"
          name="VedioSearch"
          className="searchIn peer w-full bg-inherit outline-none"
          placeholder="Search"
        />
        <Se className="order-first hidden peer-focus:block" />
      </div>
      <Tooltip content="Search">
        <Button
          isIconOnly
          className="flex h-full w-16 items-center justify-center rounded-r-full border border-l-0 border-[#2c2c2c] bg-[#2c2b2b] hover:bg-slate-400/30 "
        >
          <Se />
        </Button>
      </Tooltip>
      <Tooltip content="Search with your voice">
        <Button
          isIconOnly
          className="ml-4 bg-inherit transition-colors hover:bg-slate-400/30 dark:bg-[#2c2b2b] dark:hover:bg-slate-700"
          radius="full"
        >
          <Mic />
        </Button>
      </Tooltip>
    </div>
  )
}

export default Search
