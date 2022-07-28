import React from "react";
import {  Link } from "react-router-dom";

function GroceryItem({name,id,price,description,image,isSaved,onUpdate,onDelete,onEdit}) {
  function handleSave(){
    fetch(`https://afternoon-cove-03847.herokuapp.com/groceries/${id}`,{
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
  function handleDelete(e){
    fetch(`https://afternoon-cove-03847.herokuapp.com/groceries/${id}`,{
      method:"DELETE",
    })
    .then(resp => resp.json())
    .then(()=>onDelete(id))
  }
  
  return (
    <div className="n1">
      <h1><i className="fa" onClick={handleDelete}>&#xf014;</i></h1>
      <img
        src={image}
        alt="grocery"
      /><br/>
      <input value={name} readOnly/> 
      <p>Ksh {price} per kg</p>
      <textarea value={description} readOnly/> <br/>
      <button onClick={handleSave}>{isSaved? "Discard":"Save"}</button><br/>
      <Link to='/edit' state={{name, id, image , description,price}}>
      <button className="edit">
        Edit Grocery <i className="far fa-edit"></i>
      </button>
      </Link>
    </div>
  );
}
export default GroceryItem;
