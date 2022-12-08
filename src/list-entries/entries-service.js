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