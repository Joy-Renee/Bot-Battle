
import { useEffect, useState } from "react";
import Profile from "./profile";

function Home() {
    const [bots, setData] = useState([])

    useEffect(() => {
        fetch("https://json-server-bots.onrender.com/bots")   //("https://json-server-bots.onrender.com/bots")
        .then(res => res.json())
        .then(data =>{
            setData(data);
        })
        .catch(error => console.log("Oops!! There's an error"))
    }, [])
    console.log(bots);
    console.log();

    const profileList = bots.map((bot) => {
      return <Profile key={bot.id} bot={bot} />
    })

    return(
      <>

      <header>
        <h1>Welcome to Bot Battle</h1>
      </header>

      <main>
        {profileList}
      </main>
        

        
      </>
    )
}

export default Home