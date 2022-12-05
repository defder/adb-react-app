import axios from "axios"

const HOME_SEARCH_URL = "https://rawg.io/api/games?key=d5d2c04d7ebf47fa9a8385bd7e05c261&page_size=8&page="
const BASE_URL = "https://rawg.io/api/games/"
const API_KEY = "key=d5d2c04d7ebf47fa9a8385bd7e05c261"

const getRandomInt = (max) => {
    return Math.floor(Math.random() * max) + 1
}

export const findGamesForHome = async () => {
    const pageNum = getRandomInt(5)
    const response = await axios.get(`${HOME_SEARCH_URL}${pageNum}`)
    return response.data.results
}

export const findGameById = async (gameId) => {
    const response = await axios.get(`${BASE_URL}${gameId}?${API_KEY}`)
    return response.data
}