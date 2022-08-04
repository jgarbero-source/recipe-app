import {Link} from 'react-router-dom'

function UserRev({ review }) {
  return (
    <>
    <div>
      {/* <p>{review.recipe.title} by {review.user.username}</p> */}
      <p>Rating: {review.rating}/5</p>
      <p>{review.description}</p>
    </div>
    <button><Link to='/user/reviews/:id' state={{review:{review}}}>Edit Review</Link></button>
    </>
  );
}

export default UserRev;
