import { useEffect, useState } from "react";

type SelfProps = {
  handleChange: (arg: number) => void;
};

const IntelligentSearchTabs = ({ handleChange }: SelfProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeClass = "border-b-[0.4rem] border-b-black";

  const handleTabClick = (value: number) => setActiveIndex(value);

  useEffect(() => {
    handleChange(activeIndex);
  }, [activeIndex]);
  return (
    <div className="w-max flex items-center justify-between">
      <div
        onClick={() => handleTabClick(0)}
        className={`cursor-pointer py-[2rem] mr-[4rem] h-[6rem] w-max hover:border-b-[0.4rem] hover:border-b-[rgba(0,0,0,0.7)] hover:text-airbnbGrey text-black ${
          activeIndex === 0 ? activeClass : ""
        }`}
      >
        <p className="text-[2rem] font-poppins transition-all">Stays</p>
      </div>
      <div
        onClick={() => handleTabClick(1)}
        className={`cursor-pointer py-[2rem] mr-[4rem] h-[6rem] w-max hover:border-b-[0.4rem] hover:border-b-[rgba(0,0,0,0.7)] hover:text-airbnbGrey text-black ${
          activeIndex === 1 ? activeClass : ""
        }`}
      >
        <p className="text-[2rem] font-poppins transition-all">Experiences</p>
      </div>
      <div
        onClick={() => handleTabClick(2)}
        className={`cursor-pointer py-[2rem] h-[6rem] w-max hover:border-b-[0.4rem] hover:border-b-[rgba(0,0,0,0.7)] hover:text-airbnbGrey text-black ${
          activeIndex === 2 ? activeClass : ""
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
