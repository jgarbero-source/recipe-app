import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function RecipeEditForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState([])
  useEffect(()=> {
    let starterFormData = {
      "title": location.state.recipe.recipe.title,
      "ingredients": location.state.recipe.recipe.ingredients,
      "instructions": location.state.recipe.recipe.instructions,
      "genre": location.state.recipe.recipe.genre,
      "time": location.state.recipe.recipe.time,
      "size": location.state.recipe.recipe.size,
      "image": location.state.recipe.recipe.image
    };
    console.log(starterFormData)
    setFormData(starterFormData)
  }, [])


  const ingredients = location.state.recipe.recipe.ingredients;
  const instructions = location.state.recipe.recipe.instructions;

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`/recipes/${location.state.recipe.recipe.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(readyUpdateRecipe())
    })
    .then((r) => {
      if (r.ok) {
        r.json().then((recipe) => 
        {
          console.log(recipe)
          navigate(`/user/recipes`);
        })
      } else {
        r.json().then(json => setErrors(Object.entries(json.errors)))
      }
    });
  }

  function readyUpdateRecipe(){
    let toSend = formData
    //toSend["ingredients"] = toSend.ingredients.split(/\r?\n/)
    //toSend["instructions"] = toSend.instructions.split(/\r?\n/)
    console.log(toSend)
    return toSend
  }

  function handleDelete(e) {
    e.preventDefault();
    fetch(`/recipes/${location.state.recipe.recipe.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      }
    })
    .then((r) => {
      if (r.ok) {
          navigate(`/user/recipes`);
      } else {
        r.json().then(json => setErrors(Object.entries(json.errors)))
      }
    });
  }

  function handleChange(e) {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
  }
  function handleArrayChange(e) {
    const { value, name } = e.target;
    console.log(value)
    setFormData({ ...formData, [name]: value });
  }
  function goBack(e) {
    e.preventDefault();
    navigate(`/user/recipes`);
  }

  return (
    <div className="card">
      {errors?errors.map(e => <div key={e[0]}>{e[1]}</div>):null}
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            //placeholder={title}
            value={formData.title}
            onChange={handleChange}
          />
        </label>
        <br/>
        <label>
          Image:
          <img src={formData.image} alt ="dishtoedit"/>
          <input
            type="text"
            name="image"
            //placeholder={image}
            value={formData.image}
            onChange={handleChange}
          />
        </label>
        <br/>
          Ingredients:
        <label>
          <textarea
            name="ingredients"
            //placeholder={ingredients}
            value={formData.ingredients}
            onChange={handleArrayChange}
          /></label>
        <br/>
        Instructions:
        <label><textarea
            name="instructions"
            //placeholder={ingredients}
            value={formData.instructions}
            onChange={handleArrayChange}
          /></label>
        <br/>
        Quisine:
        <label>
          <input
            type="text"
            name="genre"
            //placeholder={genre}
            value={formData.genre}
            onChange={handleChange}
          />
        </label>
        <br/>
        Time:
        <label>
          <input
            type="text"
            name="time"
            //placeholder={time}
            value={formData.time}
            onChange={handleChange}
          />
        </label>
        <br/>
        Size:
        <label>
          <input
            type="text"
            name="size"
            //placeholder={size}
            value={formData.size}
            onChange={handleChange}
          />
        </label>
        <br/>
        <button>Save</button>
      </form>
      <button onClick={(e) => goBack(e)}>Back</button>
      <br/>
      <button onClick={(e)=> handleDelete(e)}>Delete Recipe</button>
    </div>
  );
}

export default RecipeEditForm;
