import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";

function NavBar({ user }) {
  return (
    <nav className="nav-bar">
      <NavLink className="link" end to="/">
        <Button variant="contained">Home</Button>
      </NavLink>
      {user ? (
        <div>
          <NavLink className="link" to="/user/recipes">
            <Button variant="contained">My Recipes</Button>
          </NavLink>
          <NavLink className="link" to="/user">
            <Button variant="contained">User</Button>
          </NavLink>
        </div>
      ) : (
        <NavLink className="link" to="/recipes">
          <Button variant="contained">Peruse Recipes</Button>
        </NavLink>
        
  )}
  </nav>
)}
  


export default NavBar;
