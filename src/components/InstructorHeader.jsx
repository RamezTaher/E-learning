import React from "react"
import logo from "@/logo.svg"
import { Link, useLocation, useNavigate } from "react-router-dom"
import Logo from "./Logo"
import { useLocalStorage } from "react-use"
const InstructorHeader = () => {
  const { pathname } = useLocation()
  const navigation = useNavigate()
  const [courses, setCourses, removeCourses] = useLocalStorage("courses", [])
  const [userProfile, setUserProfile, removeUserProfile] = useLocalStorage(
    "userProfile",
    {}
  )
  const [token, setToken, removeToken] = useLocalStorage("token", "")
  const [userInfo, setUserInfo, removeUserInfo] = useLocalStorage(
    "userInfo",
    {}
  )
  const logout = (e) => {
    e.preventDefault()
    removeCourses()
    removeUserProfile()
    removeToken()
    removeUserInfo()
    navigation("/auth/login")
  }
  return (
    <header className="text-sm">
      <div className="container px-6 sm:mx-auto relative  lg:px-10 py-3 flex items-center justify-between">
        <Link to={"/instructor/students"}>
          <Logo />
        </Link>
        <nav className="flex items-center gap-10">
          <Link to={"/instructor/students"}>
            <div
              className={`${
                pathname.split("/")[2] === "students"
                  ? "font-bold underline decoration-primary decoration-2 underline-offset-2 text-lg"
                  : ""
              }`}
            >
              Students
            </div>
          </Link>
          <Link to={"/instructor/courses"}>
            <div
              className={`${
                pathname.split("/")[2] === "courses"
                  ? "font-bold underline decoration-primary decoration-2 underline-offset-2 text-lg"
                  : ""
              }`}
            >
              Courses
            </div>
          </Link>
          <Link to={"/instructor/profile"}>
            <div
              className={`${
                pathname.split("/")[2] === "profile"
                  ? "font-bold underline decoration-primary decoration-2 underline-offset-2 text-lg"
                  : ""
              }`}
            >
              Profile
            </div>
          </Link>
        </nav>
        <div>
          <button className="btn btn-primary" onClick={(e) => logout(e)}>
            Log Out
          </button>
        </div>
      </div>
    </header>
  )
}

export default InstructorHeader
