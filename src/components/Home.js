import React from "react";
// import useQuery from "../hooks/useQuery";
import GroceryItem from "./GroceryItem";

function Home({groceries,onUpdate}){
    // const{data:groceries} = useQuery('http://localhost:4000/groceries')

    const groceryItems = groceries.map((grocery, index)=>{
        return <GroceryItem 
            key={index}
            name = {grocery.name}
            price = {grocery.price}
            description = {grocery.description}
            id = {grocery.id}
            image = {grocery.image}
            isSaved ={grocery.isSaved}
            onUpdate ={onUpdate}
        />    
    })
    // console.log(groceries)
    return(
        <div className="groceries">
            {groceryItems}
        </div>
    )
}
export default Home