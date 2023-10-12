import IntelligentSearchContext from "src/context/IntelligentSearchContext";
import IntelligentSearchWrapper from "./IntelligetSearchWrapper";
import { Ref, useEffect, useState } from "react";
import { useOutsideClick } from "utility/hooks";

type SelfProps = {
  handleChange: (isOpen: boolean) => void;
  topBarRef: Ref<HTMLDivElement>;
};

const IntelligentSearch = ({ handleChange, topBarRef }: SelfProps) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchElement, setSearchElement] = useState<
    "none" | "destination" | "check-in-out" | "guests"
  >("none");
  const [travelTypeIndex, setTravelTypeIndex] = useState(0);

  const handleTransform = (
    element: "none" | "destination" | "check-in-out" | "guests"
  ) => {
    setSearchElement(element || "none");
    setIsSearchOpen(true);
  };

  const cancelTransform = () => {
    if (!!isSearchOpen) {
      setSearchElement("none");
      setIsSearchOpen(false);
    }
  };

  const handleTravelTypeIndexChange = (index: number) =>
    setTravelTypeIndex(index);

  useEffect(() => {
    handleChange(isSearchOpen);
  }, [isSearchOpen]);

  return (
    <IntelligentSearchContext.Provider
      value={{
        isSearchOpen,
        searchElement,
        travelTypeIndex,
        handleTransform,
        cancelTransform,
        handleTravelTypeIndexChange,
      }}
    >
      <IntelligentSearchWrapper />
    </IntelligentSearchContext.Provider>
  );
};

export default IntelligentSearch;
