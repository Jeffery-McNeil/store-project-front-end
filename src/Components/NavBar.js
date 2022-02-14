import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <header className="navBar">
            <NavLink className="navLinks" to="/shop">
                Home
            </NavLink>
            <NavLink className="navLinks" to="/cart">
                Cart
            </NavLink>
            <NavLink className="navLinks" to="/checkout">
                Checkout
            </NavLink>
        </header>

    )}

export default NavBar;