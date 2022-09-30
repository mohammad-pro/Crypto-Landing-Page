import React from "react";
import money from "../Assets/Images/money.svg";
import phone from "../Assets/Images/mobile.svg";
import chart from "../Assets/Images/chart.svg";

import FeaturesCard from "./FeaturesCard";

const Features = () => {
  return (
    <div className="bg-[#FFF6FB]  py-24">
      <div className="container mx-auto max-w-screen-xl px-3">
        {/* Title */}
        <div className="mb-16">
          <h1 className="text-xl font-bold md:text-3xl">
            The most trusted cryptocurrency platform{" "}
          </h1>
        </div>
        {/* Body */}
        <div className="flex md:gap-x-3 flex-wrap items-center justify-between  lg:justify-between">
          <FeaturesCard
            width={65}
            height={69}
            image={money}
            head="Ease of Trading"
            title1="Intuitive interface"
            title2="Instant deposit options"
            titlt3="Cash out directly to your bank account"
          />
          <FeaturesCard
            width={65}
            height={69}
            image={phone}
            head="Institutional-grade Security"
            title1="98% of assets stored safely offline"
            title2="Highly encrypted personal data"
            titlt3="Whitelisting and transaction confirmations"
          />
          <FeaturesCard
            width={112}
            height={69}
            image={chart}
            head="Proven Reliability"
            title1="Exchanging bitcoin since 2011"
            title2="Industry-leading uptime"
            titlt3="24/7 dedicated support"
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
