import React from "react"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import googleIcon from "@/icons/google.svg"
import githubIcon from "@/icons/github.svg"
import linkedinIcon from "@/icons/linkedin.svg"

const SignIn = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const navigate = useNavigate()
  const onSignIn = () => {
    navigate("/platform/dashboard")
  }
  return (
    <>
      <section className="flex h-[100vh]">
        <div className="w-[40%] h-full bg-auth-cover bg-center bg-cover flex items-center justify-center p-10">
          <div className="text-white text-xl">
            <div className="mb-4">
              {" "}
              “Develop a passion for learning. If you do, you will never cease
              to grow.”
            </div>
            <div>Anthony J. D’Angelo</div>
          </div>
        </div>
        <div className="w-[60%] h-full p-16 flex flex-col gap-16">
          <div className="text-grayish text-right">
            You don’t have an account?{" "}
            <Link to="/auth/register">
              <span className="text-primary">Sign Up</span>
            </Link>
          </div>
          <div className="flex flex-col gap-10 px-20 w-[80%]">
            <div>
              <h1 className="text-secondary text-3xl font-[700] mb-4">
                Welcome Back
              </h1>
              <p className="text-grayish text-lg">
                We’re glad to see you again !
              </p>
            </div>
            <form className="flex flex-col gap-4">
              <label htmlFor="email">
                Email adress / Username
                <input
                  type="text"
                  name="email"
                  placeholder="Email or username"
                />
              </label>

              <label htmlFor="password" className="relative">
                Your password
                <input
                  type={isPasswordVisible ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                />
                <span
                  className="absolute top-1/2 right-[15px] translate-y-[2px] cursor-pointer"
                  onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                >
                  show
                </span>
              </label>

              <button
                className="btn btn-primary py-5 text-lg font-normal rounded-lg"
                onClick={() => onSignIn()}
              >
                Login
              </button>
            </form>

            <div className="flex flex-col gap-5">
              <div className="flex items-center justify-center text-secondary rounded-md shadow-md relative px-3 py-4 text-lg cursor-pointer">
                Login with Google
                <img
                  src={googleIcon}
                  alt="Google"
                  className="w-9 absolute top-1/2 left-10 -translate-y-1/2"
                />
              </div>
              <div className="flex items-center justify-center text-secondary shadow-md relative px-3 py-4 text-lg cursor-pointer">
                Login with LinkedIn
                <img
                  src={linkedinIcon}
                  alt="Linkedin"
                  className="w-9 absolute top-1/2 left-10 -translate-y-1/2"
                />
              </div>
              <div className="flex items-center justify-center text-secondary shadow-md relative px-3 py-4 text-lg cursor-pointer">
                Login with Github
                <img
                  src={githubIcon}
                  alt="github"
                  className="w-9 absolute top-1/2 left-10 -translate-y-1/2"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SignIn
