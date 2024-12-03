import React from 'react'
import clsx from "clsx"
interface ICardProps {
    children : JSX.Element[] | JSX.Element | any,
    className?: string
}

const Card = ({children, className}: ICardProps) => {
  return (
    <div className={clsx(
      'bg-white relative border h-fit', className
    )}>{children}</div>
  )
}

export default Card