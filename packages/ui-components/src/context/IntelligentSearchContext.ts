import { createContext } from "react";

export type TIntelligentSearchContext = {
  isSearchOpen: boolean;
  searchElement: "none" | "destination" | "check-in-out" | "guests";
  travelTypeIndex: number;
  handleTransform: (
    element: "none" | "destination" | "check-in-out" | "guests"
  ) => void;
  cancelTransform: () => void;
  handleTravelTypeIndexChange: (index: number) => void;
};

export default createContext<TIntelligentSearchContext>({
  isSearchOpen: false,
  searchElement: "none",
  travelTypeIndex: 0,
  handleTransform: () => {},
  cancelTransform: () => {},
  handleTravelTypeIndexChange: () => {},
});
