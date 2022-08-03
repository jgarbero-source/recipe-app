import { useState } from "react";
import { useNavigate } from "react-router-dom";


function UserEditForm({ user }) {

    const navigate = useNavigate()
    const { avatar, username, password, bio } = user
    let starterFormData = {
        "avatar": avatar,
        "username": username,
        "password": password,
        "bio": bio
    }
    const [formData, setFormData] = useState(starterFormData);

    function handleSubmit(e) {
        e.preventDefault()
        fetch(`/users/${user.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => console.log(data))
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
            <form onSubmit={handleSubmit}>
                <img src={formData.avatar} alt="avatar pic"/>
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
                    <input type="text" name="password" placeholder={password} value={formData.password} onChange={handleChange} />
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