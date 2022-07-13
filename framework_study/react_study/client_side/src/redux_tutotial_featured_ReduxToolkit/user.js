import { createSlice } from '@reduxjs/toolkit'
//

const userSlice = createSlice({

    name: "user",
    initialState: {
         value: {
            name: "kim",
            age: 3,
            email: "erehkim@naver.com"
         } },
    reducers : {
        login: (state, action) => {
            state.value = action.payload
        } 
    }

})

export const {login} = userSlice.actions

export default userSlice.reducer