import {createSlice} from "@reduxjs/toolkit";
import {findGameByIdThunk, findGamesForHomeThunk} from "./games-thunk";

const initialState = {
    games: [],
    details: {},
    homeDisplay: []
}

const gamesReducer = createSlice({
    name: 'games',
    initialState,
    extraReducers: {
        [findGamesForHomeThunk.fulfilled]: (state, action) => {
            state.homeDisplay = action.payload
        },
        [findGameByIdThunk.fulfilled]: (state, action) => {
            state.details = action.payload
        }
    }
})

export default gamesReducer.reducer