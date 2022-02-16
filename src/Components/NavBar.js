import React from "react";
import { NavLink } from "react-router-dom";
import '../AllCss/NavBar.css'

function NavBar() {
    return (
        <header >
            <NavLink to="/mainPage">
                Home
            </NavLink>
            <NavLink to="/cart">
                Cart
            </NavLink>
            <NavLink to="/checkout">
                Checkout
            </NavLink>
        </header>

    )}

export default NavBar;