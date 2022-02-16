import React from "react";
import { NavLink } from "react-router-dom";
import '../AllCss/NavBar.css'

function NavBar() {

    return (
        <nav className="nav">
            <div className="nav-items">
                <NavLink to="/shop" className="link-text">
                    Shop
                </NavLink>
                <NavLink to="/cart" className="link-text">
                    Cart
                </NavLink>
                <NavLink to="/" className="link-text" onClick={()=> localStorage.clear()}>
                    Log Out
                </NavLink>
            </div>
        </nav>

    )}

export default NavBar;