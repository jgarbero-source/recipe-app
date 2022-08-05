import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";

function UserNav({user}) {
  return (
    <nav className="nav-bar">
      <NavLink className="link" to="/user">
        <Button variant="outlined" style={{ color: "#000000" }}>
          User
        </Button>
      </NavLink>
      <NavLink className="link" to="/user/recipes">
        <Button variant="outlined" style={{ color: "#000000" }}>
          My Recipes
        </Button>
      </NavLink>
      <NavLink className="link" to="/user/reviews" state={{user: {user}}}>
        <Button variant="outlined" style={{ color: "#000000" }}>
          My Reviews
        </Button>
      </NavLink>
    </nav>
  );
}

export default UserNav;
