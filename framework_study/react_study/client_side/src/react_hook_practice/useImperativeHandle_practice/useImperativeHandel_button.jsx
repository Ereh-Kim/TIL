import React from 'react'
import { useState, forwardRef, useImperativeHandle } from "react"

const useImperativeHandle_button = forwardRef((props,  ref)=>{

    const [state, update_method] = useState(false)

    useImperativeHandle(ref,()=>({

        testing(){
            update_method(!state)}
        

    }))

    return(

        <div>
        <p> State : {state ? 'this is true' : 'this is false'} </p>
        <button onClick={()=>{

            update_method(!state)

        }}> Switching State </button>
        </div>

        )

})

export default useImperativeHandle_button