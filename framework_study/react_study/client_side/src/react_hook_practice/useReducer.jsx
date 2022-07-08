import React, { useReducer } from "react";


const reducer = (state, action) => {
    switch (action.type){
    case "increment":
        return {count: state.count + 1, showValue: state.showValue}

    }
}
// dispatch 와 짝을 이룰 method 를 생성한다

// 이 때, 해당 포맷을 지키지 않으면 에러가 발생한다

// state 와 별개로, action 이라는 매개변수를 꼭 넣어야 하는데,

// action.type 에 따라 (switch 문을 활용해서) 
// return 값을 달리 할 수 있기 때문이다

const UseReducer_component = () => {


    const [state, dispatch] = useReducer(reducer, 
        {count: 0, showValue: true})
    // 해당 선언을 통해서,
    // state 의 값이 정해진 채로 state 를 반환하고 ,
    // dispatch 매서드 를 반환한다

    return(
          <div>
                <p>{state.count}</p>
                <button onClick={
                    ()=>{
                        dispatch({ type: 'increment' })
                    }

                    // dispatch 매서드를 호출하거나
                    // onClick 이벤트로 지정해야 될 때에는
                    
                    // object (객체) => { type: switch 문에서 return 에 해당하는 type - case }
                    // 를 넣어야 한다

                }>updating</button>
                <p>{state.showValue}</p>
        </div>
    )

}

export default UseReducer_component