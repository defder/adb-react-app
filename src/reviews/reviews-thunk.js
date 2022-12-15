import {createAsyncThunk} from "@reduxjs/toolkit"
import {createReview, findReviewsByAuthor, findReviewsByGame} from "./reviews-service";

export const createReviewThunk = createAsyncThunk(
    'createReview',
    async (review) => createReview(review)
)

export const findReviewsByGameThunk = createAsyncThunk(
    'findReviewsByGame',
    async (gameId) => findReviewsByGame(gameId)
)

export const findReviewsByAuthorThunk = createAsyncThunk(
    'findReviewsByAuthor',
    async (author) => findReviewsByAuthor(author)
)
