import {createSlice} from "@reduxjs/toolkit";
import {findUserByIdThunk, loginThunk, logoutThunk, profileThunk, registerThunk, updateUserThunk} from "./users-thunk";

const usersReducer = createSlice({
    name: "users",
    initialState: {
        users: [],
        currentUser: null,
        publicProfile: null
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
        },
        [findUserByIdThunk.fulfilled]: (state, action) => {
            state.publicProfile = action.payload
        },
        [updateUserThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload
        }
    }
})

export default usersReducer.reducer;