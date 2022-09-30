import React from "react";
import { intSeparator } from "../Functions/functions";

const SingleCoins = ({ items }) => {
  const {
    market_cap_rank: rank,
    name,
    current_price: currentPrice,
    price_change_percentage_24h: priceChange,
    market_cap: marketCap,
    total_volume: totalVoume,
    image,
  } = items;

  return (
    <tr className="border-[#BDBDBD] border-b-[.6px]  border-opacity-30 ">
      {/* Rank */}
      <td className="text-left py-6 hidden md:table-cell">
        <div className="flex items-center">
          <span className="mr-3 ">
            <svg
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.79468 0.366577L4.79468 4.36658L0.794678 4.86658L3.54801 7.94658L2.79468 12.3666L6.79468 10.3666L10.7947 12.3666L10.048 7.94658L12.7947 4.86658L8.79468 4.36658L6.79468 0.366577ZM6.79468 1.85991L8.35468 4.98658L11.4547 5.37324L9.33468 7.74658L9.91468 11.1799L6.79468 9.61991L3.67468 11.1799L4.25468 7.74658L2.13468 5.37324L5.23468 4.98658L6.79468 1.85991Z"
                fill="#BDBDBD"
              />
            </svg>
          </span>
          <span> {rank}</span>
        </div>
      </td>
      {/* Name */}
      <td className="text-left py-6">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-white rounded-full flex justify-center items-center mr-3">
            <img className="w-6 h-6 " src={image} alt="coinImage"/>
          </div>
          <span> {name}</span>
        </div>
      </td>
      {/* Price */}
      <td className="text-right hidden md:table-cell">${currentPrice}</td>
      {/* 24% */}
      <td className="text-right hidden md:table-cell">
        <div
          className={
            "flex justify-end items-center " +
            (Math.sign(priceChange) === -1 ? "text-red-600" : "text-green-500")
          }
        >
          <span>
            <svg
              viewBox="0 0 7 7"
              fill="currentColor"
              className={
                "w-2 mr-2 " +
                (Math.sign(priceChange) === -1 ? "rotate-180" : "")
              }
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3.25548 0.366577L0.0480957 6.36658H6.46286L3.25548 0.366577Z" />
            </svg>
          </span>
          {priceChange}
        </div>
      </td>
        {/* MarketCap */}
      <td className="text-right hidden md:table-cell">
        ${intSeparator(marketCap)}
      </td>
        {/* Volume */}
      <td className="text-right">${intSeparator(totalVoume)} </td>
    </tr>
  );
};

export default SingleCoins;
