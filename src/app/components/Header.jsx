import React from "react";

import NavBar from "./Navbar";
// import NavItem from "./NavItem"
const Header = () => {

  return (
    <>
      <div className=" flex  items-center border-4 border-b-red-100 bg-slate-200">
        <div>
          <NavBar />
        </div>
      </div>
    </>
  );
};

export default Header;
