import { Link } from "react-router-dom";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Button, Typography } from "@mui/material";

function Header({ user, onLogout }) {
  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => onLogout());
  }

  return (
    <header>

      <Typography style={{color:"#00adb5"}} variant="h3">
        <Link to="/">{user ? user.username : "Sign In, You Bum"}</Link>
      </Typography>
      {user ? null: <Link to="signup">
      <Button variant="outlined" style={{color:"#000000"}}>Signup</Button>
      </Link>}

      {user ? (
        <div>
          <p>Welcome, {user.username}!</p>
          <Button variant="outlined" onClick={handleLogout}>Logout
          </Button>
        </div>
      ) : (
        <Link to="/login">
          <Button variant="outlined" style={{color:"#000000"}}>Login</Button>
        </Link>
      )}

      <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />

      <br />
      {user ? null: <Link to="signup">Signup</Link>}

    </header>
  );
}

export default Header;