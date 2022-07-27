import React from "react";

function GroceryItem({name,id,price,description,image,isSaved,onUpdate}) {
  function handleSave(){
    fetch(`http://localhost:4000/groceries/${id}`,{
            method : "PATCH",
            headers : {
                'Content-Type':'application/json',
                'Application' : 'application/json'
            },
            body:JSON.stringify({isSaved:!isSaved})
        })
        .then(response => response.json())
        .then(data => {
          console.log("Clicked......")
          onUpdate(data,id)}
          )
        .catch((error)=>console.log(error))
  }
  return (
    <div className="n1">
      <img
        src={image}
        alt="grocery"
      />
      <h2>{name}</h2>
      <p>Ksh {price} per kg</p>
      <h4>{description}</h4>
      <button onClick={handleSave}>{isSaved? "Discard":"Save"}</button><br/>
      <button className="edit">
        Edit Grocery <i className="far fa-edit"></i>
      </button>
    </div>
  );
}
export default GroceryItem;
