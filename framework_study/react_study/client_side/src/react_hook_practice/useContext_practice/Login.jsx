import React, {useContext} from "react"
import { Appcontext } from "./useContext"

const Login = () => {

    const { setUsername } = useContext(Appcontext)
    //                          ㄴ> context 객체의 현재 값을 반환한다

    return(
        <div>
            <input 
                type="text"
                onChange={(event)=>{
                    setUsername(event.target.value)
                }} />
        </div>
    )

}

export default Login