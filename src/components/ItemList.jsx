import Select from "react-select";
import EmptyView from "./EmptyView";
import { useState } from "react";

const sortingOptions = [
  { label: "Sort by default", value: "default" },
  { label: "Sort by packed", value: "packed" },
  { label: "Sort by unpacked", value: "unpacked" },
];

export default function ItemList({ items, handleDeleteItem, hadleToggleItem }) {
  const [sortBy, setSortBy] = useState("default");
  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "packed") {
      return b.packed - a.packed;
    }
    if (sortBy === "unpacked") {
      return a.packed - b.packed;
    }
    return;
  });
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
          onToggleItem={() => hadleToggleItem(item.id)}
          onDeleteItem={() => handleDeleteItem(item.id)}
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
