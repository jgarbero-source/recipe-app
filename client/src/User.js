import { Link, useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import Card from '@mui/material/Card';
import Button from '@mui/material/Button'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function User( { user, deleteUser } ) {
    const [errors, setErrors] = useState(false)
    const navigate = useNavigate()
    const params = useParams()
    
    

    function handleDelete() {
        console.log("delete me baby... ;)")
        fetch(`/users/${user.id}`, {
            method: "DELETE",
            headers: {'Content-Type': 'application/json'}
        })
        .then(res => {
            if(res.ok){
                deleteUser(params.id)
                navigate('/')
            } else {
                res.json().then(data => setErrors(data.error))
            }
        })
    }

    let userScreen;
    if (user) {
        const { username, password, bio } = user
        userScreen =             
            <CardContent className="card-content">
                <Typography className="card-desc" variant="subtitle1">{`Username: ${username}`}</Typography>
                <Typography className="card-desc" variant="body1" color="text.secondary">{`Bio: ${bio}`}</Typography>
                <Link to={`/user/edit`} className="button">Edit Profile</Link>
                <Link to={`/user/recipes`} className="button">My Recipes</Link>
                <Button onClick={handleDelete}>Delete Profile</Button>
            </CardContent>
    } else {
        userScreen = <h1>No user is logged in.</h1>
    }

    return (

        <div className="container-bio">
            <Card id="bio-card">
                {userScreen}
            </Card>
        </div>
    )
}

export default User;

{/* <Card id="bio-card" >
<CardContent className="card-content">
    <Typography className="card-desc" variant="subtitle1">{`Username: ${username}`}</Typography>
    <Typography className="card-desc" variant="body1" color="text.secondary">{`Bio: ${bio}`}</Typography>
    <Link to={`/user/edit`} className="button">Edit Profile</Link>
    <Link to={`/user/recipes`} className="button">My Recipes</Link>
    <Button onClick={handleDelete}>Delete Profile</Button>
</CardContent>
</Card> */}
