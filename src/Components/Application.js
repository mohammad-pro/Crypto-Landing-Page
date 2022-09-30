import React from "react";
import ButtonApplication from "./ButtonApplication";
import mobile from "../Assets/Images/mobile-app.svg";

const Application = () => {
  return (
    <div className="bg-[rgb(27,0,78)]">
      <div className="container mx-auto max-w-lg md:max-w-screen-xl px-3">
        <div className="flex flex-col md:flex-row md:justify-between py-14">

          <div className="flex flex-col text-center  md:text-start items-center md:justify-between md:flex-row">
            {/* Text */}
            <div className="text-white md:w-1/2 ">
              <h1 className="text-2xl font-bold ">
                Try the future, today.Download Crypto
              </h1>
              <p className="mt-3">
                Stay connected to the market with our mobile app. Featuring
                advanced order types and analytical tools for experienced
                traders, as well as a simple buy & sell interface for those just
                getting started.
              </p>
              <ButtonApplication show="right" />
            </div>
            {/* Image */}
            <div className="flex justify-center my-8 w-3/4 md:w-1/3">
              <img className="w-full " src={mobile} alt="mobile-application" />
            </div>
            {/* Button */}
            <ButtonApplication show="button" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Application;
