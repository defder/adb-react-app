import axios from "axios"

const REVIEW_API_URL = "http://localhost:4000/reviews"
const api = axios.create({withCredentials: true})

export const createReview = async (review) => {
    const response = await api.post(REVIEW_API_URL, review)
    return response.data
}

export const findReviewsByGame = async (gameId) => {
    const response = await api.get(`${REVIEW_API_URL}/${gameId}`)
    return response.data
}

export const findReviewsByAuthor = async (author) => {
    const response = await api.get(`${REVIEW_API_URL}/${author}`)
    return response.data
}