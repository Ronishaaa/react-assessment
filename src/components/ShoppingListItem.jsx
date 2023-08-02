import React from "react";
import classes from "./ShoppingListItem.module.css";

export const ShoppingListItem = (props) => {
  return (
    <div>
      <div
        className={`flex items-center p-2 ${
          props.isChecked && classes.checkedItem
        }`}
      >
        <input
          type="checkbox"
          className="mr-2"
          value={props.item.item}
          checked={props.item.check}
          onChange={() => props.handleToggleChecked(props.index)}
        />
        <h3 className={`flex-1 ${props.item.check && classes.checkedText}`}>
          {props.item.item}
        </h3>
        <button className={classes.removeButton} onClick={props.deleteItem}>
          x
        </button>
      </div>
    </div>
  );
};
