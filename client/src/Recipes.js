import { useEffect, useState } from "react";
//import { Link } from "react-router-dom";
import Recipe from "./Recipe";

function Recipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(async() => {
    await fetch("/recipes")
      .then((r) => r.json())
      .then((r)=> {
        setRecipes(r);
        console.log(r);
      });
  }, []);

  return (
    <div>  
    {recipes.map(recipe => 
    <Recipe key={recipe.id} recipe = {recipe}/>
  )}
  </div>
  );
}

export default Recipes;


/*<h3>
              <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
            </h3>
            <small>
              {recipe.genre} - {recipe.size}
            </small>
          </Recipe>
        );
      })} */