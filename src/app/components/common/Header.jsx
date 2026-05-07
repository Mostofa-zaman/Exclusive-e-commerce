import React from "react";
import Container from "./Container";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full bg-black py-2 sm:py-3">
      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-1 lg:gap-2 text-center px-3">
          
          {/* OFFER TEXT */}
          <p className="text-white font-normal leading-relaxed
            text-[10px]
            xs:text-[11px]
            sm:text-[12px]
            md:text-sm
            lg:text-base
            break-words"
          >
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>

          {/* SHOP NOW LINK */}
          <Link
            href="/product"
            className="text-white underline font-semibold whitespace-nowrap
              text-[10px]
              xs:text-[11px]
              sm:text-[12px]
              md:text-sm
              lg:text-base
              hover:text-gray-300
              transition-all duration-300"
          >
            Shop Now
          </Link>
        </div>
      </Container>
    </header>
  );
};

export default Header;