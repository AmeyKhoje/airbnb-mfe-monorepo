import {
  Bars3Icon,
  GlobeAltIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { useRef, useState } from "react";
import { useOutsideClick } from "utility/hooks";
import Popper from "src/components/bare/popper";
import Button from "src/components/form-elements/button";
import LogoSvg from "src/components/minis/LogoSvg";
import Dropdown from "src/components/ui-elements/dropdown";
import IntelligentSearch from "src/components/ui-elements/intelligent-search";
import TailwindProvider from "src/hoc/TailwindProvider";

const TopBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const topBarRef = useRef<HTMLDivElement>(null);
  const handleChange = (isOpen: boolean) => {
    setIsOpen(!!isOpen);
  };
  useOutsideClick(topBarRef, () => {});
  return (
    <>
      <div
        ref={topBarRef}
        className="fixed top-0 left-0 w-full h-[12rem] bg-white pl-20 pr-2pl-20 pt-12 pb-1pt-12 z-50"
      >
        <div className="flex items-center w-full">
          <div className="w-[25%]">
            <LogoSvg primary width={15} />
          </div>
          <div className={`w-[50%] flex justify-center items-center`}>
            <IntelligentSearch
              handleChange={handleChange}
              topBarRef={topBarRef}
            />
          </div>
          <div className="w-[25%]">
            <div className="flex items-center">
              <div className="mr-[1rem]">
                <Button
                  title={"Airbnb your home"}
                  rounded={"corners_rounded"}
                />
              </div>
              <div className="mr-[1rem]">
                <Button
                  onlyIcon
                  icon={<GlobeAltIcon width={"2.6rem"} height={"2.6rem"} />}
                  rounded={"full"}
                />
              </div>
              <div>
                <Dropdown
                  trigger={
                    <div className="rounded-[50rem] border-[0.1rem] flex items-center p-[0.5rem] hover:shadow-[0_0.5rem_0.6rem_0_rgba(0,0,0,0.2)]">
                      <Bars3Icon width={"3rem"} height={"3rem"} />
                      <UserCircleIcon
                        className="ml-[1rem]"
                        width={"3rem"}
                        height={"3rem"}
                        fill="#e5e5e5"
                      />
                    </div>
                  }
                  lists={[
                    [{ title: "Sign up" }, { title: "Log in" }],
                    [{ title: "Airbnb your home" }, { title: "Help Center" }],
                  ]}
                />
                {/* <Popper
                behavior="dropdown"
                trigger={<Button />}
                content={"Hey Amey"}
              /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.2)] z-0"></div>
      )}
    </>
  );
};

export default TailwindProvider(TopBar);
