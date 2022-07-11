import React, { useEffect, useState } from "react";
import axios from "axios" 

const UseEffect_component = () => {

    const [state, update] = useState(0)
    const [test, test_update] = useState(0)
    // const [request_controller, trigger] = useState(ture)

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts/1",{
            params : {
                lat : 1,
                lon : 1,
                appid : 'f4f37e0b13d3ce2aad89699e5a2609a9'
            }
        // update(state + 1)
        }).then((result)=>{
            update(result.data.userId)
        })
        .then(()=>{
            // console.log(state, 'state_update')
            // console.log(test,'test_updated')
        })
        console.log(state)
    },[state]
    // 인자로, dependency 를 추가하는데

    // 이유인 즉슨, useEffect가 state 나 props 값이 변하면
    // react에 의해 브라우저 전역이 리랜더링하기 때문에
    // 리랜더링 할 때에도 useEffect 가 호출되기 때문에
    // 무한 루프를 만들어, 난감해진다

    // 그래서 dependency 인자에,
    // 커스텀아이즈된 state 값을 넣어,

    // useEffect 의 리랜더링 조건을 => 
    // 해당 state 값만이 바뀌면 랜더링 되도록
    // 조건을 좁힌 것이다.

    )
    // 랜더링이 완료된 후에 useeffect는 호출된다고 한다 즉,
    // 초기 브라우저에 랜더링이 때 와
    // state 과 props 의 값이 변해서 리랜더링이 된 후에 useEffect 매서드는 호출된다
    
    //ㄴ> api 를 통해 가져온 초기 데이터 값을 반영하고자 할 때, 쓰임
    // , 그래서 useState 와 같이 많이 쓰임

    return(
          <div>
            {state}
            <button onClick={()=>{
                test_update(test + 1)
            }}></button>
        </div> 
    )

}

export default UseEffect_component