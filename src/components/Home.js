import React from "react";
import GroceryItem from "./GroceryItem";

function Home({ groceries, onUpdate, onDelete }) {
  const groceryItems = groceries.map((grocery, index) => {
    return (
      <GroceryItem
        key={index}
        name={grocery.name}
        price={grocery.price}
        description={grocery.description}
        id={grocery.id}
        image={grocery.image}
        isSaved={grocery.isSaved}
        onUpdate={onUpdate}
        onDelete={onDelete}
      />
    );
  });
  // console.log(groceries)
  return <div className="groceries">{groceryItems}</div>;
}
export default Home;
