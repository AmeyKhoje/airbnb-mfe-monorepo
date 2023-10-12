import { useContext, useEffect, useMemo, useRef, useState } from "react";
import IntelligentSearchUI from "./IntelligentSearchUI";
import IntelligentSearchContext from "src/context/IntelligentSearchContext";
import IntelligentSearchTabs from "./IntelligentSearchTabs";
import IntelligentSearchFilter from "./IntelligentSearchFIlter";
import { useOutsideClick } from "utility/hooks";

const IntelligentSearchTransformer = () => {
  const ref1 = useRef<HTMLDivElement>(null);
  const { isSearchOpen } = useContext(IntelligentSearchContext);

  return (
    <div>
      {!isSearchOpen && (
        <div>
          <IntelligentSearchUI />
        </div>
      )}
      {!!isSearchOpen && (
        <div>
          <IntelligentSearchTabs />
        </div>
      )}
      {!!isSearchOpen && (
        <div
          ref={ref1}
          className="fixed top-[12rem] w-full h-[14rem] bg-white left-0 flex justify-center"
        >
          <IntelligentSearchFilter />
        </div>
      )}
    </div>
  );
};

export default IntelligentSearchTransformer;
