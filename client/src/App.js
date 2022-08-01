import './App.css';
import { useState, useEffect } from "react";
import Recipe from "./Recipe";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import { Route, Routes } from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  function handleLogin(user) {
    setUser(user);
  }

  function handleLogout() {
    setUser(null);
  }

  return (
    <div className="App">
      <Header user={user} onLogout={handleLogout} />
      <Routes>
        <Route exact path="/recipes/:id" element = {<Recipe/>}>
        <Route exact path="/login" element = 
          {<Login onLogin={handleLogin} />}/>
        <Route exact path="/" element = {<Home/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;


