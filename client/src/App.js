import Header from './Header.js';
import Login from './Login.js';
import Recipe from './Recipe.js';
import Home from './Home.js';
import {useEffect, useState} from 'react';

function App() {
    // const [user, setUser] = useState(null);
    useEffect(() => {
        fetch("/me").then((response) => {
          if (response.ok) {
            response.json().then((user) => setUser(user)
            );
          }
        });
      }, []);
    return(
        <div>Hey</div>
    )
}

export default App;