import "./profile.css";
import { Link } from "react-router-dom";

function Profile({bot}) {

    return (
        <div className="profile">
            <form className="form" >
                <img src= {bot.avatar_url} />
                <h3>{bot.name}</h3> <br></br>
                <h5>{bot.catchphrase}</h5>
                <button>
                    view more
                </button>
            </form>
           
        </div>
    );
};

export default Profile