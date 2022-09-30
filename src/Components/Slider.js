import React from "react";
import coin from "../Assets/Images/sliderMoney.svg";

const Slider = () => {
  return (
    <div className="container mx-auto max-w-lg md:max-w-screen-xl">
      <div className="flex justify-center md:justify-between px-4 items-start mt-12 md:mt-[121px]  ">
        
        <div className="flex flex-col items-center md:items-start  text-center md:text-start  text-white md:w-1/2 lg:w-3/5">
          <h1 className="md:text-4xl lg:text-6xl font-bold text-2xl ">
            Make better businees with Cryptocurrency
          </h1>
          <p className="pt-3">
            We offers users a fully operational long-term rental platform. It
            plans to leverages blockchain technology.
          </p>
          <button className="bg-[#EB5757] rounded-full mt-8 px-5 py-2 hover:shadow-lg">
            Get Whitelisted
          </button>
        </div>

        <div className="hidden md:w-1/2 md:block lg:w-2/5">
          <img src={coin} className="w-full h-auto" alt="coin"/>
        </div>
      </div>
    </div>
  );
};

export default Slider;
