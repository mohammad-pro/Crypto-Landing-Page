import React from "react";
const FeaturesCard = ({
  image,
  head,
  title1,
  title2,
  titlt3,
  width,
  height,
}) => {
  return (
    <div className="flex flex-col  w-full md:w-fit items-center md:items-start mb-12 lg:mb-0">
      <img
        className={`w-${width} h-${height} mb-8`}
        src={image}
        alt="feature"
      />
      <div className="flex flex-col gap-y-4 items-center md:items-start">
        <h1 className="font-bold text-lg md:text-2xl  ">{head}</h1>
        <span>{title1}</span>
        <span>{title2}</span>
        <span>{titlt3}</span>
      </div>
    </div>
  );
};

export default FeaturesCard;
