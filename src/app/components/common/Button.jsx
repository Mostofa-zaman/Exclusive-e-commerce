import React from 'react'

const Button = ({onclick,children,className}) => {
  return (
    <button onClick={onclick} className={` cursor-pointer py-4 px-12 w-full rounded-[6px] text-text bg-button2  ${className}`}>{children}</button>
  )
}

export default Button