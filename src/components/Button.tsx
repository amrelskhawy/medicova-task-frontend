import React from 'react'
import clsx from "clsx"

interface IButton {
  title: string,
  className?: string,
  variant: "primary" | "secondary",
  icon?: any 
}

const Button = ({
  title,
  className,
  variant,
  icon
}: IButton) => {
  return (
    <button
      className={clsx(
        variant === "primary" && "bg-gradient-to-b from-[#2EAE7D] to-[#134834] text-white",
        variant === "secondary" && "border text-main",
        `outline-none  h-12 p-1 px-4  w-fit flex items-center justify-center`,
        className
      )}>
        <span className='inline-block mr-2'>{icon}</span>
        {title}</button>
  )
}

export default Button