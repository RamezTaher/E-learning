import axios from "axios"

const API_URL = "http://localhost:5000/api"

const api = axios.create({ baseURL: API_URL })
const token = JSON.parse(localStorage.getItem("token"))
const config = {
  withCredentials: true,
  headers: {
    Authorization: `Bearer ${token}`,
  },
}

// Auth
export const RegisterUser = (data) => api.post(`/auth/register`, data, config)

export const LoginUser = (data) => api.post(`/auth/login`, data, config)

export const GetUser = (data) => api.get(`/user/profile`, config)

// Students
export const GetTopUsers = (data) => api.get(`/user/top`, config)

// Courses
export const GetAllCourses = (data) => api.get(`/course`, config)
