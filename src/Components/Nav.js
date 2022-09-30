import Hamburger from "hamburger-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/Images/logo.png";

const Nav = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      {/* Mobile Navbar */}
      <div className="px-4 flex justify-between items-center pt-10  md:hidden">
        <Link to="/">
          <span className="flex items-center">
            <img src={logo} alt="logo" />
            <h1 className="text-xl font-bold text-white">Cryptous</h1>
          </span>
        </Link>

        {/* <span
          className="cursor-pointer"
          onClick={() => {
            setShowMenu((prevValue) => !prevValue);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#FFFFFF"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#FFFFFF"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </span> */}
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          color="#FFFFFF"
          size={24}
        />
      </div>
      <div className="md:hidden">
        <div
          className={
            "bg-[#FFF6FB] rounded-md mt-6 " + (isOpen ? "block" : "hidden")
          }
        >
          <ul className="text-start px-4 text-[#1B004E]">
            <Link to="home">
              <li className="py-4 mb-3 font-bold"> Home</li>
            </Link>

            <Link to="company">
              <li className="py-4 mb-3 font-bold">Company</li>
            </Link>

            <Link to="about">
              <li className="py-4 mb-3 font-bold">About</li>
            </Link>

            <Link to="pricing">
              <li className="py-4 mb-3 font-bold">Pricing</li>
            </Link>

            <Link to="team">
              <li className="py-4 mb-3 font-bold">Team</li>
            </Link>

            <Link to="contact">
              <li className="py-4 mb-3 font-bold">Contact</li>
            </Link>

            <Link to="blog">
              <li className="py-4 mb-3 font-bold">Blog</li>
            </Link>
          </ul>
        </div>
      </div>

      {/* Desktop Navbar */}
      <div className="px-4 hidden md:block container mx-auto max-w-screen-xl  pt-8">
        <div className=" flex items-center justify-between">
          <Link to="/">
            <span className="flex items-centerr">
              <img src={logo} alt="logo" />
              <h1 className="text-xl font-bold text-white">Cryptous</h1>
            </span>
          </Link>

          <ul className="flex text-base text-white gap-x-3">
            <Link to="home">
              <li className="hover:text-[#EB5757] transition-all duration-150">
                <span>Home</span>
              </li>{" "}
            </Link>

            <Link to="company">
              <li className="hover:text-[#EB5757] transition-all duration-150">
                <span>Company</span>
              </li>{" "}
            </Link>

            <Link to="about">
              <li className="hover:text-[#EB5757] transition-all duration-150">
                <span>About</span>
              </li>{" "}
            </Link>

            <Link to="pricing">
              <li className="hover:text-[#EB5757] transition-all duration-150">
                <span>Pricing</span>
              </li>{" "}
            </Link>

            <Link to="team">
              <li className="hover:text-[#EB5757] transition-all duration-150">
                <span>Team</span>
              </li>{" "}
            </Link>

            <Link to="contact">
              <li className="hover:text-[#EB5757] transition-all duration-150">
                <span>Contact</span>
              </li>{" "}
            </Link>

            <Link to="blog">
              <li className="hover:text-[#EB5757] transition-all duration-150">
                <span>Blog</span>
              </li>{" "}
            </Link>
          </ul>

          <Link to="htrader">
            {" "}
            <button className="bg-transparent ring-3 hover:bg-[#EB5757] transition-all duration-150 rounded-full text-white px-7 py-2 border-2 border-[#EB5757]">
              Trade Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
