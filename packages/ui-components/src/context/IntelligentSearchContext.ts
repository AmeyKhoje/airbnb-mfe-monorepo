import { createContext } from "react";

export type TIntelligentSearchContext = {
  isSearchOpen: boolean;
  searchElement: "none" | "destination" | "check-in-out" | "guests";
  handleTransform: (
    element: "none" | "destination" | "check-in-out" | "guests"
  ) => void;
  cancelTransform: () => void;
};

export default createContext<TIntelligentSearchContext>({
  isSearchOpen: false,
  searchElement: "none",
  handleTransform: () => {},
  cancelTransform: () => {},
});
