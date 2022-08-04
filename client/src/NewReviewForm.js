import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Alert } from "@mui/material";
function NewReviewForm({ recipe }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    function start() {
      let starterFormData = {
        user_id: 1,
        recipe_id: location.state.recipe.recipe.id,
        rating: 0,
        description: "",
      };
      setFormData(starterFormData);
    }

    start();

    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((client) => {
          console.log(client);
          if (client != null) {
            console.log("did it")
          } else {
            navigate("/");
            alert("Please log in or create an account to review recipes.");
          }
        });
      } else {
        console.log("We're not rendering nothing pal");
      }
    });
  }, []);

  function handleChange(e) {
    const { value, name } = e.target;
    console.log(value);
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit() {}

  return (
    <div>
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
