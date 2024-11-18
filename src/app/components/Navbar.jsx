import React from "react";
import Logo from "../public/logo-light-mode.png";
import Link from "next/link";
import Image from "next/image";
import NavItem from "./NavItem";
const Navbar = () => {
  return (
    <>
      <div className="flex justify-around items-center list-none space-x-[50px]">
        <Link href={"/"}>
          <Image
            width={400}
            height={400}
            alt="Nordic triskelion or valknut surrounded by a serpent chasing it's own tail."
            src={Logo}
            className="flex justify-start rounded-lg m-2"
          />{" "}
        </Link>
        <h1 className="flex items-center justify-evenly text-2xl font-light italic w-full">
          Noble_9 Digital Solutions
        </h1>

        <NavItem />
      </div>
    </>
  );
};

export default Navbar;
