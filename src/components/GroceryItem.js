import React from "react";

function GroceryItem() {
  return (
    <div className="n1">
      <img
        src=""
        alt="item image"
      />
      <h2>Red Cabbage</h2>
      <p>Ksh per kg</p>
      <h4>Description</h4>
      <button>Save Item</button>
      <button className="edit">
        Edit Grocery <i className="far fa-edit"></i>
      </button>
    </div>
  );
}
export default GroceryItem;
