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
        `outline-none border-none  bg-gradient-to-b from-[#2EAE7D]  to-[#134834] h-12 p-1 px-4 text-white w-fit flex items-center justify-center`,
        className
      )}>
        <span className='inline-block mr-2'>{icon}</span>
        {title}</button>
  )
}

export default Button