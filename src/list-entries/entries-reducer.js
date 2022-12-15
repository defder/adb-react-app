import {createSlice} from "@reduxjs/toolkit"
import {createEntryThunk, findEntriesByUserThunk, getEntriesCountThunk, getExistingEntryThunk} from "./entries-thunk";

const entriesReducer = createSlice({
    name: "entries",
    initialState: {
      entries: [],
      counts: {},
      currentEntry: {}
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
        }
    }
})
export default entriesReducer.reducer