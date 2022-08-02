import { useState } from "react";
import { useNavigate } from "react-router-dom";

function RecipeEditForm({ recipe }) {
  const navigate = useNavigate();
  const { title, ingredients, instructions, genre, time, size, image } = recipe;

  let starterFormData = {
    title: title,
    ingredients: ingredients,
    instructions: instructions,
    genre: genre,
    time: time,
    size: size,
    image: image,
  };
  const [formData, setFormData] = useState(starterFormData);

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`/users/${recipe.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    navigate(`/`);
  }

  function handleChange(e) {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
  }
  function goBack(e) {
    e.preventDefault();
    navigate(`/user/recipes`);
  }

  return (
    <div className="card">
      <form onSubmit={handleSubmit}>
        <label>
          title:
          <input
            type="text"
            name="title"
            placeholder={title}
            value={formData.title}
            onChange={handleChange}
          />
        </label>
        <label>
          image:
          <img src={image} />
          <input
            type="text"
            name="image"
            placeholder={image}
            value={formData.image}
            onChange={handleChange}
          />
        </label>
        <label>
          ingredients:
          <input
            type="text"
            name="ingredients"
            placeholder={ingredients}
            value={formData.ingredients}
            onChange={handleChange}
          />
        </label>
        instructions:
        <label>
          <input
            type="text"
            name="instruction"
            placeholder={instructions}
            value={formData.instructions}
            onChange={handleChange}
          />
        </label>
        genre:
        <label>
          <input
            type="text"
            name="genre"
            placeholder={genre}
            value={formData.genre}
            onChange={handleChange}
          />
        </label>
        time:
        <label>
          <input
            type="text"
            name="time"
            placeholder={time}
            value={formData.time}
            onChange={handleChange}
          />
        </label>
        size:
        <label>
          <input
            type="text"
            name="size"
            placeholder={size}
            value={formData.size}
            onChange={handleChange}
          />
        </label>
        <button>Save</button>
      </form>
      <button onClick={(e) => goBack(e)}>Back</button>
    </div>
  );
}

export default RecipeEditForm;
