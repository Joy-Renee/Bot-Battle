import "./Profile.css";
import { Link } from "react-router-dom";

function Profile({bot}) {

    return (
    
        <div className="profile">
            <form className="form" >
                <div className="image">
                    <img src= {bot.avatar_url} />
                </div>

                <div>
                    <h3> Name: {bot.name}</h3> <br></br>
                    <h5>{bot.catchphrase}</h5>
                    <button style={{backgroundColor: "green"} }>
                    <Link to= {`/viewmore/${bot.id}`} style={{color: "white"} }> View specs </Link>
                    </button>
                </div>
                
            </form>
           
        </div>
    );
};

export default Profile