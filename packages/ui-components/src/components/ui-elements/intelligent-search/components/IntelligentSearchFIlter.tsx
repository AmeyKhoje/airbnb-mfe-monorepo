import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useContext, useEffect, useMemo, useRef, useState } from "react";
import { useOutsideClick } from "utility/hooks";
import IntelligentSearchContext from "src/context/IntelligentSearchContext";
import IntelligentSearchModal from "./IntelligentSearchModal";

const IntelligentSearchFilter = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | number[]>(0);

  const filterRef = useRef<HTMLDivElement | null>(null);

  const { searchElement, cancelTransform, isSearchOpen } = useContext(
    IntelligentSearchContext
  );

  // useOutsideClick(filterRef, () => {
  //   cancelTransform();
  // });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (searchElement) {
      const indexMap = {
        destination: 0,
        "check-in-out": [1, 0],
        guests: 2,
        none: 3,
      };
      setActiveIndex(indexMap[searchElement]);
    }
  }, [searchElement]);

  const isExpandSearch = useMemo(() => {
    return !!(typeof activeIndex === "number" ? activeIndex < 3 : true);
  }, [activeIndex]);

  const handleFilterSelect = (index: number | number[]) =>
    setActiveIndex(index);

  const activeClass =
    "rounded-[100rem] bg-white hover:bg-white shadow-[0_0.1rem_2rem_0_rgba(0,0,0,0.2)]";

  return (
    <div className="mt-[2rem] relative">
      <div
        ref={filterRef}
        className="flex items-stretch w-[130rem] bg-grey2 rounded-[100rem] "
      >
        <div
          onClick={() => handleFilterSelect(0)}
          className={`w-1/3 cursor-pointer py-[1rem] px-[4.5rem] flex justify-center flex-col hover:bg-grey3 rounded-[100rem] ${
            activeIndex === 0 ? activeClass : ""
          }`}
        >
          <p className="text-[1.7rem] font-[500] font-poppins">Where</p>
          <input
            type="text"
            className="border-[0] p-[0] outline-none bg-transparent text-[2rem] font-poppins w-full"
            placeholder="Search destinations"
          />
        </div>
        <div className="flex items-stretch w-1/3 ">
          <div
            onClick={() => handleFilterSelect([1, 0])}
            className={`w-1/2 cursor-pointer hover:bg-grey3 rounded-[100rem] py-[1rem] px-[4.5rem] flex justify-center flex-col ${
              typeof activeIndex === "object" &&
              activeIndex?.length &&
              activeIndex[0] === 1
                ? activeClass
                : ""
            }`}
          >
            <p className="text-[1.7rem] font-[500] font-poppins">Check in</p>
            <div>
              <p className="text-[2rem] font-poppins text-airbnbGrey">
                Add dates
              </p>
            </div>
          </div>
          <div
            onClick={() => handleFilterSelect([0, 1])}
            className={`w-1/2 cursor-pointer hover:bg-grey3 rounded-[100rem] py-[1rem] px-[4.5rem] flex justify-center flex-col ${
              typeof activeIndex === "object" &&
              activeIndex?.length &&
              activeIndex[1] === 1
                ? activeClass
                : ""
            }`}
          >
            <p className="text-[1.7rem] font-[500] font-poppins">Check out</p>
            <div>
              <p className="text-[2rem] font-poppins text-airbnbGrey">
                Add dates
              </p>
            </div>
          </div>
        </div>
        <div
          onClick={() => handleFilterSelect(2)}
          className={`w-1/3 cursor-pointer py-[1rem] px-[4.5rem] pr-[1.5rem] hover:bg-grey3 rounded-[100rem] flex items-stretch justify-between ${
            activeIndex === 2 ? activeClass : ""
          }`}
        >
          <div className="flex justify-center flex-col">
            <p className="text-[1.7rem] font-[500] font-poppins text-black">
              Who
            </p>
            <div>
              <p className="text-[2rem] font-poppins text-airbnbGrey">
                Add guests
              </p>
            </div>
          </div>
          <div>
            <button className="w-auto flex items-center bg-airbnbPink border-none rounded-[50rem] font-poppins font-[500] text-[2rem] text-white p-[2rem]">
              <MagnifyingGlassIcon
                color="white"
                width={"2.5rem"}
                height={"2.5rem"}
                strokeWidth={"0.4rem"}
              />
              {isExpandSearch && <span className="ml-[1rem]">{"Search"}</span>}
            </button>
          </div>
        </div>
      </div>
      <IntelligentSearchModal position="left" size="half" />
    </div>
  );
};

export default IntelligentSearchFilter;
