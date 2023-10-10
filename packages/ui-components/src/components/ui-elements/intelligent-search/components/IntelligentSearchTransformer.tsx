import { useContext, useEffect, useMemo, useState } from "react";
import IntelligentSearchUI from "./IntelligentSearchUI";
import IntelligentSearchContext from "src/context/IntelligentSearchContext";

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

  console.log(isSearchOpen);

  return (
    <div>
      {!isSearchOpen && (
        <div>
          <IntelligentSearchUI />
        </div>
      )}
      {!!isSearchOpen && <div>Hello</div>}
    </div>
  );
};

export default IntelligentSearchTransformer;
