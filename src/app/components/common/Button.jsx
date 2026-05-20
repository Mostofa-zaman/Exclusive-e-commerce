import React from 'react'

const Button = ({ onclick, children, className }) => {
  return (
    <button
      onClick={onclick}
      className={`
        cursor-pointer
        py-3 md:py-4
        px-6 md:px-12
        w-full md:w-auto
        rounded-[6px]
        text-white
        bg-[#DB4444]
        text-sm md:text-base
        ${className}
      `}
    >
      {children}
    </button>
  )
}

export default Button