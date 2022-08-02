import { Link } from "react-router-dom";

function Header({ user, onLogout }) {
  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => onLogout());
  }

  return (
    <header>
      <h1>
        <Link to="/">{user ? user.username : "Sign In, You Bum"}</Link>
      </h1>
      {user ? null: <Link to="signup">Signup</Link>}
      {user ? (
        <div>
          <p>Welcome, {user.username}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </header>
  );
}

export default Header;