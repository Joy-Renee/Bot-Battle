
import { useEffect, useState } from "react";
import {  useNavigate, useParams } from "react-router-dom";

function ViewMore() {
    const [bot, setBot] = useState({})
    const params = useParams();
    const botId = params.id;

    useEffect(() => {
        fetch(`https://json-server-bots.onrender.com/bots/${botId}`)
        .then(r => r.json())
        .then(data => setBot(data)) 
        .catch(error => console.error(error))
    }, [botId]);

   

    // if(!bot.name){
    //     return <h1>Loading...</h1>;
    // };

    const nav = useNavigate()

    function goBack() {
        nav("/")
    }

    function handleClick(bot) {
        fetch("https://json-server-bots.onrender.com/bots/army", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(bot)
          })
          .then(res => res.json())
        .then(data => {
            console.log(data);
            
            nav("/")
        })
        console.log("clicked")
    }
    

    return(
        <>
       
            
                <div className="card " style={{width: "300px"}} >
                    <img src={bot.avatar_url} className="card-img-top" alt={bot.name} />
                    <div className="card-body">
                        <div className="card-text" style={{fontWeight: "bold"}} >
                            <div>Name: {bot.name}</div>
                            <div>Health: {bot.health}</div>
                            <div>Damage: {bot.damage}</div>
                            <div>Armor: {bot.armor}</div>
                            <div>Bot_class: {bot.bot_class}</div>
                            <br></br>
                            <div>
                                <button onClick={() =>handleClick(bot)}>Enlist</button>
                            </div>
                            <br></br>
                            <div>
                            <button onClick={goBack}>Go Back</button>
                            </div>
                        
                        </div>
                    </div>
                </div>
            
        </>
    );
};

export default ViewMore;