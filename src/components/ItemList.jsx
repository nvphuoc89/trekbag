export default function ItemList({ items, handleDeleteItem, hadleToggleItem }) {
  return (
    <>
      <ul>
        {items.length === 0 ? <EmptyView /> : null}
        {items.map((item) => (
          <Item
            key={item.id}
            item={item}
            onToggleItem={() => hadleToggleItem(item.id)}
            onDeleteItem={() => handleDeleteItem(item.id)}
          />
        ))}
      </ul>
    </>
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
