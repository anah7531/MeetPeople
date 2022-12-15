import { configureStore } from "@reduxjs/toolkit";
import { acceuilSliceReducer } from "./acceuilSlice/acceuilSlice";
import { authSliceReducer } from "./authSlice/authSlice";
import { conversationSliceReducer } from "./conversationSlice/conversationSlice";
import { matchSliceReducer } from "./matchSlice/matchSlice";


export const store = configureStore({
    reducer:{
        authSlice : authSliceReducer,
        matchSlice : matchSliceReducer,
        conversationSlice : conversationSliceReducer,
        acceuilSlice : acceuilSliceReducer

    }
})