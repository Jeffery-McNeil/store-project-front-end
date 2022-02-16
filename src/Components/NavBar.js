import React from "react";
import { NavLink } from "react-router-dom";
import '../AllCss/NavBar.css'

function NavBar() {
    return (
        <nav className="nav">
            <div className="nav-items">
                <NavLink to="/shop" className="link-text">
                    Home
                </NavLink>
                <NavLink to="/cart" className="link-text">
                    Cart
                </NavLink>
                <NavLink to="/checkout" className="link-text">
                    Checkout
                </NavLink>
            </div>
        </nav>

    )}

export default NavBar;