import React from "react";
import { useSelector } from "react-redux/";
import SingleCoins from "./SingleCoins";

import info from "../Assets/Images/info.svg";
import loading from "../Assets/Images/loading.svg";

const MarketUpdate = ({ update, count }) => {
  const state = useSelector((state) => state.getCo);
  const coinsState = useSelector((coinsState) => coinsState.getCo);

  return (
    <div className="bg-[rgb(27,0,78)] text-white px-3 min-h-[200px] ">
      <div className="container mx-auto max-w-screen-xl w-full pb-28">
        <div className="flex flex-col w-full relative ">

          {state.isLoading && count <= 10 ? (
            <div className="flex  justify-center items-center absolute w-full z-10 min-h-[200px]">
              <img src={loading} alt="loading" />
            </div>
          ) : state.error ? (
            <div className="flex  justify-center items-center absolute w-full z-10 min-h-[200px]">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-7 h-7 mr-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                  />
                </svg>
              </span>
              <h1 className="font-bold text-4xl">{state.error.message}</h1>
            </div>
          ) : (
            <>
              <h1 className="font-bold text-xl md:text-3xl my-14 ">
                Today's Cryptocurrency Prices
              </h1>
              {/* Table */}
              <table className="w-full relative">
                <thead>
                  <tr className="border-[#BDBDBD] border-t-[.6px] border-b-[.6px]">
                    <th
                      scope="col"
                      className="text-left py-3 px-3 hidden md:table-cell"
                    >
                      Rank
                    </th>
                    <th scope="col" className="text-left py-3">
                      Name
                    </th>
                    <th scope="col" className="text-right hidden md:table-cell">
                      Price
                    </th>
                    <th scope="col" className="text-right hidden md:table-cell">
                      24%
                    </th>
                    <th scope="col" className="text-right hidden md:table-cell">
                      <div className="flex items-center justify-end">
                        <img src={info} className="mr-2" alt="info" />
                        Marketcap
                      </div>
                    </th>
                    <th scope="col" className="text-right px-3">
                      Volume
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {state.coins.map(
                    (item) =>
                      item.market_cap_rank && (
                        <SingleCoins key={item.market_cap_rank} items={item} />
                      )
                  )}
                </tbody>
              </table>
              {/* Button Show More */}
              <div className="flex absolute -bottom-5 justify-center w-full ">
                <button
                  className={
                    "bg-[#EB5757] rounded-full mt-8 px-5 py-2 flex justify-between items-center"
                  }
                  onClick={() => {
                    update((perv) => perv + 10);
                  }}
                >
                  Show More
                  {coinsState.isLoading && (
                    <span className="w-6">
                      <img src={loading} alt="loading" />
                    </span>
                  )}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MarketUpdate;
