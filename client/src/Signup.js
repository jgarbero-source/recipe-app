import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

function SignUp() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        bio: ''
    })
    const [errors, setErrors] = useState([])
    const navigate = useNavigate();

    const {username, password, bio} = formData

    function handleChange(e) {
        const { name, value } = e.target
        setFormData({...formData, [name]: value })
    }

    function handleSubmit(e) {
        e.preventDefault()
        const user = {
            username,
            password,
            bio
        }

        fetch('/users',{
            method: "POST",
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(user)
        })
        .then(res => {
            if(res.ok){
                res.json().then(user => {
                    navigate(`/login`)
                })
            } else {
                res.json().then(json => setErrors(Object.entries(json.errors)))
            }
        })
        setFormData({
            username: '',
            password: '',
            bio: ''
        })
    }

    return(
        <>
        <h2>Sign up</h2>
        <form onSubmit={handleSubmit}>
            <label>
                Username
            </label>
            <input type='text' name='username' value={username} onChange={handleChange} />

            <label>
                Password
            </label>
            <input type='password' name='password' value={password} onChange={handleChange} />

            <label>
                Bio
            </label>
            <textarea rows="2" cols="25" name='bio' value={bio} onChange={handleChange} />

            <input type="submit" value="Sign up!" />
        </form>
        {errors? errors.map(error => <div> {error[0]} {error[1]} </div>) : null }
        </>
    )
}

export default SignUp