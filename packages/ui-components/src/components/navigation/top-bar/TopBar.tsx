import { GlobeAltIcon } from "@heroicons/react/24/outline";
import Button from "src/components/form-elements/button";
import LogoSvg from "src/components/minis/LogoSvg";
import TailwindProvider from "src/hoc/TailwindProvider";

const TopBar = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-32 bg-white pl-20 pr-2pl-20 pt-12 pb-1pt-12">
      <div className="flex items-center w-full">
        <div className="w-[25%]">
          <LogoSvg primary width={15} />
        </div>
        <div className="w-[50%]"></div>
        <div className="w-[25%]">
          <div className="flex items-center">
            <div className="mr-1">
              <Button title={"Airbnb your home"} rounded={"corners_rounded"} />
            </div>
            <div className="mr-1">
              <Button
                onlyIcon
                icon={<GlobeAltIcon width={"2.6rem"} height={"2.6rem"} />}
                rounded={"full"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TailwindProvider(TopBar);
