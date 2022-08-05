import { Link, useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import Card from '@mui/material/Card';
import Button from '@mui/material/Button'
import CardContent from '@mui/material/CardContent';
//import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Alert, Box } from "@mui/material";
import { styled } from '@mui/styles';


function User( { user, deleteUser } ) {
    const [errors, setErrors] = useState(false)
    const navigate = useNavigate()
    const params = useParams()
    const [alert, setAlert] = useState(false)

    const MyButton = styled(Button)({
        color: 'red'
    })

    const MySecondButton = styled(Button)({
        color: 'green'
    })

    function handleDelete() {
        fetch(`/users/${user.id}`, {
            method: "DELETE",
            headers: {'Content-Type': 'application/json'}
        })
        .then(res => {
            if(res.ok){
                deleteUser(params.id)
                navigate('/')
            } else {
                res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
            }
        })
    }

    function deleteAlert() {
        setAlert(true)
    }

    function undoDelete() {
        setAlert(false)
    }

    if(errors) return <h1>{errors}</h1>

    let userScreen;
    if (user) {
        const { avatar, username, password, bio } = user
        userScreen =             
            <CardContent className="card-content">
                <img src={avatar} alt="avatar pic"/>
                <Typography className="card-desc" variant="subtitle1">{`Username: ${username}`}</Typography>
                <Typography className="card-desc" variant="body1" color="text.secondary">{`Bio: ${bio}`}</Typography>
                <Box sx={{ p: 1 }}>
                    <Button><Link to={`/user/edit`} className="button">Edit Profile</Link></Button>
                </Box>
                <Box sx={{ p: 1 }}>
                <Button><Link to={`/user/recipes`} className="button">My Recipes</Link></Button>
                </Box>
                <Box sx={{ p: 1 }}>
                <Button><Link to={`/user/reviews`} className="button">My Reviews</Link></Button>
                </Box>
                <MyButton onClick={deleteAlert}>
                        Delete user
                </MyButton>
                { alert? 
                <Alert severity="warning"
                action={
                    <div>
                        <MySecondButton onClick={undoDelete}>
                            Keep my Profile
                        </MySecondButton>
                        <MyButton onClick={handleDelete}>
                            Delete my Profile
                        </MyButton>
                    </div>
                }
                > 
                    Are you sure you want to delete your profile?
                </Alert>
                : null 
                }
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