import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {

    return (
        <nav className = "nav-bar">
            <NavLink className="link" end to="/">Home</NavLink>
            <NavLink className="link" to="/me">User</NavLink>
            <NavLink className="link" to="/recipes">Recipes</NavLink>
            <NavLink className="link" to="/reviews">Reviews</NavLink>
        </nav>
    )
}

export default NavBar