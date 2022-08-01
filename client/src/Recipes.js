import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Recipe from "./Recipe";

function Recipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    console.log("in the useEffect")
    fetch("/recipes")
      .then((r) => r.json())
      .then((r)=> {
        setRecipes(r);
        console.log(r);
      });
  }, []);

  return (
    <main>
      {recipes.map((recipe) => {
        return (
          <Recipe key={recipe.id} recipe = {recipe}>
            <h3>
              <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
            </h3>
            <small>
              {recipe.genre} - {recipe.size}
            </small>
          </Recipe>
        );
      })}
    </main>
  );
}

export default Recipes;