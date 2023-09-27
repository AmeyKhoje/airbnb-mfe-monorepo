import LogoSvg from "src/components/minis/LogoSvg";
import TailwindProvider from "src/hoc/TailwindProvider";

const TopBar = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-32 bg-white pl-8 pr-8">
      <div className="flex items-center w-full">
        <div>
          <LogoSvg primary />
        </div>
      </div>
    </div>
  );
};

export default TailwindProvider(TopBar);
