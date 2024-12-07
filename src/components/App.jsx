import { useState } from "react";
import { initialItemList } from "../lib/constants";
import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Header from "./Header";
import ItemList from "./ItemList";
import Sidebar from "./Sidebar";

function App() {
  const [items, setItems] = useState(initialItemList);

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

  const buttonGroupHandle = {
    handleMarkAllComplete,
    handleMarkAllIncomplete,
    hadleResetToInitial,
    handleRemoveAllItem,
  };

  return (
    <>
      <BackgroundHeading />
      <main>
        <Header
          totalNumberOfItems={items.length}
          numberOfItemsPacked={items.filter((item) => item.packed).length}
        />
        <ItemList
          items={items}
          handleDeleteItem={handleDeleteItem}
          hadleToggleItem={hadleToggleItem}
        />
        <Sidebar
          handleAddItem={handleAddItem}
          buttonGroupHandle={buttonGroupHandle}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
