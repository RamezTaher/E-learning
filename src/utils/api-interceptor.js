import axios from "axios"

const API_URL = "http://localhost:5000/api"

const api = axios.create({ baseURL: API_URL })
const config = { withCredentials: true }

// Auth
export const RegisterUser = (data) => api.post(`/auth/register`, data, config)

export const LoginUser = (data) => api.post(`/auth/login`, data, config)
