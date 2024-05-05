
import { NavLink } from "react-router-dom"

function ViewMore() {
    return(
        <div>
            <NavLink
                to= "/viewmore"
                className= "viewmore"
            >
                View More
            </NavLink>
        </div>
    )
}

export default ViewMore