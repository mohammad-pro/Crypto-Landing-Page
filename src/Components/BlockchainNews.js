import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/";
import BlockchainNewsCard from "./BlockchainNewsCard";
import { fetchEvent } from "../Redux/EventCoins/getEventAction";

import loading from "../Assets/Images/loading2.svg";

const BlockchainNews = () => {
  const dispath = useDispatch();

  useEffect(() => {
    dispath(fetchEvent());
  }, []);

  const state = useSelector((state) => state.getEv);

  return (
    <div className="bg-[#FFF6FB]">
      <div className="container mx-auto max-w-lg md:max-w-screen-xl px-3 py-28">
        {/* Title */}

        {/* Body */}
        {state.isLoading ? (
          <div className=" col-start-2 col-end-3 rounded-3xl flex justify-center">
            <img src={loading} alt="loading" />
          </div>
        ) : state.error ? (
          <div className=" col-start-2 col-end-3 rounded-3xl flex items-center justify-center">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                class="w-7 h-7 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                />
              </svg>
            </span>
            <h1 className="font-bold text-4xl">{state.error.message}</h1>
          </div>
        ) : (
          <>
            <h1 className="font-bold text-3xl mb-11">Learn to thrive</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
              {state.data &&
                state.data.slice(0, 3).map((item) => {
                  return <BlockchainNewsCard key={item.id} value={item} />;
                })}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default BlockchainNews;
