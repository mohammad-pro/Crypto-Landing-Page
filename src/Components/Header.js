import React from "react";
import Nav from "./Nav";
import Slider from "./Slider";

const Header = () => {
  return (
    <div className="bg-[rgb(27,0,78)] md:bg-gradient-to-r from-[#220076] to-[#4E0062]   ">
      <Nav />
      <Slider />
    </div>
  );
};

export default Header;
