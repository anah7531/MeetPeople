import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name : "authSlice",

    initialState : {
        loginId : null,
        role : null
    },

    reducers : {
        login : (state, action)=>{
            state.loginId = action.payload.loginId
            state.role = action.payload.role
        },

        logout : (state)=>{
            state.loginId = null
            state.role = null
        }
    }
})

export const authSliceReducer = authSlice.reducer
export const authSliceAction = authSlice.actions