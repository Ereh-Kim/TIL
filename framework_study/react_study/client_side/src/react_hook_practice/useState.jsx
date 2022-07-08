import React, {useState} from "react";

const UseState_component = () => {

    // let state = 0;
    // state 에 대한 잘못된 접근

    const [ state, supported_update_mehtod ] = useState(1)
    // 해당 선언을 통해서,
    // state 의 값이 정해진 채로 state 를 반환하고 ,
    // setState 에 역할에 해당하는 함수 를 반환한다


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