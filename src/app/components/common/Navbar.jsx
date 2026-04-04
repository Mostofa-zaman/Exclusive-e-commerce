import React from "react";
import Container from "./Container";
import { menuItems } from "../../helpers/ProjectArrays";
import allIcon from "../../helpers/IconProvider";

const Navbar = () => {
  const { navIcon, searchIcon } = allIcon;

  return (
    <nav className="pt-10 pb-4  border-b">
      <Container>
        <div className="flex items-center justify-between">
          <h6 className="text-xl font-bold">Exclusive</h6>

          {/* Menu Items */}
          <ul className="flex items-center gap-x-12">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className="relative cursor-pointer py-[2px] overflow-hidden after:absolute after:content-[''] after:h-[2px] after:w-full after:bg-gray-300 after:bottom-0 after:-left-full hover:after:left-0 after:transition-all after:duration-300 after:ease-in-out"
              >
                {item.name}
              </li>
            ))}
          </ul>

          {/* Search + Icons */}
          <div className="flex items-center gap-x-7">
            {/* Search Box */}
            <div className="relative w-[260px]">
              <input
                type="text"
                placeholder="Search..."
                className="w-full py-2 px-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-black transition duration-300">
                {searchIcon}
              </button>
            </div>

            {/* Icons */}
            <ul className="flex gap-x-4">
              {navIcon.map((item) => (
                <li
                  key={item.id}
                  className="relative cursor-pointer p-3 rounded-full hover:bg-gray-200 transition duration-300 ease-in-out text-xl flex items-center justify-center"
                >
                  {item.icon}
                  {item.to === "/addtocart" && (
                    <span className="absolute top-0 right-0 text-xs bg-black text-white rounded-full h-5 w-5 flex items-center justify-center">
                      2
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;