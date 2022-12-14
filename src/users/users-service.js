import axios from "axios"

const API_URL = "http://localhost:4000"

const api = axios.create({withCredentials: true})

export const register = async (user) => {
    const response = await api.post(`${API_URL}/register`, user)
    return response.data
}

export const login = async (user) => {
    const response = await api.post(`${API_URL}/login`, user)
    return response.data
}

export const logout = async () => {
    const response = await api.post(`${API_URL}/logout`)
    return response.data
}

export const profile = async () => {
    const response = await api.post(`${API_URL}/profile`)
    return response.data
}

export const findUserById = async (uid) => {
    const response = await api.get(`${API_URL}/users/${uid}`)
    const user = response.data
    return user
}

export const updateUser = async (updates) => {
    const response = await api.put(`${API_URL}/profile/update`, updates)
    return response.data
}