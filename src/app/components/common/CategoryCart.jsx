import React from "react";

import allIcons from "../../helpers/IconProvider";

const CategoryCart = () => {
  const { categories } = allIcons;
  return (
    <div className="py-6 px-[52px] border border-[#0000004d] rounded-[4px] gap-y-4 flex flex-col items-center hover:bg-secondary2 hover:border-transparent group  transition duration-700 ease-in-out">
      <span className="text-[45px] group-hover:text-text group-hover:transition group-hover:duration-700 group-hover:ease-in-out">
        {categories[0].icon}
      </span>
      <p className="title16PXRegular group-hover:text-text text-text2 group-hover:transition group-hover:duration-700 group-hover:ease-in-out">
        {categories[0].name}
      </p>
    </div>
  );
};

export default CategoryCart;
