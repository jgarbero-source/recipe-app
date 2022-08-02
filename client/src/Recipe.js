// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import Paywall from "./Paywall";

// const initialState = {
//   recipe: null,
//   error: null,
//   status: "pending",
// };
import { Link } from "react-router-dom";


function Recipe({recipe, edit, reviews}) {
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

  const { ingredients, instructions, genre, time, size, title, image} = recipe;

  return (
    <div>
      <div><h1>{title}</h1>{edit ? <button type="button"><Link to="/user/recipes/editform" state={{recipe: {recipe}}}>Edit Recipe</Link></button>:null}</div>
        <p>
          Cuisine: {genre}
        </p>
        <p>
          Time Commitment: {time}
        </p>
        <p>
          Serving Size: {size}
        </p>
        <p>Ingredients:</p>
        <ul>
          {ingredients.map(ing => <li>{ing}</li>)}
        </ul>
        <p>Instructions:</p>
        <ol>
          {instructions.map(inst => <li>{inst}</li>)}
        </ol>
        <img src={image} alt = "dish"/>

    </div>
  );
}

export default Recipe;