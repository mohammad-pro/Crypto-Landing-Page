import React from "react";

const ButtonApplication = ({ show }) => {
  return (
    <div
      className={
        "flex gap-x-5 " +
        (show === "button" ? "md:hidden" : "hidden md:flex mt-12")
      }
    >
      <a href="https://www.apple.com/app-store/" target="_blank">
        <div className="flex   bg-[#D7C2FF] rounded-lg text-[rgb(27,0,78)] items-center py-1 px- ">
          <span className="h-10 sm:h-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-full"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
              />
            </svg>
          </span>

          <div className="flex flex-col items-start justify-center mr-2 ">
            <h1 className="font-semibold  text-[9px] sm:text-sm !leading-none">
              Available on the
            </h1>
            <h1 className="font-bold sm:text-2xl !leading-none ">App store</h1>
          </div>
        </div>
      </a>

      <a href="https://play.google.com/" target="_blank">
        <div className="flex bg-[#D7C2FF] rounded-lg text-[rgb(27,0,78)] justify-center items-center py-1 px-2 ">
          <span className="h-10 flex items-center sm:h-12">
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
              fill="currentColor"
            >
              <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
            </svg>
          </span>
          <div className="flex flex-col items-start justify-center ">
            <h1 className="font-semibold text-[9px] sm:text-sm !leading-none ">
              adnroid app on
            </h1>
            <h1 className="font-bold sm:text-2xl !leading-none ">
              Google Play
            </h1>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ButtonApplication;
