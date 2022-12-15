import { createSlice } from "@reduxjs/toolkit";


export const acceuilSlice = createSlice({
    name : "acceuilSlice",

    initialState : {
        isLoading : false,
        profiles : []
    }, 

    reducers : {
        isLoading(state, action){
            state.isLoading = action.payload
        },

        updateProfiles(state, action){
            state.isLoading = false
            state.profiles = action.payload
        },

        nextProfile(state, action){
            const firstProfile = state.profiles.shift()
            state.isLoading =false
            state.profiles.push(firstProfile)
        }, 

        removeCurrentProfile(state, action){
            state.isLoading = false
            state.profiles.shift()
        }
    }
})

export const acceuilSliceAction = acceuilSlice.actions
export const acceuilSliceReducer = acceuilSlice.reducer