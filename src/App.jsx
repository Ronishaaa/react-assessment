import { useState } from "react";
import "./App.css";
import { ShoppingListItem } from "./components/ShoppingListItem";

function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  const handleChange = (event) => {
    setNewItem(event.target.value);
  };

  const handleAddItem = () => {
    if (newItem !== "" && !items.find((arrItem) => arrItem.item === newItem)) {
      setItems((oldItems) => [{ item: newItem, check: false }, ...oldItems]);
      setNewItem("");
    } else {
      window.alert("Cannot add the given element.");
    }
  };

  const deleteItem = (index) => {
    setItems((oldItems) => oldItems.filter((item, i) => i !== index));
  };

  const handleToggleChecked = (id) => {
    setItems(
      items.map((item, idx) => {
        if (id === idx) {
          return { ...item, check: !item.check };
        } else {
          return item;
        }
      })
    );
  };

  return (
    <div className="container">
      <h1 className="mb-4">My Shopping List</h1>

      <div className="flex gap-4 pb-3 border-b-2 border-gray-700">
        <input
          type="text"
          placeholder="E.g. Carrots"
          className="v__input flex-1"
          value={newItem}
          onChange={handleChange}
        />
        <button className="v__button" onClick={handleAddItem}>
          Add
        </button>
      </div>
      <div className="v__list-container overflow-y-scroll">
        {items.map((item, index) => (
          <ShoppingListItem
            key={index}
            index={index}
            item={item}
            deleteItem={() => deleteItem(index)}
            handleToggleChecked={handleToggleChecked}
          />
        ))}
      </div>
      <div>{items.filter((i) => i.check).length}</div>
    </div>
  );
}

export default App;
