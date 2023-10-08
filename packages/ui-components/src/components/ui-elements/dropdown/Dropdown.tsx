import Popper from "src/components/bare/popper";
import DropdownList from "./DropdownList";

type SelfProps = {
  trigger: any;
  lists: any[];
};

const Dropdown = ({ lists, trigger }: SelfProps) => {
  return (
    <div className="w-auto">
      <Popper
        trigger={trigger}
        content={<DropdownList lists={lists} />}
        behavior="dropdown"
      />
    </div>
  );
};

export default Dropdown;
