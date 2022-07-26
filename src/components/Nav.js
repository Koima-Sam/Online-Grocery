import React from "react";
import { NavLink } from "react-router-dom";

function Nav(){
    return(
        <div className="nav">
            <div className="logo">
                <img src="https://i.pinimg.com/736x/2f/7f/dc/2f7fdcc294c90e1a98cc32e813f1723b.jpg" alt="logo"/>
                <h2>G-<span>Sto</span>re</h2>
            </div>
        
            <div className="nav-links">
                <NavLink to={'/'} exact>
                    Home
                </NavLink>
                <NavLink to={'/new'} exact>
                    New Grocery
                </NavLink>
                <NavLink to={'/grocery-item'}>
                    Saved Groceries
                </NavLink>
                
            </div>
        </div>
    )
}
export default Nav