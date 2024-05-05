import "./profile.css";

function Profile({bot}) {

    function handleClick() {
        
            console.log("Clicked")
        
    } 
    return (
        <div className="profile">
            <form className="form" >
                <img src= {bot.avatar_url} />
                <h3>{bot.name}</h3> <br></br>
                <h5>{bot.catchphrase}</h5>
                <button onClick={handleClick}>View more</button>
            </form>
           
        </div>
    );
};

export default Profile