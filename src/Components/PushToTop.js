import React, { useState } from "react";

const PushToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      setShowTopBtn(true);
    } else {
      setShowTopBtn(false);
    }
  });

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {showTopBtn && (
        <div
          onClick={() => {
            goToTop();
          }}
          className="w-10 h-10 rounded-full bg-white  right-6 bottom-5 fixed flex justify-center items-center z-50 shadow-lg cursor-pointer  animate-vote"
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
              />
            </svg>
          </span>
        </div>
      )}
    </div>
  );
};

export default PushToTop;
