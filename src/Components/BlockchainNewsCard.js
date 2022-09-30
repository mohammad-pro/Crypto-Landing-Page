import React from "react";

const BlockchainNewsCard = ({ value }) => {
  const { img, title, url, source } = value;

  return (
    <>
      <a href={url} target="_blank">
        <div
          className="bg-[#FFFFFF] rounded-xl shadow-lg hover:shadow-xl transition-all duration-150 cursor-pointer overflow-hidden  "
          // onClick={() => {
          //   window.location.href = `${url}`;
          // }}
        >
          {/* Head */}

          <div className="bg-gray-200 h-52 w-full mb-6 ">
            <img
              className="object-cover w-full h-full "
              src={img}
              alt="newsImage"
            />
          </div>

          <div className="w-full px-5 text-start">
            <div className="flex flex-col ">
              <div className="mb-7">
                <p className="font-bold  text-sm sm:text-base line-clamp-2 ">
                  {title}
                </p>
              </div>

              <div className="flex text-[#616161] justify-between mb-6">
                <div className="flex items-center ">
                  <span className="mr-1">
                    <svg
                      width="11"
                      height="10"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4m-8-2 8-8m0 0v5m0-5h-5"
                      />
                    </svg>
                  </span>

                  <span className="text-xs">{source}</span>
                </div>
                {/* <div className="flex items-center ">
                <span className="mr-1">
                  <svg
                    width="11"
                    height="10"
                    viewBox="0 0 11 10"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5.0979 10C4.109 10 3.1423 9.70676 2.32005 9.15735C1.49781 8.60794 0.856943 7.82705 0.478505 6.91342C0.100067 5.99979 0.00105016 4.99445 0.193976 4.02455C0.386902 3.05465 0.863106 2.16373 1.56237 1.46447C2.26163 0.765206 3.15255 0.289002 4.12245 0.0960758C5.09236 -0.0968502 6.09769 0.00216642 7.01132 0.380604C7.92495 0.759043 8.70584 1.3999 9.25525 2.22215C9.80466 3.0444 10.0979 4.0111 10.0979 5C10.0979 6.32608 9.57112 7.59785 8.63343 8.53553C7.69575 9.47322 6.42398 10 5.0979 10ZM5.0979 0.714288C4.25027 0.714288 3.42167 0.96564 2.71689 1.43656C2.0121 1.90748 1.46279 2.57682 1.13842 3.35993C0.814043 4.14304 0.729172 5.00476 0.894537 5.8361C1.0599 6.66745 1.46808 7.43109 2.06744 8.03046C2.66681 8.62983 3.43045 9.038 4.2618 9.20337C5.09315 9.36873 5.95486 9.28386 6.73797 8.95948C7.52108 8.63511 8.19042 8.0858 8.66134 7.38102C9.13226 6.67623 9.38361 5.84764 9.38361 5C9.38361 3.86336 8.93209 2.77327 8.12836 1.96954C7.32463 1.16582 6.23454 0.714288 5.0979 0.714288Z" />
                    <path d="M6.73715 7.14279L4.74072 5.14636V1.78564H5.45501V4.84993L7.24072 6.63922L6.73715 7.14279Z" />
                  </svg>
                </span>
                <span className="text-xs">2022,5,28</span>
              </div> */}
              </div>
            </div>
          </div>
        </div>
      </a>
    </>
  );
};

export default BlockchainNewsCard;
