import { createSlice } from "@reduxjs/toolkit";

const conversationSlice = createSlice({
    name : "conversationSlice",

    initialState : {
        isLoading : false,
        profile : null,
        messages : []
    }, 

    reducers : {
        isLoading(state, action){
            state.isLoading = action.payload
        },

        updateData(state, action){
            state.isLoading = false
            state.profile = action.payload.profile
            state.messages = action.payload.messages
        }, 

        addMessage(state, action){
            state.isLoading = false
            state.messages.push(action.payload)
        }
    }
})

export const conversationSliceActions = conversationSlice.actions
export const conversationSliceReducer = conversationSlice.reducer 