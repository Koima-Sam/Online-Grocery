import React from "react";

function NewGrocery(){
    return(
        <div className="bg">
            <div className="form">
            <h2>Please fill in the details to upload a new product</h2>
            <form className="container">
                <input type="text" placeholder="Name of the Product"/><br/>
                <input type="text" placeholder="Paste url of the grocery image here"/><br/>
                <input type="text" placeholder="Price of the item per Kg"/><br/>
                <input type="text" placeholder="Description of the grocery item"/><br/>

                <input id="upload" type="submit" value="Upload Item"/> 
            </form>
        </div>
        </div>
    )
}
export default NewGrocery