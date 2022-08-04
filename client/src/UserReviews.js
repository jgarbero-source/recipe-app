import { useEffect, useState } from "react";
import UserRev from "./UserRev.js";

function UserReviews({ user }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`/users/${user.id}`).then((resp) => {
      if (resp.ok) {
        resp.json().then((r) => {
          setReviews(r.reviews);
        });
      }
    });
  }, []);

  return (
    <div>
      {reviews.length > 0 ? (
        <div>
          {reviews.map((review) => (
            <UserRev key={review.id} review={review}/>
          ))}
        </div>
      ) : (
        <h3>
          You have no reviews! Go peruse the recipes and create one there.
        </h3>
      )}
      {console.log(reviews)}
    </div>
  );
}

export default UserReviews;
