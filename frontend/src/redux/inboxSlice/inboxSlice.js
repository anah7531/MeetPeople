import { createSlice } from "@reduxjs/toolkit";


const inboxSlice = createSlice({
    name : "inboxSlice",

    initialState : {
        isLoading : false,
        messages : []
    }, 

    reducers : {
        isLoading(state, action){
            state.isLoading = action.payload
        },

        updateMessages(state, action){
            state.isLoading = false
            state.messages = action.payload
        }
    }
})

export const inboxSliceReducer = inboxSlice.reducer
export const inboxSliceAction = inboxSlice.actions