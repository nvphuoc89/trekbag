import Select from "react-select";
import EmptyView from "./EmptyView";
import { useState } from "react";
import { useMemo } from "react";
import { useItemStore } from "../stores/itemsStore";

const sortingOptions = [
  { label: "Sort by default", value: "default" },
  { label: "Sort by packed", value: "packed" },
  { label: "Sort by unpacked", value: "unpacked" },
];

export default function ItemList() {
  const items = useItemStore((state) => state.items);
  const toggleItem = useItemStore((state) => state.toggleItem);
  const deleteItem = useItemStore((state) => state.deleteItem);
  const [sortBy, setSortBy] = useState("default");

  const sortedItems = useMemo(
    () =>
      [...items].sort((a, b) => {
        if (sortBy === "packed") {
          return b.packed - a.packed;
        }
        if (sortBy === "unpacked") {
          return a.packed - b.packed;
        }
        return;
      }),
    [items, sortBy]
  );

  return (
    <ul className="item-list">
      {items.length === 0 && <EmptyView />}
      {items.length > 0 && (
        <section className="sorting">
          <Select
            onChange={(option) => setSortBy(option.value)}
            defaultValue={sortingOptions[0]}
            options={sortingOptions}
          />
        </section>
      )}
      {sortedItems.map((item) => (
        <Item
          key={item.id}
          item={item}
          onToggleItem={() => toggleItem(item.id)}
          onDeleteItem={() => deleteItem(item.id)}
        />
      ))}
    </ul>
  );
}

const Item = ({ item, onToggleItem, onDeleteItem }) => {
  return (
    <li className="item">
      <label>
        <input type="checkbox" onChange={onToggleItem} checked={item.packed} />
        {item.name}
      </label>
      <button onClick={onDeleteItem}>❌</button>
    </li>
  );
};
