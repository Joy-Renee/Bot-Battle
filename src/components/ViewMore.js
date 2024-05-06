
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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

    return(
        <>

            
                <div className="card " style={{width: "300px"}} >
                    <img src={bot.avatar_url} class="card-img-top" alt={bot.name} />
                    <div className="card-body">
                        <p className="card-text" style={{fontWeight: "bold"}} >
                            <div>Name: {bot.name}</div>
                            <div>Health: {bot.health}</div>
                            <div>Damage: {bot.damage}</div>
                            <div>Armor: {bot.armor}</div>
                            <div>Bot_class: {bot.bot_class}</div>
                        </p>
                    </div>
                </div>
            
        </>
    );
};

export default ViewMore;