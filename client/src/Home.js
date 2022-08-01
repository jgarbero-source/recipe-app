import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Recipe from "./Recipe";

function Home() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/recipes")
      .then((r) => r.json())
      .then(setRecipes);
  }, []);

  return (
    <main>
      {recipes.map((recipe) => {
        return (
          <Recipe key={recipe.id}>
            <h3>
              <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
            </h3>
            <small>
              {article.genre} - {article.size} min read
            </small>
          </Recipe>
        );
      })}
    </main>
  );
}

export default Home;