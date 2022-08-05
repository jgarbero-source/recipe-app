import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function NewReviewForm({ recipe, user }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    function start() {
      if(!user){
      navigate("/");
      alert("Please log in or create an account to review recipes.")}
      else{
        if(location){
        if (location.state.user.user.id === location.state.recipe.recipe.user.id) {
          navigate("/");
          alert("Hey silly, you can't review your own recipe. That's called BIAS.")
        }}
        let starterFormData = {
        user_id: location.state.user.user.id,
        recipe_id: location.state.recipe.recipe.id,
        rating: 1,
        description: "",
      };
      setFormData(starterFormData)}
    }
    
    start();
  }, []);

  function handleChange(e) {
    const { value, name } = e.target;
    console.log(value);
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(formData)
    fetch('/reviews', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(formData)
    }).then((r) => {
      if (r.ok) {
        r.json().then((review) => {
          console.log(review);
          navigate(`/user/reviews`);
        });
      } else {
        r.json().then((json) => setErrors(Object.entries(json.errors)));
      }
    });
  }

  return (
    <div>
      {errors ? errors.map((e) => <div key={e[0]}>{e[1]}</div>) : null}
      <form onSubmit={handleSubmit}>
        <label>Rating (out of 5)</label>
        <input
          type="number"
          name="rating"
          min="1"
          max="5"
          value={formData.rating}
          onChange={handleChange}
        />
        <label>Review</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
        <br />
        <button>Submit Review</button>
      </form>
    </div>
  );
}

export default NewReviewForm;
