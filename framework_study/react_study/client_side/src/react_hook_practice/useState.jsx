import React, {useState} from "react";

const UseState_component = () => {

    // let state = 0;
    // state 에 대한 잘못된 접근

    const [ state, supported_update_mehtod ] = useState(1)
    // 해당 선언을 통해서,
    // state 를 선언하고,
    // setState 에 해당하는 method 를 생성할 수 있다


    const trigger = () => {
        supported_update_mehtod(state + 1)
    }

    const change_radio = (event) => {
        const newValue = event.target.value
        supported_update_mehtod(newValue)
        
    }

    return(
          <div>
                <input onChange={change_radio}/>
                {state}
                <button onClick={trigger}>update_button</button>    
        </div>
    )

}

export default UseState_component