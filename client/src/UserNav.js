import React from "react";
import { NavLink } from "react-router-dom";

function UserNav() {
  return (
    <nav className="nav-bar">
      <NavLink className="link" to="/user">
        User
      </NavLink>
      <NavLink className="link" to="/user/recipes">
        My Recipes
      </NavLink>
    </nav>
  );
}

export default UserNav;
