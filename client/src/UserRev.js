import {Link} from 'react-router-dom'
import { useState, useEffect} from 'react'

function UserRev({ review, recipes, user}) {
  const [thisRec, setThisRec] = useState(null)
  const [theserecipes, setTheseRecipes] = useState(recipes)
  const [thisreview, setThisReview] = useState(review)

  useEffect(()=>{
    setTheseRecipes(recipes)
    setThisReview(review)
    console.log(recipes)
    theserecipes.forEach(rec => {
      if(rec.id === thisreview.recipe_id){
        console.log(thisreview.recipe_id)
        setThisRec(rec)
        console.log(thisRec)
      }
    })
  },[])

  return (
    <div><div>
      {thisRec? <div>
        <img src = {thisRec.image}/>
        <p>{thisRec.title} "by" {thisRec.user.username}</p>
        </div> : null}
      <p>Your Rating: {review.rating}/5</p>
      <p>Your Review: {review.description}</p>
    </div>
    <button><Link to='/user/reviews/:id' state={{review:{review}}}>Edit Review</Link></button>
    </div>
  );
}

export default UserRev;


