import IntelligentSearchContext from "src/context/IntelligentSearchContext";
import IntelligentSearchWrapper from "./IntelligetSearchWrapper";
import { useState } from "react";

const IntelligentSearch = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchElement, setSearchElement] = useState<
    "none" | "destination" | "check-in-out" | "guests"
  >("none");

  const handleTransform = (
    element: "none" | "destination" | "check-in-out" | "guests"
  ) => {
    setSearchElement(element || "none");
    setIsSearchOpen(true);
  };

  const cancelTransform = () => {
    setSearchElement("none");
    setIsSearchOpen(false);
  };

  return (
    <IntelligentSearchContext.Provider
      value={{
        isSearchOpen,
        searchElement,
        handleTransform,
        cancelTransform,
      }}
    >
      <IntelligentSearchWrapper />
    </IntelligentSearchContext.Provider>
  );
};

export default IntelligentSearch;
