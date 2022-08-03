import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Recipe from "./Recipe";

function UserRecipes({ user }) {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    async function goGetEm(){
      await fetch(`/users/${user.id}`)
      .then((r) => r.json())
      .then((r) => {
        setRecipes(r.recipes);
        console.log(r);
      })}
      goGetEm();
  }, [user.id]);

  return (
    <div>
      <button><Link to='/recipes/new'>Create a New Recipe</Link></button>
      {(recipes.length>0)? <div>
      {recipes.map((recipe) => (
        <Recipe key={recipe.id} recipe={recipe} edit = {true}/>
      ))}</div>
      : <h3>You have no recipes! Why don't you create one?</h3>}
    </div>
  );
}

export default UserRecipes;
