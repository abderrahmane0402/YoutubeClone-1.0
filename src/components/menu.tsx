import { Avatar } from "@nextui-org/avatar"
import { Button } from "@nextui-org/button"
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
} from "@nextui-org/dropdown"
import { Link } from "@nextui-org/react"
import {
  Bell,
  ChevronRight,
  DollarSign,
  HardDrive,
  HelpCircle,
  LogOut,
  MessageSquare,
  PlayCircle,
  Settings,
  User,
  User2,
  Users,
  Video,
} from "lucide-react"
import NextLink from "next/link"
import Tooltip from "@/ui/tooltip"

const Menu = () => {
  return (
    <div className="flex w-60 flex-row-reverse items-center gap-3 px-4">
      <Dropdown placement="left-start" >
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
        <DropdownMenu
          aria-label="Profile Actions"
          variant="shadow"
          className="max-h-[95vh] overflow-auto"
          itemClasses={{
            base: [
              "dark:data-[hover=true]:outline-2",
              "dark:data-[hover=true]:outline-blue-600",
              "mb-2",
            ],
          }}
        >
          <DropdownSection title={"account"} showDivider>
            <DropdownItem isReadOnly key="profile" className="group flex w-72">
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
          <DropdownSection title="channel" showDivider>
            <DropdownItem key={"yourChannel"} startContent={<User2 />}>
              Your channel
            </DropdownItem>
            <DropdownItem key={"Ystudio"} startContent={<PlayCircle />}>
              Youtube studio
            </DropdownItem>
            <DropdownItem isReadOnly key={"Aswitch"}>
              <Dropdown
                placement="left"
                showArrow
                offset={25}
                classNames={{
                  arrow: "bg-blue-500",
                }}
                backdrop="opaque"
              >
                <DropdownTrigger>
                  <div className="flex flex-grow">
                    <div className="flex flex-grow items-center gap-2">
                      <Users />
                      Switch account
                    </div>
                    <ChevronRight />
                  </div>
                </DropdownTrigger>
                <DropdownMenu>
                  <DropdownItem key={"yourChannel"} startContent={<User2 />}>
                    Your channel
                  </DropdownItem>
                  <DropdownItem key={"Ystudio"} startContent={<PlayCircle />}>
                    Youtube studio
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </DropdownItem>
            <DropdownItem key={"SignOut"} startContent={<LogOut />}>
              Sign out
            </DropdownItem>
          </DropdownSection>
          <DropdownSection title={"purchase"} showDivider>
            <DropdownItem key={"PM"} startContent={<DollarSign />}>
              Purchases and memberships
            </DropdownItem>
            <DropdownItem key={"Ydata"} startContent={<HardDrive />}>
              Your data in Youtube
            </DropdownItem>
          </DropdownSection>
          <DropdownSection title={"General Settings"} showDivider>
            <DropdownItem key={"theme"} isReadOnly>
              <Dropdown
                placement="left"
                showArrow
                offset={25}
                classNames={{
                  arrow: "bg-blue-500",
                }}
                backdrop="opaque"
              >
                <DropdownTrigger>
                  <div className="flex flex-grow">
                    <div className="flex flex-grow items-center gap-2">
                      <Users />
                      Switch account
                    </div>
                    <ChevronRight />
                  </div>
                </DropdownTrigger>
                <DropdownMenu>
                  <DropdownItem key={"yourChannel"} startContent={<User2 />}>
                    Your channel
                  </DropdownItem>
                  <DropdownItem key={"Ystudio"} startContent={<PlayCircle />}>
                    Youtube studio
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </DropdownItem>
            <DropdownItem key={"language"} isReadOnly>
              <Dropdown
                placement="left"
                showArrow
                offset={25}
                classNames={{
                  arrow: "bg-blue-500",
                }}
                backdrop="opaque"
              >
                <DropdownTrigger>
                  <div className="flex flex-grow">
                    <div className="flex flex-grow items-center gap-2">
                      <Users />
                      Switch account
                    </div>
                    <ChevronRight />
                  </div>
                </DropdownTrigger>
                <DropdownMenu>
                  <DropdownItem key={"yourChannel"} startContent={<User2 />}>
                    Your channel
                  </DropdownItem>
                  <DropdownItem key={"Ystudio"} startContent={<PlayCircle />}>
                    Youtube studio
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </DropdownItem>
            <DropdownItem key={"restrict mode"} isReadOnly>
              <Dropdown
                placement="left"
                showArrow
                offset={25}
                classNames={{
                  arrow: "bg-blue-500",
                }}
                backdrop="opaque"
              >
                <DropdownTrigger>
                  <div className="flex flex-grow">
                    <div className="flex flex-grow items-center gap-2">
                      <Users />
                      Switch account
                    </div>
                    <ChevronRight />
                  </div>
                </DropdownTrigger>
                <DropdownMenu>
                  <DropdownItem key={"yourChannel"} startContent={<User2 />}>
                    Your channel
                  </DropdownItem>
                  <DropdownItem key={"Ystudio"} startContent={<PlayCircle />}>
                    Youtube studio
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </DropdownItem>
            <DropdownItem key={"location"} isReadOnly>
              <Dropdown
                placement="left"
                showArrow
                offset={25}
                classNames={{
                  arrow: "bg-blue-500",
                }}
                backdrop="opaque"
              >
                <DropdownTrigger>
                  <div className="flex flex-grow">
                    <div className="flex flex-grow items-center gap-2">
                      <Users />
                      Switch account
                    </div>
                    <ChevronRight />
                  </div>
                </DropdownTrigger>
                <DropdownMenu>
                  <DropdownItem key={"yourChannel"} startContent={<User2 />}>
                    Your channel
                  </DropdownItem>
                  <DropdownItem key={"Ystudio"} startContent={<PlayCircle />}>
                    Youtube studio
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </DropdownItem>
          </DropdownSection>
          <DropdownSection showDivider>
            <DropdownItem startContent={<Settings />}>
              Settings
            </DropdownItem>
          </DropdownSection>
          <DropdownSection>
            <DropdownItem key={"help"} startContent={<HelpCircle />}>
              Help
            </DropdownItem>
            <DropdownItem key={"FeedBack"} startContent={<MessageSquare />}>
                Feedback
            </DropdownItem>
          </DropdownSection>
        </DropdownMenu>
      </Dropdown>

      <Tooltip content="Notifications">
        <Button
          isIconOnly
          className="bg-inherit transition-colors hover:bg-slate-400/30 dark:hover:bg-slate-700"
          radius="full"
        >
          <Bell />
        </Button>
      </Tooltip>
      <Tooltip content="Create">
        <Button
          isIconOnly
          className="bg-inherit transition-colors hover:bg-slate-400/30 dark:hover:bg-slate-700"
          radius="full"
        >
          <Video />
        </Button>
      </Tooltip>
    </div>
  )
}

export default Menu
