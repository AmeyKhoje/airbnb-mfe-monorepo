const IntelligentSearchFilter = () => {
  const activeClass = "rounded-[100rem] bg-white hover:bg-white";
  return (
    <div className="mt-[2rem]">
      <div className="flex items-stretch w-[130rem] bg-grey2 rounded-[100rem] shadow-[0_0.1rem_2rem_0_rgba(0,0,0,0.2)]">
        <div
          className={`w-1/3 py-[2rem] px-[4.5rem] flex justify-center flex-col hover:bg-grey3 ${activeClass}`}
        >
          <p className="text-[1.7rem] font-[500] font-poppins">Where</p>
          <input
            type="text"
            className="border-[0] p-[0] outline-none bg-transparent text-[2rem] font-poppins w-full"
            placeholder="Search destinations"
          />
        </div>
        <div className="flex items-stretch w-1/3 ">
          <div className="w-1/2 hover:bg-grey3 rounded-[100rem] py-[1.5rem] px-[4.5rem] flex justify-center flex-col">
            <p className="text-[1.7rem] font-[500] font-poppins">Check in</p>
            <div>
              <p className="text-[2rem] font-poppins text-airbnbGrey">
                Add dates
              </p>
            </div>
          </div>
          <div className="w-1/2 hover:bg-grey3 rounded-[100rem] py-[1.5rem] px-[4.5rem] flex justify-center flex-col">
            <p className="text-[1.7rem] font-[500] font-poppins">Check out</p>
            <div>
              <p className="text-[2rem] font-poppins text-airbnbGrey">
                Add dates
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/3 py-[2rem] px-[4.5rem] hover:bg-grey3 rounded-[100rem] flex items-stretch">
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
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default IntelligentSearchFilter;
