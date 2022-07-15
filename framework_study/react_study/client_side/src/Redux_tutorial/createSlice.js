import { createSlice } from "@reduxjs/toolkit";

// const initialState = {value: 0}

const CreatedSlice = createSlice({
    // 객체 안에 slice 의 option 을 기입함

    name: 'created_slice',
    // 'name' 옵션은 slice 의 이름을 정해줌
    
    initialState: {value: 0}
    ,
    // 'initialState' 옵션은 reducer function 을 구성하는 state 값을 지정해줌
    // 또한 reducer function 에 쓰일 state 값은 반드시 객체값을 인수로 들어가야 한다 

    // ( 객체로 안할 시에 에러 메세지를 주지만, 왜 그런 것이 생기는 것인지
    // 아직 알지 못했다 )

    reducers: {
        
        increment: (state,action) =>
        {  console.log(action)

         state.value = state.value + action.payload
         // 여기서 action.payload 값은
         // dispatch function 에 대입되는 action(인수) 값과 동일하다

        // 어찌 보면,
        // type 에 따라 달리 했던 dispatch function 에,
        // payload 라는 개념을 차용해서,
        
        // action 에서도 type 에 따른 dispatch function 을 구사하는 게 아니라,
        // input( payload property ) 값에 따른 dispatch function 을 구사할 수 있도록 차별화했다


        },

        decrement: (state) => 
        {  state.value -= 1
        }

    }
    // 'reducers' 옵션은 action 을 customize 할 수 있는 옵션으로,

    // case reducer function 의 
    // action.type 에 따른 switch 문 대신하는,
    // action 프로세스를

    // createSlice 를 통해 생성되는 Slice 객체 내에
    // actions property 로 배당한다


})
//  ㄴ> createSlice API 는 reducer function 을 property 로 갖는 객체를 반환함


console.log(CreatedSlice.actions)

export const Reducer = CreatedSlice.reducer
//              ㄴ> reducer property 는 reducer function 을 반환함

export const { increment, decrement } = CreatedSlice.actions

// createSlice 는 reducer function 을 생성하는 redux toolkit (API) 이다
