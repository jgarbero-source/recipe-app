import { useState, useEffect} from 'react'

function Review({review}) {
  const [thisUser, setThisUser] = useState({})

  useEffect(()=>{
    fetch(`/users/${review.user_id}`)
    .then(resp => resp.json())
    .then(r => setThisUser(r))
  },[])

  return (
    <div>
    <div>
      <p>Rating: {review.rating}/5</p>
      <p>
        {review.description}
      </p> 
    </div>
    {<p>Written by: {thisUser.username}</p>}
    <br/>
    </div>  
  )
}

export default Review