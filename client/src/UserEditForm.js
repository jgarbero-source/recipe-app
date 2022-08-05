import { useState } from "react";
import { useNavigate } from "react-router-dom";


function UserEditForm({ user, updateUser }) {
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
        .then(res => {
            if(res.ok){
                res.json().then(updateUser)
                navigate('/')
            } else {
                res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
            }
        })
        navigate(`/`)
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
                    <input type="text" name="username" placeholder={username} value={formData.username} onChange={handleChange} />
                </label>
                    Password:
                <label>
                    <input type="password" name="password" placeholder={"Choose a new password carefully..."} value={formData.password} onChange={handleChange} />
                </label>
                    About Me:
                <label>
                    <textarea type="text" name="bio" placeholder={bio} value={formData.bio} onChange={handleChange} />
                </label>
                <button>Save</button>
            </form>
            {errors?errors.map(e => <h2 style={{color:'red'}}>{e.toUpperCase()}</h2>):null}
            <button onClick = {e=>goBack(e)}>Back</button>
        </div>
    )
}

export default UserEditForm;
