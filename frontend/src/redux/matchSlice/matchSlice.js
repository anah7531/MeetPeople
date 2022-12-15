import { createSlice } from "@reduxjs/toolkit";

const matchSlice = createSlice({
    name : "matchSlice",

    initialState : {
        isLoading : false,
        matchList : []
    },

    reducers : {
        updateLoading : (state, action)=>{
            state.isLoading = action.payload
        },

        updateMatchList : (state, action)=>{
            state.isLoading = false
            state.matchList = action.payload
        }
    }
})

export const matchSliceReducer = matchSlice.reducer
export const matchSliceActions = matchSlice.actions