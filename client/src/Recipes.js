import { useEffect, useState } from "react";
import Recipe from "./Recipe";
import { Grid } from "@mui/material";


function Recipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function goGetEm(){
      await fetch("/recipes")
      .then((r) => r.json())
      .then((r)=> {
        setRecipes(r);
        console.log(r);
      })}
   goGetEm();
  }, [])
  
  return (
    <div>  
      <Grid container spacing={2}>
        {recipes.map(recipe => 
          <Grid item xs={6} key={recipe.id}>
            <Recipe key={recipe.id} recipe = {recipe} edit={false} /> 
          </Grid>
        )}
      </Grid>  
    </div>
  );
}

export default Recipes;

