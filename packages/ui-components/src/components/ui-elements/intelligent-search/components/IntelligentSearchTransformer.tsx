import { useContext, useEffect, useMemo, useState } from "react";
import IntelligentSearchUI from "./IntelligentSearchUI";
import IntelligentSearchContext from "src/context/IntelligentSearchContext";
import IntelligentSearchTabs from "./IntelligentSearchTabs";
import IntelligentSearchFilter from "./IntelligentSearchFIlter";

const IntelligentSearchTransformer = () => {
  const [initialRenderDone, updateInitialRender] = useState(false);
  const { isSearchOpen } = useContext(IntelligentSearchContext);

  // TODO: Animations to be performed(not implemented yet)
  const searchUIAnimation = useMemo(() => {
    if (initialRenderDone) {
      if (!!isSearchOpen) {
        return "animate-hide-search";
      } else {
        return "animate-show-search";
      }
    }
  }, [isSearchOpen, initialRenderDone]);

  // TODO: Animations to be performed(not implemented yet)
  const searchBarAnimation = useMemo(() => {
    if (initialRenderDone) {
      if (!!isSearchOpen) {
        return "show-search-bar";
      } else {
        return "hide-search-bar";
      }
    }
  }, [isSearchOpen, initialRenderDone]);

  useEffect(() => {
    updateInitialRender(true);
  }, []);

  return (
    <div>
      {!isSearchOpen && (
        <div>
          <IntelligentSearchUI />
        </div>
      )}
      {!!isSearchOpen && (
        <div>
          <IntelligentSearchTabs
            handleChange={(val) => {
              console.log(val);
            }}
          />
        </div>
      )}
      {!!isSearchOpen && (
        <div className="fixed top-[12rem] w-full h-[14rem] bg-white left-0 flex justify-center">
          <IntelligentSearchFilter />
        </div>
      )}
    </div>
  );
};

export default IntelligentSearchTransformer;
