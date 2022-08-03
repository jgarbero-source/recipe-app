import {useState} from "react";
import { Link } from "react-router-dom";
import { Box, Card, CardActions, CardContent } from "@mui/material";
import Review from "./Review"

function Recipe({user, recipe, edit}) {
  const [showInfo, setShowInfo] = useState(false)
  const [showReviews, setShowReviews] = useState(false)
  const { ingredients, instructions, genre, time, size, title, image, reviews} = recipe;
  
  const length = reviews.length

  function averageRating(){
    let sum = null;
    reviews.forEach((rev)=>{
      sum += rev.rating;
    })
    return `Average Rating of ${parseFloat(sum/length)}/5, with ${length} Review(s)`
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
  
    <Card sx={{ minWidth: 275}} variant="outlined" style={{backgroundColor: "#1b9999", width:"100"}}>
    <CardContent>
      {edit ? <div>
        <h2>{title}</h2> 
        <button type="button"><Link to="/user/recipes/editform" state={{recipe: {recipe}}}>Edit Recipe</Link></button>
        </div>
        :
        <h2>{title}</h2>}
        <button onClick={handleDetails}>{showInfo ? "Hide Details": "Show Details"}</button>
        {showInfo ? <div>
        <h4>by {recipe.user.username}</h4>
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
        <Box marginLeft={65} marginRight={56}>
          <ul>
            {ingredients.map(ing => <li>{ing}</li>)}
          </ul>
        </Box>
        <p>Instructions:</p>
        <ol>
          {instructions.map((inst, index) => <li key ={index}>{inst}</li>)}
        </ol>
        </div> : null}
        <img src={image} alt = "dish"/>
        <div>
        <div>{length>0 ? averageRating(): "No Reviews"}
        </div><div>
        <button onClick={handleReviews}>{showReviews ? "Hide Reviews": "Reviews"}</button>
        </div>
        {showReviews ? <div>{recipe.reviews.map(review => <Review key = {review.id} description = {review.description}/>)}</div>
        : null}
        {!edit ? <button><Link to="/user/recipes/editform">Write a Review</Link></button> : null}
    </div>
    </CardContent>
  </Card>
  );
}

export default Recipe