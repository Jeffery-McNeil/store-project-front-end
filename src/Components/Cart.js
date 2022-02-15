import React from "react";
import { NavLink } from "react-router-dom";

function Cart () {
    return (
        <>
        <button className="back-button">Back</button>
        <Navbar></Navbar>
        <div className="cards">
            {itemList.map((item)=>{
                return (
                <CartItemCard/>
                )
            })}
        </div>
        </>
    )
}

