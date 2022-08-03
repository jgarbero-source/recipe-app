import { useEffect, useState } from 'react'
import Review from "./Review"



function Reviews() {
  const [reviews, setReviews] = useState([]);


  useEffect(() => {
    async function goGetEm(){

      fetch("/reviews")
      .then((r) => r.json())
      .then((r)=> {
        setReviews(r);
        console.log(r)
      })}
      goGetEm();
  }, [])

  return (
    <div>
    {reviews.map(review => 
  <Review key={review.id} user_id={review.user_id} review={review} edit={false}/>
  )}
    </div>
  );

}

export default Reviews;
