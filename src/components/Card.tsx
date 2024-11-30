import React from 'react'

interface ICardProps {
    children : JSX.Element[] | JSX.Element | any
}

const Card = ({children}: ICardProps) => {
  return (
    <div className='bg-white relative border'>{children}</div>
  )
}

export default Card