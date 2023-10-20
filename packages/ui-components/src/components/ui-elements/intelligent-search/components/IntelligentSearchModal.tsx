import { useEffect } from "react";
import Region from "./modal-content/Region";
import PerfectScrollbar from "perfect-scrollbar";
import DateRange from "./modal-content/DateRange";

type SelfProps = {
  position: "left" | "right" | "center";
  size: "full" | "half";
  activeIndex: number | number[];
};

const IntelligentSearchModal = ({
  position,
  size = "half",
  activeIndex,
}: SelfProps) => {
  const renderContent = (index: number | number[]) => {
    if (typeof index === "number") {
      if (index === 0) {
        return <Region />;
      }
      if (index === 2) {
        return <>Null</>;
      }
    } else {
      return <DateRange />;
    }
  };
  return (
    <div className="absolute w-full min-h-[10rem] h-[calc(100vh-25rem)] top-[10rem]">
      <div
        className={`bg-white px-[4rem] py-[5rem] rounded-[4rem] h-[calc(100vh-25rem-2rem)] overflow-y-auto relative ${
          size === "full" ? "w-full" : size === "half" ? "w-1/2" : ""
        } ${
          position === "left"
            ? "mr-auto"
            : position === "right"
            ? "ml-auto"
            : ""
        }`}
      >
        {renderContent(activeIndex)}
      </div>
    </div>
  );
};

export default IntelligentSearchModal;
