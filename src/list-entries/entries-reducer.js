import {createSlice} from "@reduxjs/toolkit"

const entriesReducer = createSlice({
    name: "entries",
    initialState: {
      entries: []
    },
})
export default entriesReducer.reducer