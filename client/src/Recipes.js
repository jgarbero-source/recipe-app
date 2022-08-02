import { useEffect, useState } from "react";
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
    <Recipe key={recipe.id} recipe = {recipe} reviews={recipe.reviews}
    edit={false}/>
  )}
  </div>
  );
}

export default Recipes;