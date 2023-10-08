type SelfProps = {
  lists: any[];
};

const DropdownList = ({ lists }: SelfProps) => {
  return (
    <div className="w-[25rem] bg-white shadow-[0_0_0.8rem_0_rgba(0,0,0,0.1)] rounded-[0.8rem]">
      {lists.length &&
        lists.map((list: any[]) => {
          return (
            <ul
              className={`list-none py-[1rem] ${
                lists.length > 1
                  ? "border-b-[0.1rem] border-b-[rgba(0,0,0,0.2)] last:border-b-[0]"
                  : ""
              }`}
            >
              {list.map((item: any) => {
                return (
                  <li className="text-[1.8rem] font-poppins px-[1.5rem] py-[1rem] hover:bg-grey1 cursor-pointer">
                    {item.title}
                  </li>
                );
              })}
            </ul>
          );
        })}
    </div>
  );
};

export default DropdownList;
