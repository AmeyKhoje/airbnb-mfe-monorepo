import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const IntelligentSearchUI = () => {
  return (
    <div className="w-[47rem] flex items-center rounded-[20rem] shadow-[0_0.3rem_0.8rem_0_rgba(0,0,0,0.1)] border-[0.1rem] border-[rgba(0,0,0,0.1)] px-[1.7rem] py-[1.3rem]">
      <div className="flex items-stretch h-full w-[calc(100%-5rem)]">
        <div className="w-1/3 border-r-[rgba(0,0,0,0.2)] border-r-[0.1rem] flex items-center justify-center">
          <p className="text-[2rem] font-[500] text-center font-poppins">
            Anywhere
          </p>
        </div>
        <div className="w-1/3 border-r-[rgba(0,0,0,0.2)] border-r-[0.1rem] flex items-center justify-center">
          <p className="text-[2rem] font-[500] text-center font-poppins">
            Any week
          </p>
        </div>
        <div className="w-1/3 flex items-center justify-center">
          <p className="text-[2rem] font-[400] text-center font-poppins">
            Add guests
          </p>
        </div>
      </div>
      <div className="w-[5rem] flex justify-end items-center">
        <div className="bg-airbnbRed w-[4rem] h-[4rem] flex items-center justify-center rounded-[10rem]">
          <MagnifyingGlassIcon
            fill="transparent"
            stroke="#ffffff"
            strokeWidth={"0.5rem"}
            width={"2rem"}
            height={"2rem"}
          />
        </div>
      </div>
    </div>
  );
};

export default IntelligentSearchUI;
