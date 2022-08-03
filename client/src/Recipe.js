import {useState} from "react";
import { Link } from "react-router-dom";
import Review from "./Review"

function Recipe({user, recipe, edit}) {
  const [showInfo, setShowInfo] = useState(false)
  const [showReviews, setShowReviews] = useState(false)
  const { ingredients, instructions, genre, time, size, title, image, reviews} = recipe;

  function averageRating(){
    if (reviews) {
    let sum = null;
    reviews.forEach((rev)=>{
      sum += rev.rating;
    })
    return parseFloat(sum/reviews.length)}
    return "No Reviews"
  }

  function handleSubmitReview(){

  }

  function handleDetails(){
    setShowInfo(!showInfo)
  }
  function handleReviews(){
    setShowReviews(!showReviews)
  }
  return (
    <div>
      {edit ? <div>
        <h2>{title}</h2> 
        <button type="button"><Link to="/user/recipes/editform" state={{recipe: {recipe}}}>Edit Recipe</Link></button>
        </div>
        :
        <h2>{title}</h2>}
        <button onClick={handleDetails}>{showInfo ? "Hide Details": "Show Details"}</button>
        {showInfo ? <div>
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
          {instructions.map((inst, index) => <li key ={index}>{inst}</li>)}
        </ol>
        </div> : null}
        <img src={image} alt = "dish"/>
        <div>
        <div>Average Rating: {averageRating()}
        <br/>
        <button onClick={handleReviews}>{showReviews ? "Hide Reviews": "Reviews"}</button>
        </div>
        {showReviews ? <div>{recipe.reviews.map(review => <Review key = {review.id} description = {review.description}/>)}</div>
        : null}
        {!edit ? <button><Link to="/user/recipes/editform">Write a Review</Link></button> : "Login or Create an Account to Post a Review for this Recipe"}
    </div>
    </div>
  );
}

export default Recipe