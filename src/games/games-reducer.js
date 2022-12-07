import {createSlice} from "@reduxjs/toolkit";
import {findGameByIdThunk, findGamesBySearchTermThunk, findGamesForHomeThunk} from "./games-thunk";

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
        },
        [findGamesBySearchTermThunk.fulfilled]: (state, action) => {
            state.games = action.payload
        }
    }
})

export default gamesReducer.reducer