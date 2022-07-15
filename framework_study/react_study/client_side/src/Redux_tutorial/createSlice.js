import { createSlice } from "@reduxjs/toolkit";

const CreatedSlice = createSlice({
    // 객체 안에 slice 의 option 을 기입함

    name: 'created_slice',
    // 'name' 옵션은 slice 의 이름을 정해줌
    
    initialState: {
        value: 0
    },
    // 'initialState' 옵션은 reducer function 을 구성하는 state 값을 지정해줌
    reducers: {
        increment(state){
            state.value += 1
        },
        decrement(state){
            state.value -= 1
        }
    }

})
//  ㄴ> createSlice API 는 reducer function 을 property 로 갖는 객체를 반환함


console.log(CreatedSlice)

export default CreatedSlice.reducer
//              ㄴ> reducer property 는 reducer function 을 반환함

export const { increment, decrement } = CreatedSlice.actions

// createSlice 는 reducer function 을 생성하는 redux toolkit (API) 이다
