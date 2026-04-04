import React from "react";
import Container from "../../common/Container";
import { category } from "../../../../../data/data";
import { allIcon } from "../../../helpers/IconProvider";

const Banner = () => {

  return (
    <div className="pb-20">
      <Container>
        <div className="flex  items-stretch   ">
          {/* left part */}
          <div className="w-[20%] h-[517px] border-r-[1.5px]  border-[#0000007b] ">
            <ul className="pt-8">
              {category?.map((items) => (
                <div className="flex justify-between hover:bg-gray-200 transition-all items-center pr-5">
                  <li className="title14PXRegular py-4 cursor-pointer hover:px-5 transition-all">
                    {items.category}
                  </li>
                  <span> {allIcon.righiangle} </span>
                </div>
              ))}
            </ul>
          </div>
          {/* right part */}
        
        </div>
      </Container>
    </div>
  );
};

export default Banner;
