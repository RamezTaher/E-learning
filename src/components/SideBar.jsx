import React from "react"
import { Link, useLocation } from "react-router-dom"
import Logo from "./Logo"
import { AiOutlineHome } from "react-icons/ai"
import { HiBookOpen } from "react-icons/hi"
import { RiBillFill } from "react-icons/ri"

const SideBar = () => {
  const { pathname } = useLocation()
  return (
    <div className="flex flex-col gap-10 fixed top-0 left-0  w-[260px] h-full py-10 px-4 ">
      <Logo size={40} />
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
        <Link to={"/platform/billing"}>
          <div
            className={`flex items-center gap-2 text-lg py-2 justify-center rounded-md hover:bg-primary hover:text-white transition-all ${
              pathname === "/platform/billing"
                ? "bg-primary text-white"
                : "text-secondary"
            }`}
          >
            <RiBillFill />
            Billing
          </div>
        </Link>
      </nav>
    </div>
  )
}

export default SideBar
