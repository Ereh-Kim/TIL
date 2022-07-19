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
         // 여기서 action 매개변수는,
         // dispatch function 에서 전달되는

         // {type:"",payload:""} 로 이루어진 action 객체이다

        },

        decrement: (state) => 
        {  state.value -= 1
        }

    }
    // 'reducers' 옵션은 action 을 customize 할 수 있는 옵션으로,

    // 다음과 같이 작성하면,
    // Slice 객체의 actions property 가
    // 각 type 에 따른 ActionCreator 를 반환해준다
     


})
//  ㄴ> createSlice API 는 reducer function 을 property 로 갖는 Slice 객체를 반환함


console.log(CreatedSlice.actions)

export const Reducer = CreatedSlice.reducer
//              ㄴ> reducer property 는 reducer function 을 반환함

export const { increment, decrement } = CreatedSlice.actions

// createSlice 는 reducer function 을 생성하는 redux toolkit (API) 이다
