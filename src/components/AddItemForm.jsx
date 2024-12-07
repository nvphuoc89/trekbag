import { useState } from "react";
import Button from "./Button";
import { useRef } from "react";

export default function AddItemForm({ onAddItem }) {
  const [itemText, setItemText] = useState("");
  const inputRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!itemText.trim()) {
      inputRef.current.focus();
      return;
    }
    onAddItem(itemText);
    setItemText("");
    inputRef.current.focus();
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Add an item</h2>
      <input
        ref={inputRef}
        type="text"
        value={itemText}
        autoFocus
        onChange={(e) => {
          setItemText(e.target.value);
        }}
      />
      <Button>Add to list</Button>
    </form>
  );
}
