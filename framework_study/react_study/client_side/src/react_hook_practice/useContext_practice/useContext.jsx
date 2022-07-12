import React, {useState} from "react"
import Login from './Login'
import User from './User'

const UseContext_component = () => {

    const [username, setUsername] = useState("")

    return(
        <div>
            
            <Login setUsername = {setUsername} />
            <User username = {username} />

        </div>
    )

}

export default UseContext_component