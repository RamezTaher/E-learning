import React from "react"
import logo from "@/logo.svg"
import { Link } from "react-router-dom"
import Logo from "./Logo"
const Foot = () => {
  return (
    <footer className="bg-primary-tint">
      <div className="container px-6 sm:mx-auto relative lg:px-10 py-5 pb-0">
        <div className="flex flex-col gap-5">
          <div className="grid grid-cols-7">
            <div className="col-span-3 flex items-center gap-12">
              <div className="w-[200px]">
                <Logo />
              </div>

              <div className="flex flex-col gap-5">
                <h1 className="text-secondary">E-Learning</h1>
                <p>Educational Service that help you learn</p>
                <Link to="/auth/register">
                  <div className="text-secondary font-bold underline text-lg">
                    Become a member
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-span-2 flex flex-col items-center gap-4">
              <h1 className="text-secondary font-bold">Platform</h1>
              <Link to="/courses">
                <div className="text-secondary  text-[16px]">Courses</div>
              </Link>
              <Link to="/paths">
                <div className="text-secondary  text-[16px]">Paths</div>
              </Link>
              <Link to="/trainings">
                <div className="text-secondary  text-[16px]">Trainings</div>
              </Link>
            </div>
            <div className="col-span-2 flex flex-col items-center gap-4">
              <h1 className="text-secondary font-bold">Resources</h1>
              <Link to="/blog">
                <div className="text-secondary  text-[16px]">Blog</div>
              </Link>
              <Link to="/">
                <div className="text-secondary  text-[16px]">Something</div>
              </Link>
              <Link to="/">
                <div className="text-secondary  text-[16px]">Anything</div>
              </Link>
            </div>
          </div>
          <div className="text-[14px] text-secondary text-center">
            Copyright &copy; 2023 All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Foot
