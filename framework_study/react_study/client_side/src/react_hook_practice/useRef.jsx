import React, { useRef } from "react";

const UseRef_component = () => {

    const inputRef = useRef(null)
    // 변경가능한 current property 를 지닌 ref 객체를 반환함

    const onClick = () => {
        inputRef.current.focus()
        // ref 객체를 전달한, input 태그를 하이라이트 해줌

        console.log(inputRef.current.value)
    }

    const deteching_change = () => {
        // console.log(inputRef.current.value)
    }

    return(
        <div>
        
        <input type="text" onChange={deteching_change} ref={inputRef} />
        {/* ref 객체를 전달하면, 해당 input 값이 변할 때마다 inputRef 의 current property 가 업데이트 됨 */}
        <button onClick={onClick}> button </button>

        </div> 
    )

}

export default UseRef_component