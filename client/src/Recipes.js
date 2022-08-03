import { useEffect, useState } from "react";
import Recipe from "./Recipe";

function Recipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function goGetEm(){
      await fetch("/recipes")
      .then((r) => r.json())
      .then((r)=> {
        setRecipes(r);
        console.log(r)})}
   goGetEm();
  }, [])
  
  return (
    <div>  
    {recipes.map(recipe => 
      <Recipe key={recipe.id} recipe = {recipe} 
      edit={false} />)}
  </div>
  );
}

export default Recipes;

        // if(homePage){
        //   setRecipes(shuffle(r))
        // } else setRecipes(r)
        // setRecipes(r)
      // })}
   // goGetEm();
  // }, [])

  // function shuffle(r){
  //   let shuffledR = r.map(value => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value)
  //   return shuffledR.slice(0,2)
  // }