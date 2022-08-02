import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
//import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function User( { user } ) {
    const { username, bio } = user

    return (

        <div className="container-bio">
            <Card id="bio-card" >
                {/* <CardMedia
                    className="card-image"
                    component="img"
                    image={image}
                    alt="avatar"
                /> */}
                <CardContent className="card-content">
                    <Typography className="card-desc" variant="subtitle1">{`Username: ${username}`}</Typography>
                    <Typography className="card-desc" variant="body1" color="text.secondary">{`Bio: ${bio}`}</Typography>
                    <Link to={`/user/edit`} className="button">Edit Profile</Link>
                    <Link to={`/user/recipes`} className="button">My Recipes</Link>
                </CardContent>
            </Card>

        </div>
    )
}

export default User;
