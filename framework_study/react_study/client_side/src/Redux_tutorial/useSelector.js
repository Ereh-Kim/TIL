import { useSelector, useDispatch } from "react-redux";

import {increment, decrement} from "./createSlice"

const Source = () => {

    const Storage_Data = useSelector( 
    // userSelector 는 Store 에서의 데이터를 
    // 추출하게끔 하는 Redux-Toolkit ( API / Hooks ) 이다        

        (Extract_data) => Extract_data )
    //      ㄴ> useSelector 는
    //      
    //          Store 에서의 데이터를 어떻게 정제해서 가져올지에 대한 
    //          
    //          (Selector)함수를 인수로 삼는다

    console.log(Storage_Data)


    const dispatch = useDispatch()
    // dispatch function 을 반환한다
    
    // 공식문서에서는
    // action 을 보내는 dispatch function/method 가
    // store 의 상태를 변경하는 유일한 방법이라고 합니다
    
    // 유일하게 상태 변경을 일으키는
    // (Store 의 상태 변화를 일으키는) 방법이라고 한다

    return(

        <div>
        
        
        <div>{Storage_Data}</div>
        
        <button onClick={()=>{
                dispatch({type: "A", payload: 1})}
            }></button>

        {/* dispatch( action ) 

            ㄴ> 여기서 action 은,
                앱의 변경사항을 기술하는 평범한 객체이다.
        
                dispatch function 은 action 객체를,
                무조건 인수로 보내야 제기능을 한다.

        
        */}

        </div>

        )
}

export default Source