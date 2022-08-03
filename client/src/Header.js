import { Link } from "react-router-dom";

function Header({ user, onLogout }) {
  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => onLogout());
  }

  return (
    <header>
      <h2>
        <Link to="/">{user ? user.username : "Sign In, You Bum"}</Link>
      </h2>
      {user ? (
        <div>
          <p>Welcome, {user.username}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <Link to="/login">Login</Link>
      )}
      <br />
      {user ? null: <Link to="signup">Signup</Link>}
    </header>
  );
}

export default Header;