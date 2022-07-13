import { configureStore } from "@reduxjs/toolkit"

import { Provider } from "react-redux"
// ㄴ> Store 객체의 데이터가 전역에 전달되게끔 하는 핵심 Redux - API 

// Store 는 Application 전역에 적용되길 기대하며 쓰여지는 
// 전역변수와 같은 개념이다

import Reducx_Reducer from "./user";
// reducer 를 캡슐화 함

import React from "react";
// 기본 모듈


import  Profile_component  from "./profile";
import  Login_component  from "./login";
// 가져오는 component

const store = configureStore({
    reducer: {
        user: Reducx_Reducer
    }
})
// 다음 코드를 통해서 ,전역에 쓰여질 store 를 생성한다

const App = () => {

    return(
        <React.StrictMode>


            <Provider store={store}>

            {/* ㄴ> Provider 의 child componenet 들은
            에 대한 값에 접근 권한을 갖는다 */}

            < Profile_component />
            < Login_component />

            </Provider>
        

        </React.StrictMode>
    )

}

export default App