import Header from './Header.js';
import Login from './Login.js';
import Recipe from './Recipe.js';
import Home from './Home.js';
import {useEffect, useState} from 'react';
import { Routes, Route} from "react-router-dom";
import NavBar from './Navbar.js';
// import NavBar from "./NavBar.js"


function App() {
  // require('react-dom');
  // window.React2 = require('react');
  // console.log(window.React1 === window.React2);
    const [user, setUser] = useState(null);
    useEffect(() => {
        fetch("/me").then((response) => {
          if (response.ok) {
            response.json().then((client) => {
              setUser(client)
              console.log("we did it!")
              console.log(client)
            }
            );
          } else {
            console.log("We're not rendering nothing pal")
          }
        });
      }, []);
    // return(
    //     <div>Hey</div>
    // )

    function handleLogin(user) {
      setUser(user);
      console.log(user)
    }
  
    function handleLogout() {
      setUser(null);
      console.log(null)
    }
  
    return (
      <div className="App">
        <Header user={user} onLogout={handleLogout} />
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
              path="/login"
              element={<Login onLogin={handleLogin} />}
            />
          <Route path="/recipes/:id" element={<Recipe />}>
          </Route>
        </Routes>
      </div>
    );
  }
  
  export default App;
  
// }

// export default App;