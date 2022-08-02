import React from "react";
import { NavLink } from "react-router-dom";

function NavBar({user}) {

    return (
        <nav className = "nav-bar">
            <NavLink className="link" end to="/">Home</NavLink>
            <NavLink className="link" to="/user">User</NavLink>
            {user ? <NavLink className="link" to="/user/recipes">My Recipes</NavLink> : <NavLink className="link" to="/recipes">Recipes</NavLink>}
            <NavLink className="link" to="/reviews">Reviews</NavLink>
        </nav>
    )
}

// {user ? <NavLink className="link" to="/user">User</NavLink> : null}

export default NavBar