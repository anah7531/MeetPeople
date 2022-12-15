import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name : "authSlice",

    initialState : {
        loginId : 1,
        role : "membre"
    },

    reducers : {
        logout : (state)=>{
            state.loginId = null
            state.role = null
        }
    }
})

export const authSliceReducer = authSlice.reducer