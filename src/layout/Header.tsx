"use client"
import { Button } from "@nextui-org/button"
import { Tooltip } from "@nextui-org/tooltip"
import { AlignJustify, Bell, Mic, Search, User, Video } from "lucide-react"
import YoutubeLogo from "@/assets/YoutubeLogo"
import { useSettings } from "@/app/settings"
import { useTheme } from "next-themes"
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  DropdownSection,
} from "@nextui-org/dropdown"
import { Avatar } from "@nextui-org/avatar"
import { Link } from "@nextui-org/react"
import NextLink from "next/link"

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
      {/* search bar */}
      <div className="flex h-full w-1/2 items-center justify-center py-2">
        <div className="search ml-10 flex h-full flex-grow items-center justify-center gap-4 rounded-l-full border border-[#2c2c2c] px-4 py-1 focus-within:m-0 focus-within:border-blue-600">
          <input
            type="text"
            name="VedioSearch"
            className="searchIn peer w-full bg-inherit outline-none"
            placeholder="Search"
          />
          <Search className="order-first hidden peer-focus:block" />
        </div>
        <Tooltip
          content="Search"
          offset={10}
          delay={0}
          closeDelay={0}
          motionProps={{
            variants: {
              exit: {
                opacity: 0,
                transition: {
                  duration: 0.1,
                  ease: "easeIn",
                },
              },
              enter: {
                opacity: 1,
                transition: {
                  duration: 0.15,
                  ease: "easeOut",
                },
              },
            },
          }}
          classNames={{
            base: "bg-slate-600",
          }}
        >
          <Button
            isIconOnly
            className="flex h-full w-16 items-center justify-center rounded-r-full border border-l-0 border-[#2c2c2c] bg-[#2c2b2b] hover:bg-slate-400/30 "
          >
            <Search />
          </Button>
        </Tooltip>
        <Tooltip
          content="Search with your voice"
          offset={10}
          delay={0}
          closeDelay={0}
          motionProps={{
            variants: {
              exit: {
                opacity: 0,
                transition: {
                  duration: 0.1,
                  ease: "easeIn",
                },
              },
              enter: {
                opacity: 1,
                transition: {
                  duration: 0.15,
                  ease: "easeOut",
                },
              },
            },
          }}
          classNames={{
            base: "bg-slate-600",
          }}
        >
          <Button
            isIconOnly
            className="ml-4 bg-inherit transition-colors hover:bg-slate-400/30 dark:bg-[#2c2b2b] dark:hover:bg-slate-700"
            radius="full"
          >
            <Mic />
          </Button>
        </Tooltip>
      </div>
      <div className="flex w-60 flex-row-reverse items-center gap-3 px-4">
        <Dropdown placement="left-start">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              src="generic-user-icon-9.jpg"
              showFallback
              fallback={<User />}
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="shadow">
            <DropdownSection title={"account"} showDivider>
              <DropdownItem
                isReadOnly
                key="profile"
                className="group flex w-72"
              >
                <div className="flex items-center gap-4">
                  <Avatar
                    className="transition-transform"
                    src="generic-user-icon-9.jpg"
                    showFallback
                    fallback={<User />}
                  />
                  <div className="text-base font-medium">
                    <p>Abderrahmane Sabkari</p>
                    <p>@abderrahmane9963</p>
                  </div>
                </div>
                <Link
                  href="/route"
                  as={NextLink}
                  className="mt-3 flex w-full justify-center font-bold"
                  color="primary"
                >
                  Manage your Google account
                </Link>
              </DropdownItem>
            </DropdownSection>
          </DropdownMenu>
        </Dropdown>
        <Tooltip
          content="Notifications"
          offset={10}
          delay={0}
          closeDelay={0}
          motionProps={{
            variants: {
              exit: {
                opacity: 0,
                transition: {
                  duration: 0.1,
                  ease: "easeIn",
                },
              },
              enter: {
                opacity: 1,
                transition: {
                  duration: 0.15,
                  ease: "easeOut",
                },
              },
            },
          }}
          classNames={{
            base: "bg-slate-600",
          }}
        >
          <Button
            isIconOnly
            className="bg-inherit transition-colors hover:bg-slate-400/30 dark:hover:bg-slate-700"
            radius="full"
          >
            <Bell />
          </Button>
        </Tooltip>
        <Tooltip
          content="Create"
          offset={10}
          delay={0}
          closeDelay={0}
          motionProps={{
            variants: {
              exit: {
                opacity: 0,
                transition: {
                  duration: 0.1,
                  ease: "easeIn",
                },
              },
              enter: {
                opacity: 1,
                transition: {
                  duration: 0.15,
                  ease: "easeOut",
                },
              },
            },
          }}
          classNames={{
            base: "bg-slate-600",
          }}
        >
          <Button
            isIconOnly
            className="bg-inherit transition-colors hover:bg-slate-400/30 dark:hover:bg-slate-700"
            radius="full"
          >
            <Video />
          </Button>
        </Tooltip>
      </div>
    </header>
  )
}
