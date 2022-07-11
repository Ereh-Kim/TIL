import { useLayoutEffect, useEffect, useRef, useState } from "react";

function useLayoutEffect_component (){

    const [ State, update_method] = useState(1)

    const Ref_object = useRef('test')

    useLayoutEffect(()=>{

       console.log('layout')

    })
    // useeffect 와 비슷하고 역할도 비슷하게 느껴지지만,
    // DOM 랜더링 이후에, 호출된다는 것에 있어서 차이가 확연하다

    useEffect(()=>{

        console.log('effect')

    })

    return (
        <div>

        <input 

        type="text" 
        ref={Ref_object}
        placeholder="enter here"
        value={Ref_object.current} />

        </div>
    )

}

export default useLayoutEffect_component