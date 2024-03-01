import React, { ReactNode } from "react"
import { twMerge } from "tailwind-merge"
interface BoxProps {
    children:React.ReactNode,
    className?:string
}
export const Box:React.FC<BoxProps> = ({children,className}) => {
  return (
    <div className={twMerge(`rounded-lg h-fit w-full bg-neutral-900`,className)}>{children}</div>
  )
}
