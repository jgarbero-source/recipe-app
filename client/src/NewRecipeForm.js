import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function NewRecipeForm({user}) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState([]);
  const [ingrTime, setIngrTime] = useState(false);
  const [instrTime, setInstrTime] = useState(false);
  const [baseInfoTime, setBaseInfoTime] = useState(true);

  const [ingrState, setIngrState] = useState("");
  const [instrState, setInstrState] = useState("");


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
    // toSend["ingredients"] = toSend.ingredients.split(/\r?\n/)
    // toSend["instructions"] = toSend.instructions.split(/\r?\n/)
    toSend.user_id = user.id
    console.log(toSend)
    return toSend
  }

  function handleChange(e) {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleArrayChangeOne(e){
    const { value } = e.target
    setIngrState(value);
    //console.log(value);
  }
  function handleArrayChangeTwo(e){
    const { value } = e.target
    setInstrState(value);
    //console.log(value);
  }

  function handlePickySubmitOne(e){
    e.preventDefault()
    const arr = formData.ingredients
    arr.push(ingrState);
    //console.log(arr)
    setFormData({...formData, ["ingredients"]: arr })
    setIngrState("")
    e.target.reset()
  }
  function handlePickySubmitTwo(e){
    e.preventDefault()
    const arr = formData.instructions
    arr.push(instrState);
    //console.log(arr)
    setFormData({...formData, ["instructions"]: arr })
    setInstrState("")
    e.target.reset()
  }

  function goBack(e) {
    e.preventDefault();
    navigate(`/user/recipes`);
  }

  function handleNextOne(){
    setBaseInfoTime(false)
    setIngrTime(true)
  }
  function handleNextTwo(){
    setInstrTime(true)
    setIngrTime(false)
  }

  return (
    <div className="card">
      {errors ? errors.map((e) => <div key={e[0]}>{e[1]}</div>) : null}
      {baseInfoTime ?
      <div><form onSubmit={handleNextOne}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            placeholder={"Recipe Title"}
            //value={formData.title}
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
            //value={formData.image}
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
            //value={formData.genre}
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
            //value={formData.time}
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
            //value={formData.size}
            onChange={handleChange}
          />
        </label>
        <br />
        <button>Add Ingredients</button>
      </form></div> : null}

    {ingrTime ?
      <div><form onSubmit = {handlePickySubmitOne}>
        <label>Ingredients:</label>
          <input
            type="text"
            name="ingredients"
            placeholder={"Ingredients..."}
            value = {ingrState}
            onChange = {handleArrayChangeOne}
          />
        <button>Add Ingredient</button>
        Please input your ingredients 1 at a time, by clicking the Add Ingredient button.</form>
      <button onClick = {handleNextTwo}>Add Instructions</button></div>
      : null }

    {instrTime ?
      <div><form onSubmit = {handlePickySubmitTwo}>
        <label>Instructions:</label>
          <input
            type ="text"
            name="instructions"
            placeholder={"Instructions..."}
            value = {instrState}
            onChange = {handleArrayChangeTwo}
          />
        <button>Add Step</button>
        Please input each step of your instructions 1 at a time, by clicking the Add Step button.</form>
      <button onClick = {handleSubmit}>Save Recipe!</button></div>
      : null }

      <button onClick={(e) => goBack(e)}>Discard Recipe</button>
    </div>
  );
}

export default NewRecipeForm;
