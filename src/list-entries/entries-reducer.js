import {createSlice} from "@reduxjs/toolkit"
import {
    createEntryThunk,
    deleteEntryByIdThunk, findCurrentlyPlayingThunk,
    findEntriesByUserThunk,
    getEntriesCountThunk,
    getExistingEntryThunk
} from "./entries-thunk";

const entriesReducer = createSlice({
    name: "entries",
    initialState: {
      entries: [],
      counts: {},
      currentEntry: {},
      currentlyPlaying: []
    },
    extraReducers: {
        [createEntryThunk.fulfilled]: (state, action) => {
            state.entries.push(action.payload)
        },
        [findEntriesByUserThunk.fulfilled]: (state, action) => {
            state.entries = action.payload
        },
        [getEntriesCountThunk.fulfilled]: (state, action) => {
            state.counts = action.payload
        },
        [getExistingEntryThunk.fulfilled]: (state, action) => {
            state.currentEntry = action.payload
        },
        [deleteEntryByIdThunk.fulfilled]: (state, action) => {
            state.entries = state.entries.filter(e => e._id !== action.payload)
        },
        [findCurrentlyPlayingThunk.fulfilled]: (state, action) => {
            state.currentlyPlaying = action.payload
        }
    }
})
export default entriesReducer.reducer