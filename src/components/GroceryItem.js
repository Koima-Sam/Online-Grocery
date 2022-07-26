import React from "react";

function GroceryItem({name,id,price,description,image}) {
  return (
    <div className="n1">
      <img
        src={image}
        alt="grocery"
      />
      <h2>{name}</h2>
      <p>Ksh {price} per kg</p>
      <h4>{description}</h4>
      <button>Save Item</button>
      <button className="edit">
        Edit Grocery <i className="far fa-edit"></i>
      </button>
    </div>
  );
}
export default GroceryItem;
