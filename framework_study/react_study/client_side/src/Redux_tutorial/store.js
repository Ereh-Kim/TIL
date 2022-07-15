import { configureStore } from "@reduxjs/toolkit";
import { createStore } from 'redux'


import {Reducer} from './createSlice'


export const store = configureStore({
    reducer: Reducer,
    
})
// configureStore 은 Store 를 생성하는 ( API / Hook ) 이다
// argument (인자) 로써, 
// 객체 형식의 {reducer : reducer function || Slice 객체의 reducer property } 을 기입한다

function reducer ( state = 0 , action ) {
    
    switch (action.type){
        case 'A':
            return state + 1
        default:
            return state
    }
    // action 을 매개변수 로 넣으면서,

    // action의 property 인 type 의 key-value 값에 따라 달라지는
    // store 의 업데이트를 통해,

    // component 들의 전체적인 상태 관리를 적용할 수 있다

} 

export let store2 = createStore(reducer)
// createStore 은 Store 를 생성하는 ( API / Hook ) 이다
// argument (인자) 로써, reducer function 을 기입한다
