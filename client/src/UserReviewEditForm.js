import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function UserReviewEditForm({review}) {
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState([])

  useEffect(()=> {
    async function start(){
      let starterFormData = {
      "rating": location.state.review.review.rating,
      "description": location.state.review.review.description
    };
    console.log(starterFormData)
    setFormData(starterFormData)}
    start()
  }, [])

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`/reviews/${location.state.review.review.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData)
    })
    .then((r) => {
      if (r.ok) {
        r.json().then((review) => 
        {
          console.log(review)
          navigate(`/user/reviews`);
        })
      } else {
        r.json().then(json => setErrors(Object.entries(json.errors)))
      }
    });
  }

  function handleDelete(e) {
    e.preventDefault();
    fetch(`/reviews/${location.state.review.review.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      }
    })
    .then((r) => {
      if (r.ok) {
          navigate(`/user/reviews`);
      } else {
        r.json().then(json => setErrors(Object.entries(json.errors)))
      }
    });
  }

  function handleChange(e) {
    const { value, name } = e.target;
    console.log(value)
    setFormData({ ...formData, [name]: value });
  }
  function goBack(e) {
    e.preventDefault();
    navigate(`/user/reviews`);
  }

  return (
    <div className="card">
      {errors?errors.map(e => <div key={e[0]}>{e[1]}</div>):null}
      <form onSubmit={handleSubmit}>
        <label>
          Rating:
          <input
            type="number"
            min="1" max="5"
            name="rating"
            //placeholder={title}
            value={formData.rating}
            onChange={handleChange}
          />
        </label>
        <br/>
        <label>
          Review:
          <textarea
            name="description"
            //placeholder={image}
            value={formData.description}
            onChange={handleChange}
          />
        </label>
        <br/>
        <button>Save</button>
      </form>
      <button onClick={(e) => goBack(e)}>Back</button>
      <br/>
      <button onClick={(e)=> handleDelete(e)}>Delete Review</button>
    </div>
  );
}

export default UserReviewEditForm;
