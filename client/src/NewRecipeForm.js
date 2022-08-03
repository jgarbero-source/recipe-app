import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function NewRecipeForm({user}) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState([]);
  useEffect(() => {
    let starterFormData = {
      title: "",
      ingredients: [],
      instructions: [],
      genre: "",
      time: "",
      size: "",
      image: ""
    };
    setFormData(starterFormData);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    fetch('/recipes', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(readyNewRecipe())
    }).then((r) => {
      if (r.ok) {
        r.json().then((recipe) => {
          console.log(recipe);
          navigate(`/user/recipes`);
        });
      } else {
        r.json().then((json) => setErrors(Object.entries(json.errors)));
      }
    });
  }

  function readyNewRecipe(){
    let toSend = formData
    toSend["ingredients"] = toSend.ingredients.split(/\r?\n/)
    toSend["instructions"] = toSend.instructions.split(/\r?\n/)
    toSend.user_id = user.id
    console.log(toSend)
    return toSend
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
      {errors ? errors.map((e) => <div key={e[0]}>{e[1]}</div>) : null}
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            placeholder={"Recipe Title"}
            value={formData.title}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Image:
          <img src={formData.image} alt="dishtoedit" />
          <input
            type="text"
            name="image"
            placeholder={"Image Url"}
            value={formData.image}
            onChange={handleChange}
          />
        </label>
        <br />
        Ingredients:
        <label>
          <textarea
            name="ingredients"
            placeholder={"List your ingredients here, on separate lines"}
            value={formData.ingredients}
            onChange={handleChange}
          />
        </label>
        <br />
        Instructions:
        <label>
          <textarea
            name="instructions"
            placeholder={"List your instructions here, on separate lines"}
            value={formData.instructions}
            onChange={handleChange}
          />
        </label>
        <br />
        Quisine:
        <label>
          <input
            type="text"
            name="genre"
            placeholder={"Specify the type of quisine"}
            value={formData.genre}
            onChange={handleChange}
          />
        </label>
        <br />
        Time:
        <label>
          <input
            type="text"
            name="time"
            placeholder={"Specify prep and cooking/baking time"}
            value={formData.time}
            onChange={handleChange}
          />
        </label>
        <br />
        Size:
        <label>
          <input
            type="text"
            name="size"
            placeholder={"Specify how many servings"}
            value={formData.size}
            onChange={handleChange}
          />
        </label>
        <br />
        <button>Save</button>
      </form>
      <button onClick={(e) => goBack(e)}>Discard Recipe</button>
    </div>
  );
}

export default NewRecipeForm;
