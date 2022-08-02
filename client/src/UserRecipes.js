import { useEffect, useState } from "react";
import Recipe from "./Recipe";

function UserRecipes({ user }) {
  const [recipes, setRecipes] = useState([]);
  useEffect(async () => {
    await fetch(`/users/${user.id}`)
      .then((r) => r.json())
      .then((r) => {
        setRecipes(r.recipes);
        console.log(r);
      });
  }, []);

  return (
    <div>
      {recipes.map((recipe) => (
        <Recipe key={recipe.id} recipe={recipe} edit = {true}/>
      ))}
    </div>
  );
}

export default UserRecipes;
