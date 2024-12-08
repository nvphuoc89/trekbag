import { useContext } from "react";
import { ItemContext } from "../contexts/ItemsContextProvider";

export function useItemContext() {
  const context = useContext(ItemContext);
  if (!context) {
    throw new Error(
      "useItemContext must be used within an ItemContextProvider"
    );
  }
  return context;
}
