import axios from "axios"

const ENTRIES_API = "http://localhost:4000/entries"
const api = axios.create({withCredentials: true})

export const createEntry = async (entry) => {
    const response = await api.post(`${ENTRIES_API}/create`, entry)
    return response.data
}

export const findEntriesByUser = async (user) => {
    const response = await api.get(`${ENTRIES_API}/find/${user}`)
    return response.data
}

export const getEntryCategoriesCount = async () => {
    const response = await api.get(`${ENTRIES_API}/count`)
    return response.data
}

export const getEntryByGameIdAndUserId = async (gameId) => {
    const response = await api.get(`${ENTRIES_API}/exists/${gameId}`)
    return response.data
}

export const deleteEntryByGameId = async (gameId) => {
    const response = await api.delete(`${ENTRIES_API}/delete/${gameId}`)
    return response.data
}

export const findCurrentlyPlaying = async () => {
    const response = await api.get(`${ENTRIES_API}/find/playing`)
    return response.data
}

export const findEntryByGameId = async (gameId) => {
    const response = await api.get(`${ENTRIES_API}/findAll/${gameId}`)
    return response.data
}