import { useEffect, useState } from "react";
import Recipe from "./Recipe";

function FeaturedRecipe() {
    const [recipe, setRecipe] = useState([]);
  
    useEffect(() => {
      async function goGetEm(){
        await fetch("/randomrecipe")
        .then((r) => r.json())
        .then((r)=> {
          console.log(r)
          setRecipe(r);
        })}
     goGetEm();
    }, [])
    
    return (
        <div>
          <h2>Today's Featured Recipe!</h2>
          <Recipe recipe = {recipe} 
          edit={false} />
        </div>
    );
  }
  
  export default FeaturedRecipe;