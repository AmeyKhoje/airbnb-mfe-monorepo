import { useContext, useEffect, useState } from "react";
import IntelligentSearchContext from "src/context/IntelligentSearchContext";

const IntelligentSearchTabs = () => {
  const { handleTravelTypeIndexChange, travelTypeIndex } = useContext(
    IntelligentSearchContext
  );
  const activeClass = "border-b-[0.4rem] border-b-black";

  const handleTabClick = (value: number) => handleTravelTypeIndexChange(value);

  return (
    <div className="w-max flex items-center justify-between mx-auto">
      <div
        onClick={() => handleTabClick(0)}
        className={`cursor-pointer py-[2rem] mr-[4rem] h-[6rem] w-max hover:border-b-[0.4rem] hover:border-b-[rgba(0,0,0,0.7)] hover:text-airbnbGrey text-black ${
          travelTypeIndex === 0 ? activeClass : ""
        }`}
      >
        <p className="text-[2rem] font-poppins transition-all">Stays</p>
      </div>
      <div
        onClick={() => handleTabClick(1)}
        className={`cursor-pointer py-[2rem] mr-[4rem] h-[6rem] w-max hover:border-b-[0.4rem] hover:border-b-[rgba(0,0,0,0.7)] hover:text-airbnbGrey text-black ${
          travelTypeIndex === 1 ? activeClass : ""
        }`}
      >
        <p className="text-[2rem] font-poppins transition-all">Experiences</p>
      </div>
      <div
        onClick={() => handleTabClick(2)}
        className={`cursor-pointer py-[2rem] h-[6rem] w-max hover:border-b-[0.4rem] hover:border-b-[rgba(0,0,0,0.7)] hover:text-airbnbGrey text-black ${
          travelTypeIndex === 2 ? activeClass : ""
        }`}
      >
        <p className="text-[2rem] font-poppins transition-all">
          Online Experiences
        </p>
      </div>
    </div>
  );
};

export default IntelligentSearchTabs;
