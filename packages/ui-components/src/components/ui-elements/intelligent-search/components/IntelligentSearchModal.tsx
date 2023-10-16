import { useEffect } from "react";
import Region from "./modal-content/Region";
import PerfectScrollbar from "perfect-scrollbar";

type SelfProps = {
  position: "left" | "right" | "center";
  size: "full" | "half";
};

const IntelligentSearchModal = ({ position, size = "half" }: SelfProps) => {
  useEffect(() => {
    const container = document.querySelector("#intelligent-modal");
    if (container) {
      var scroll = new PerfectScrollbar(container);
      scroll.update();
    }
    return () => scroll.destroy();
  }, []);
  return (
    <div className="absolute w-full min-h-[10rem] h-[calc(100vh-25rem)] top-[10rem]">
      <div
        id="intelligent-modal"
        className={`bg-white px-[4rem] py-[5rem] rounded-[4rem] h-[calc(100vh-25rem-2rem)] overflow-hidden relative ${
          size === "full" ? "w-full" : size === "half" ? "w-1/2" : ""
        }`}
      >
        <Region />
      </div>
    </div>
  );
};

export default IntelligentSearchModal;
