import React from "react"
import { Tooltip as Tool, TooltipPlacement } from "@nextui-org/tooltip"

const Tooltip = ({
  children,
  content,
  placement,
}: {
  children: React.ReactNode
  content: string
  placement?: TooltipPlacement
}) => {
  return (
    <Tool
      placement={placement}
      content={content}
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
      {children}
    </Tool>
  )
}

export default Tooltip
