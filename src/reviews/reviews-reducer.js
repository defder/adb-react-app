import {createSlice} from "@reduxjs/toolkit"
import {createReviewThunk, findReviewsByAuthorThunk, findReviewsByGameThunk} from "./reviews-thunk";

const reviewsReducer = createSlice({
    name: 'reviews',
    initialState: {
        reviews: []
    },
    extraReducers: {
        [createReviewThunk.fulfilled]: (state, action) => {
            state.reviews.push(action.payload)
        },
        [findReviewsByGameThunk.fulfilled]: (state, action) => {
            state.reviews = action.payload
        },
        [findReviewsByAuthorThunk.fulfilled]: (state, action) => {
            state.reviews = action.payload
        }
    }
})
export default reviewsReducer.reducer