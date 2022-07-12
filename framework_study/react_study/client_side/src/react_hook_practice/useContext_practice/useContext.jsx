import React, {useState, createContext } from "react"
import Login from './Login'
import User from './User'

export const Appcontext = createContext(null)

const UseContext_component = () => {

    const [username, setUsername] = useState("")

    return(
        <div>

            <Appcontext.Provider value={{ username, setUsername }}>
            <Login/>
            <User/>
            </Appcontext.Provider>

        </div>
    )

}
// useContext 는

// 각 component 에 props 를 일일이 전달하는 것이 아닌,

// context 객체를 통해, import 되어서 랜더링 되는 component 마다

// props 의 관계성에 대해 고민하고 투자하기 보단, 

// context 객체로 가져와서 작은 단위의 component에서 고민할 수 있게 한다.

// provider 태그의 value 값은 context 객체의 property 그리고 

// (provider 태그 안에) import 되는 component의 props 값을 제공한다

export default UseContext_component