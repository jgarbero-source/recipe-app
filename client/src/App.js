import Header from "./Header.js";
import Login from "./Login.js";
import Recipe from "./Recipe.js";
import Recipes from "./Recipes.js";
import UserReviews from "./UserReviews.js"
//import Review from "./Review.js"
import { useEffect, useState } from "react";
import { Routes, Route, useNavigate, NavLink } from "react-router-dom";
import NavBar from "./Navbar.js";
import User from "./User.js";
import UserNav from "./UserNav.js"
import UserEditForm from "./UserEditForm.js";
import UserRecipes from "./UserRecipes.js";
import UserRecipeEditForm from "./UserRecipeEditForm.js";
import SignUp from './Signup.js';
import NewRecipeForm from './NewRecipeForm.js';
import UserReviewEditForm from './UserReviewEditForm.js';
import NewReviewForm from './NewReviewForm.js';
import RecipesHome from './RecipesHome.js';

function App() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((client) => {
          setUser(client);
          console.log(client);
        });
      } else {
        console.log("We're not rendering nothing pal");
      }
    });
  }, []);

    function handleLogin(user) {
      setUser(user);
      console.log(user)
    }
  
    function handleLogout() {
      navigate("/");
      setUser(null);
      console.log(null)
    }

    function deleteUser() {
      setUser(null);
      navigate("/");
    }

    function updateUser(updatedUser) {
      setUser(updatedUser)
    }

  return (
    <div className="App">
      <Header user={user} onLogout={handleLogout} />
      {user ? <UserNav/> : null}
            <div><br/></div>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<RecipesHome user = {user} />}/>
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/user" element={<User user={user} deleteUser={deleteUser} />} />
        <Route path="/user/edit" element={<UserEditForm user={user} updateUser={updateUser} />} />
        <Route path="/user/recipes" element={<UserRecipes user={user} />} />
        <Route path="/user/recipes/:id" element={<UserRecipeEditForm />}/>
        <Route path="/recipes" element={<Recipes user = {user} />} />
        <Route path="/recipes/new" element={<NewRecipeForm user={user}/>}/>
        <Route path="/recipes/:id" element={<Recipe />} />
        <Route path='/user/reviews' element={<UserReviews user={user}/>}/>
        <Route path="/user/reviews/:id" element={<UserReviewEditForm />}/>
        <Route path="/user/reviews/new" element={<NewReviewForm user={user}/>}/>
      </Routes>
    </div>
  );
}

export default App;
