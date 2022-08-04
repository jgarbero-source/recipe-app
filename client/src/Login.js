import { useState } from "react";
import { Typography, FormControl, Input, Button, TextField } from "@mui/material"
import { useNavigate, Link } from "react-router-dom";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([])

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => 
        {
          onLogin(user)
          navigate('/') //change to user
        })
      } else {
        r.json().then(json => setErrors(Object.entries(json.errors)))
      }
    });
  }

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <h3>Login With Username</h3>
      <FormControl>
      <Input 
        placeholder="Username"
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        placeholder="Password" 
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button type="submit">
        Login
      </Button>
    </FormControl>
      {errors?errors.map(e => <div key={e[0]}>{e[1]}</div>):null}
    </form>
    <br />
    <div>Don't have an account? <Link to="/signup">Sign Up</Link> to get started!</div>
    </div>
  );
}

export default Login;

/*
      <label htmlFor="username">Username: </label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label htmlFor="password">Password: </label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
*/
