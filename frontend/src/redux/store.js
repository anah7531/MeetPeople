import { configureStore } from "@reduxjs/toolkit";
import { acceuilSliceReducer } from "./acceuilSlice/acceuilSlice";
import { authSliceReducer } from "./authSlice/authSlice";
import { conversationSliceReducer } from "./conversationSlice/conversationSlice";
import { inboxSliceReducer } from "./inboxSlice/inboxSlice";
import { matchSliceReducer } from "./matchSlice/matchSlice";
import { profileSliceReducer } from "./profilSlice/profileSlice";


export const store = configureStore({
    reducer:{
        authSlice : authSliceReducer,
        matchSlice : matchSliceReducer,
        conversationSlice : conversationSliceReducer,
        acceuilSlice : acceuilSliceReducer, 
        profileSlice : profileSliceReducer, 
        inboxSlice : inboxSliceReducer

    }
})