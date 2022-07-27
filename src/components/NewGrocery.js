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
    function handleChange(e){
        e.preventDefault();
        setGrocery({...grocery, [e.target.name] : e.target.value})
    }
    return(
        <div className="bg">
            <div className="form">
            <h2>Please fill in the details to upload a new product</h2>
            <form className="container" onSubmit={()=>console.log('Submitted')}>
                <input name ="name" value ={grocery.name} type="text" placeholder="Name of the Product" onChange={handleChange}/><br/>
                <input name ="image" value ={grocery.image} type="text" placeholder="Paste url of the grocery image here" onChange={handleChange}/><br/>
                <input name ="price" value ={grocery.price} type="text" placeholder="Price of the item per Kg" onChange={handleChange}/><br/>
                <input name ="description" value ={grocery.description} type="text" placeholder="Description of the grocery item" onChange={handleChange}/><br/>

                <input id="upload" type="submit" value="Upload Item"/> 
            </form>
        </div>
        </div>
    )
}
export default NewGrocery