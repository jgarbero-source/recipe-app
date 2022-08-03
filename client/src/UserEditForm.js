import { useState } from "react";
import { useNavigate } from "react-router-dom";


function UserEditForm({ user }) {
    const [errors, setErrors] = useState([])
    const navigate = useNavigate()
    const { avatar, username, bio, password } = user
    let starterFormData = {
        "avatar": avatar,
        "username": username,
        "password": password,
        "bio": bio
    }
    const [formData, setFormData] = useState(starterFormData);
    console.log(starterFormData)
    function handleSubmit(e) {
        e.preventDefault()
        console.log(formData)
        fetch(`/users/${user.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(formData)
        })
        .then((r) => {
            if (r.ok) {
              console.log(r.json())  
              navigate('/')
          } else {
            r.json().then(json => setErrors(Object.entries(json.errors)))
          }
        })
    }

    function handleChange(e) {
        const { value, name } = e.target
        setFormData({ ...formData, [name]: value })
    }
    function goBack(e) {
        e.preventDefault()
        navigate(`/user`)
    }

    return (
        <div className="card">
            {errors?errors.map(e => <div key={e[0]}>{e[1]}</div>):null}
            <form onSubmit={handleSubmit}>
                { avatar ? <img src={formData.avatar} alt="avatar pic"/> : null}
                <label>
                    Avatar:
                    <input type="text" name="avatar" placeholder={avatar} value={formData.avatar} onChange={handleChange} />
                </label>
                <label>
                    Username:
                    <input type="password" name="username" placeholder={username} value={formData.username} onChange={handleChange} />
                </label>
                    Password:
                <label>
                    <input type="password" name="password" placeholder={"Choose a new password carefully..."} value={formData.password} onChange={handleChange} />
                </label>
                    About Me:
                <label>
                    <textarea type="text" name="info" placeholder={bio} value={formData.bio} onChange={handleChange} />
                </label>
                <button>Save</button>
            </form>
            <button onClick = {e=>goBack(e)}>Back</button>
        </div>
    )
}

export default UserEditForm;