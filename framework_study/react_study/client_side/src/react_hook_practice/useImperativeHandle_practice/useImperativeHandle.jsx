import { useImperativeHandle, useRef ,useState } from "react";
import Button from './useImperativeHandel_button'

const useImperativeHandle_component = () => {

    const buttonRef = useRef(null)

    return(
        <div>
        <button onClick={()=>{buttonRef.current.testing()}}>child_button</button>
        <Button ref={buttonRef}/>
        </div>
    )

}

export default useImperativeHandle_component