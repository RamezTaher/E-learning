import React from "react"
import logo from "@/logo.svg"
import { Link, useLocation, useNavigate } from "react-router-dom"
import Logo from "./Logo"
import { useLocalStorage } from "react-use"
const AdminHeader = () => {
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
    removeCourses()
    removeUserProfile()
    removeToken()
    removeUserInfo()
    navigation("/auth/register")
  }
  return (
    <header className="text-sm">
      <div className="container px-6 sm:mx-auto relative  lg:px-10 py-3 flex items-center justify-between">
        <Link to={"/"}>
          <Logo />
        </Link>
        <nav className="flex items-center gap-10">
          <Link to={"/admin/students"}>
            <div
              className={`${
                pathname === "/admin/students"
                  ? "font-bold underline decoration-primary decoration-2 underline-offset-2 text-lg"
                  : ""
              }`}
            >
              Students
            </div>
          </Link>
          <Link to={"/admin/instructors"}>
            <div
              className={`${
                pathname === "/admin/instructors"
                  ? "font-bold underline decoration-primary decoration-2 underline-offset-2 text-lg"
                  : ""
              }`}
            >
              Instructors
            </div>
          </Link>
          <Link to={"/admin/courses"}>
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

export default AdminHeader
