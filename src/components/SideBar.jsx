import React from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import Logo from "./Logo"
import { AiOutlineHome } from "react-icons/ai"
import { HiBookOpen } from "react-icons/hi"
import { FiUserCheck } from "react-icons/fi"
import { useLocalStorage } from "react-use"

const SideBar = () => {
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
  const logout = () => {
    removeCourses()
    removeUserProfile()
    removeToken()
    removeUserInfo()
    navigation("/auth/login")
  }
  return (
    <div className="flex flex-col gap-10 fixed top-0 left-0  w-[260px] h-full py-10 px-4 ">
      <Logo />
      <nav className="flex flex-col  gap-2">
        <Link to={"/platform/dashboard"}>
          <div
            className={`flex items-center gap-2 text-lg py-2 justify-center rounded-md hover:bg-primary hover:text-white transition-all ${
              pathname === "/platform/dashboard"
                ? "bg-primary text-white"
                : "text-secondary"
            }`}
          >
            <AiOutlineHome />
            Dashboard
          </div>
        </Link>
        <Link to={"/platform/courses"}>
          <div
            className={`flex items-center gap-2 text-lg py-2 justify-center rounded-md hover:bg-primary hover:text-white transition-all ${
              pathname.split("/")[2] === "courses"
                ? "bg-primary text-white"
                : "text-secondary"
            }`}
          >
            <HiBookOpen />
            Courses
          </div>
        </Link>
        <Link to={"/user/profile"}>
          <div
            className={`flex items-center gap-2 text-lg py-2 justify-center rounded-md hover:bg-primary hover:text-white transition-all ${
              pathname.split("/")[2] === "profile"
                ? "bg-primary text-white"
                : "text-secondary"
            }`}
          >
            <FiUserCheck />
            Profile
          </div>
        </Link>
        <div
          onClick={() => logout()}
          className={`flex items-center gap-2 text-lg py-2 justify-center rounded-md hover:bg-primary hover:text-white transition-all ${
            pathname === "/platform/billing"
              ? "bg-primary text-white"
              : "text-secondary"
          }`}
        >
          LogOut
        </div>
      </nav>
    </div>
  )
}

export default SideBar
