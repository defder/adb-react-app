import {createSlice} from "@reduxjs/toolkit";
import {loginThunk, logoutThunk, profileThunk, registerThunk} from "./users-thunk";

const usersReducer = createSlice({
    name: "users",
    initialState: {
        users: [],
        currentUser: null
    },
    extraReducers: {
        [logoutThunk.fulfilled]: (state, action) => {
            state.currentUser = null
        },
        [registerThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload
        },
        [loginThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload
        },
        [profileThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload
        }
    }
})

export default usersReducer.reducer;