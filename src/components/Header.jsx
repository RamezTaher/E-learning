import React from "react"
import logo from "@/logo.svg"
import { Link, useLocation, useNavigate } from "react-router-dom"
import Logo from "./Logo"
const Header = () => {
  const { pathname } = useLocation()
  const navigation = useNavigate()
  const goToAuth = (e) => {
    e.preventDefault()
    navigation("/auth/register")
  }
  return (
    <header className="text-sm">
      <div className="container px-6 sm:mx-auto relative  lg:px-10 py-3 flex items-center justify-between">
        <Link to={"/"}>
          <Logo />
        </Link>
        <nav className="flex items-center gap-10">
          <Link to={"/"}>
            <div
              className={`${
                pathname === "/"
                  ? "font-bold underline decoration-primary decoration-2 underline-offset-2"
                  : ""
              }`}
            >
              Home
            </div>
          </Link>
          <Link to={"/platform"}>
            <div
              className={`${
                pathname === "/platform"
                  ? "font-bold underline decoration-primary decoration-2 underline-offset-2"
                  : ""
              }`}
            >
              Platform
            </div>
          </Link>
          <Link to={"/resources"}>
            <div
              className={`${
                pathname === "/resources"
                  ? "font-bold underline decoration-primary decoration-2 underline-offset-2"
                  : ""
              }`}
            >
              Resources
            </div>
          </Link>
          <Link to={"/contact"}>
            <div
              className={`${
                pathname === "/contact"
                  ? "font-bold underline decoration-primary decoration-2 underline-offset-2"
                  : ""
              }`}
            >
              Contact
            </div>
          </Link>
        </nav>
        <div>
          <button className="btn btn-primary" onClick={(e) => goToAuth(e)}>
            Sign up
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
