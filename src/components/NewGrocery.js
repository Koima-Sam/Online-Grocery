import React, { useState } from "react";

function NewGrocery(){
    const[grocery,setGrocery]=useState(
        {
            name:"",
            price:"",
            description:"",
            image:""
        }
    )
    return(
        <div className="bg">
            <div className="form">
            <h2>Please fill in the details to upload a new product</h2>
            <form className="container">
                <input value ={grocery.name} type="text" placeholder="Name of the Product"/><br/>
                <input value ={grocery.image} type="text" placeholder="Paste url of the grocery image here"/><br/>
                <input value ={grocery.price} type="text" placeholder="Price of the item per Kg"/><br/>
                <input value ={grocery.description} type="text" placeholder="Description of the grocery item"/><br/>

                <input id="upload" type="submit" value="Upload Item"/> 
            </form>
        </div>
        </div>
    )
}
export default NewGrocery