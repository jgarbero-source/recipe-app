import {Link} from 'react-router-dom'
import { useState, useEffect} from 'react'

function UserRev({ review, recipes }) {
  const [thisRec, setThisRec] = useState({})

  useEffect(()=>{
    console.log(recipes)
    recipes.forEach(rec => {
      if(rec.id === review.recipe_id){
        setThisRec(rec)
      }
    });
  },[])

  return (
    <div><div>
      <img src = {thisRec.image}/>
      {<p>{thisRec.title} "by" {thisRec.user.username}</p>}
      <p>Your Rating: {review.rating}/5</p>
      <p>Your Review: {review.description}</p>
    </div>
    <button><Link to='/user/reviews/:id' state={{review:{review}}}>Edit Review</Link></button>
    </div>
  );
}

export default UserRev;


