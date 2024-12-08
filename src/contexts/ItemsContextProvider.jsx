import { useState } from "react";
import { useEffect } from "react";
import { initialItemList } from "../lib/constants";
import { createContext } from "react";

export const ItemContext = createContext();

export default function ItemsContextProvider({ children }) {
  const [items, setItems] = useState(
    () => JSON.parse(localStorage.getItem("items")) || initialItemList
  );

  const handleAddItem = (name) => {
    const newItems = [...items, { id: Date.now(), name, packed: false }];
    setItems(newItems);
  };

  const handleDeleteItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  const hadleToggleItem = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, packed: !item.packed };
      }
      return item;
    });
    setItems(newItems);
  };

  const handleRemoveAllItem = () => {
    setItems([]);
  };

  const hadleResetToInitial = () => {
    setItems(initialItemList);
  };

  const handleMarkAllComplete = () => {
    const newItems = items.map((item) => ({ ...item, packed: true }));
    setItems(newItems);
  };

  const handleMarkAllIncomplete = () => {
    const newItems = items.map((item) => ({ ...item, packed: false }));
    setItems(newItems);
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <>
      <ItemContext.Provider
        value={{
          items,
          handleAddItem,
          handleDeleteItem,
          hadleToggleItem,
          handleMarkAllComplete,
          handleMarkAllIncomplete,
          hadleResetToInitial,
          handleRemoveAllItem,
        }}
      >
        {children}
      </ItemContext.Provider>
    </>
  );
}
