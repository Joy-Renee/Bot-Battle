// import Profile from "./Profile"
import ViewMore from "./ViewMore"
import App from "../App"


const routes = [
    {
        path: "/Bot-Battle",
        element: <App />
        
    },
    {
        path: "/viewmore/:id",
        element: <ViewMore />
    }
    
]

 export default routes