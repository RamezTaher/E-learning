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

export const GetUserStatus = () => api.get(`/auth/me`, config)

export const GetUser = () => api.get(`/user/profile`, config)
export const GetUserById = (id) => api.get(`/user/${id}`, config)

// Students
export const GetTopUsers = () => api.get(`/user/top`, config)
export const GetAllStudents = () => api.get(`/user/students`, config)
export const GetAllInstructors = () => api.get(`/user/instructors`, config)
export const DeleteUser = (id) => api.delete(`/user/${id}`, config)
export const UpdateUser = (id, data) => api.patch(`/user/${id}`, data, config)

// Courses
export const GetAllCourses = () => api.get(`/course`, config)
export const GetCourseById = (id) => api.get(`/course/${id}`, config)
export const DeleteCourseById = (id) => api.delete(`/course/${id}`, config)
export const UpdateCourse = (id, data) => api.put(`/course/${id}`, data, config)

export const CreateCourse = (data) => api.post(`/course`, data, config)

export const AddModuleToCourse = (courseId, data) =>
  api.patch(`/course/${courseId}`, data, config)

export const RemoveModuleFromCourse = (courseId, moduleId, data) =>
  api.patch(`/course/${courseId}/${moduleId}`, data, config)

// Subjects
export const GetAllSubjects = () => api.get(`/subject`, config)

// Modules
export const AddLessonToModule = (id, data) =>
  api.post(`/module/${id}/lesson`, data, config)

export const DeleteLessonFromModule = (moduleId, lessonId) =>
  api.delete(`/module/${moduleId}/lesson/${lessonId}`, config)
