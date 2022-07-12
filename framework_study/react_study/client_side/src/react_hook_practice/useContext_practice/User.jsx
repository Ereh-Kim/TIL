import React, {useContext} from "react"
import { Appcontext } from "./useContext"


const User = () => {

    const { username } = useContext(Appcontext)

    return(
        <div>
            User : {username}
        </div>
    )
} 

export default User