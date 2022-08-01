// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import Paywall from "./Paywall";

// const initialState = {
//   recipe: null,
//   error: null,
//   status: "pending",
// };

function Recipe({recipe}) {
  //const [{ recipe, error, status }, setState] = useState(initialState);
  //const { id } = useParams();

  // useEffect(() => {
  //   setState(initialState);
  //   fetch(`/recipes/${id}`).then((r) => {
  //     if (r.ok) {
  //       r.json().then((recipe) =>
  //         setState({ recipe, error: null, status: "resolved" })
  //       );
  //     } else {
  //       r.json().then((message) =>
  //         setState({ recipe: null, error: message.error, status: "rejected" })
  //       );
  //     }
  //   });
  // }, [id]);

  // if (status === "pending") return <h1>Loading...</h1>;

  // if (status === "rejected") {
  //   if (error === "Maximum pageview limit reached") {
  //     return <Paywall />;
  //   } else {
  //     return <h1>{error}</h1>;
  //   }
  // }

  //const { ingredients, instructions, genre, time, size, title, image} = recipe;

  return (
    <Recipe>
      <h1>{recipe.title}</h1>
      <small>
        <p>
          {recipe.ingredients}
        </p>
        <p>
          {recipe.instructions}
        </p>
        <p>
          {recipe.genre}
        </p>
        <p>
          {recipe.time}
        </p>
        <p>
          {recipe.size}
        </p>
        <p>
          {recipe.image}
        </p>
      </small>
    </Recipe>
  );
}

export default Recipe;