import { create } from "zustand";
import { initialItemList } from "../lib/constants";
import { persist } from "zustand/middleware";

export const useItemStore = create(
  persist(
    (set) => ({
      items: initialItemList,
      addItem: (name) => {
        set((state) => ({
          items: [...state.items, { id: Date.now(), name, packed: false }],
        }));
      },
      deleteItem: (id) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        }));
      },
      toggleItem: (id) => {
        set((state) => ({
          items: state.items.map((item) => {
            if (item.id === id) {
              return { ...item, packed: !item.packed };
            }
            return item;
          }),
        }));
      },
      removeAllItem: () => {
        set(() => ({ items: [] }));
      },
      resetToInitial: () => {
        set(() => ({ items: initialItemList }));
      },
      markAllComplete: () => {
        set((state) => ({
          items: state.items.map((item) => ({ ...item, packed: true })),
        }));
      },
      markAllIncomplete: () => {
        set((state) => ({
          items: state.items.map((item) => ({ ...item, packed: false })),
        }));
      },
    }),
    {
      name: "items",
    }
  )
);
