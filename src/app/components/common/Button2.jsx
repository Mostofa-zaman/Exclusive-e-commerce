import React from "react";

const Button2 = ({ children }) => {
  return (
    <button className='px-[46px] w-fit py-[10px] overflow-hidden   hover:text-white text-secondary2 text-[16px] font-semibold   rounded-[4px]  transition-all duration-700 ease-in-out  relative after:absolute after:top-0 after:left-0  after:w-[16px] after:h-full after:content-[""] after:bg-[#DB4444] hover:after:w-full  after:transition-all after:duration-700 after:ease-in-out after:z-[-1] z-10 '>
      {children}
    </button>
  );
};

export default Button2;
