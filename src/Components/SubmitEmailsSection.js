import React, { useState } from "react";
import shape from "../Assets/Images/shape.svg";
import { validateEmail } from "../Functions/functions";

const SubmitEmailsSection = () => {
  const [touch, setTouch] = useState(false);
  const [email, setEmail] = useState();
  const [error, setError] = useState();
  const [clicked, setClicked] = useState(false);


  return (
    <div className="bg-[#1B004E] relative flex justify-center items-center">
      
      <img className="absolute -z-0 left-0 hidden md:block " src={shape} alt='shape' />

      <div className="container z-10 mx-auto max-w-lg md:max-w-screen-xl px-3 py-14 md:py-28  ">
        <div className="max-w-lg mx-auto ">
          {/* Header */}
          <div className="text-white mb-8 md:mb-12">
            <h1 className="font-bold text-2xl md:text-5xl">
              Never miss a drop
            </h1>
            <p className="text-sm md:text-2xl font-thin">
              Subscribe for the latest news, drops & collectibles
            </p>
          </div>
          {/* Input */}
          <div
            className={
              "rounded-full border-2 bg-[#1B004E] h-16 flex text-white p-1 " +
              (touch ? "border-[#EB5757]" : "border-white")
            }
          >
            <input
              type="email"
              className="bg-inherit rounded-full outline-none ml-3 w-[70%] "
              placeholder="Enter your email address "
              onFocus={() => {
                setTouch(true);
              }}
              onBlur={() => {
                setTouch(false);
              }}
              onChange={(event) => {
                setEmail(event.target.value);
                setError(validateEmail(event.target.value));
              }}
              onKeyDown={(event) => {
                if (event.code === "Enter") {
                  setClicked(true);
                  setTimeout(() => {
                    setClicked(false);
                  }, 3000);
                }
              }}
            />
            <div
              onClick={() => {
                setClicked(true);
                setTimeout(() => {
                  setClicked(false);
                }, 3000);
              }}
              className={
                "bg-[#EB5757] hover:bg-white hover:text-[#1B004E] rounded-full flex items-center justify-center w-[30%] cursor-pointer transition-all duration-100"
              }
            >
              Subscribe
            </div>
          </div>

          <h1 className={"text-white mt-3 transition-all duration-300 h-3 "}>
            {clicked && error.message}
          </h1>
        </div>
      </div>

      <img className="absolute -z-0 right-0 hidden md:block rotate-180" src={shape} alt='shape' />
    </div>
  );
};

export default SubmitEmailsSection;
