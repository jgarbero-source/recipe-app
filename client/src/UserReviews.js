import { useEffect, useState } from "react";
import UserRev from "./UserRev.js";

function UserReviews({ user }) {
  const [reviews, setReviews] = useState([]);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch(`/users/${user.id}`).then((resp) => {
      if (resp.ok) {
        resp.json().then((r) => {
          setReviews(r.reviews);
        });
      }
    });
    fetch('/recipes').then((rec) => {
      if (rec.ok) {
        rec.json().then((r) => {
          setRecipes(r);
        });
      }
    });
  }, []);

  return (
    <div>
      {reviews.length > 0 ? (
        <div>
          {reviews.map((review) => (
            <UserRev key={review.id} review={review} recipes = {recipes}/>
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
