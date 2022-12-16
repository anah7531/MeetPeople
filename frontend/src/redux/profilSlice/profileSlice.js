import { createSlice } from "@reduxjs/toolkit";


const profileSlice = createSlice({
    name : "profileSlice",

    initialState : {
        isLoading : false,
        profile : {}
    },

    reducers : {

        isLoading(state, action){
            state.isLoading = action.payload
        },

        updateProfile(state, action){
            state.isLoading = false
            state.profile = action.payload
        }
    }
})

export const profileSliceAction = profileSlice.actions
export const profileSliceReducer = profileSlice.reducer