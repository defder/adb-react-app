import {createAsyncThunk} from "@reduxjs/toolkit"
import * as userService from "./users-service"

export const registerThunk = createAsyncThunk(
    'register',
    async (user) => {
        return await userService.register(user)
    }
)

export const loginThunk = createAsyncThunk(
    'login',
    async (user) => {
        return await userService.login(user)
    }
)

export const logoutThunk = createAsyncThunk(
    'logout',
    async () => {
        return await userService.logout()
    }
)

export const profileThunk = createAsyncThunk(
    'profile',
    async () => {
        return await userService.profile()
    }
)

export const findUserByIdThunk = createAsyncThunk(
    'findUserById',
    async (uid) => await userService.findUserById(uid)
)

export const updateUserThunk = createAsyncThunk(
    'updateUser',
    async (updates) =>
        await userService.updateUser(updates)
)

