import React, { useState } from "react";
import classes from "./ShoppingListItem.module.css";

export const ShoppingListItem = (props) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggleChecked = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div
      className={`flex items-center p-2 ${isChecked && classes.checkedItem}`}
    >
      <input
        type="checkbox"
        className="mr-2"
        value={props.item}
        checked={isChecked}
        onChange={handleToggleChecked}
      />
      <h3 className={`flex-1 ${isChecked && classes.checkedText}`}>
        {props.item}
      </h3>
      <button className={classes.removeButton} onClick={props.deleteItem}>
        x
      </button>
    </div>
  );
};
