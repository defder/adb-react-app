import {createSlice} from "@reduxjs/toolkit"
import {createEntryThunk, findEntriesByUserThunk} from "./entries-thunk";

const entriesReducer = createSlice({
    name: "entries",
    initialState: {
      entries: []
    },
    extraReducers: {
        [createEntryThunk.fulfilled]: (state, action) => {
            state.entries.push(action.payload)
        },
        [findEntriesByUserThunk.fulfilled]: (state, action) => {
            state.entries = action.payload
        }
    }
})
export default entriesReducer.reducer