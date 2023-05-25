import React from "react"
import { Link, useNavigate } from "react-router-dom"
import { IoIosArrowBack } from "react-icons/io"
import { useLocalStorage } from "react-use"
import { useState } from "react"
import Loader from "../components/Loader"

const SignUp = () => {
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [userInfo, setUserInfo, removeUserInfo] = useLocalStorage(
    "userInfo",
    {}
  )
  const navigate = useNavigate()
  const proceedToSignup = () => {
    if (!email || !username) {
      alert("fill all fields")
    } else {
      setUserInfo({ email, username })
      navigate("/auth/finish-register")
    }
  }
  return (
    <>
      <section className="flex flex-col lg:flex-row lg:h-[100vh]">
        <div className="lg:w-[40%] h-[400px] lg:h-full bg-auth-cover bg-center bg-cover flex items-center justify-center p-10">
          <div className="text-white text-xl">
            <div className="mb-4">
              {" "}
              “Develop a passion for learning. If you do, you will never cease
              to grow.”
            </div>
            <div>Anthony J. D’Angelo</div>
          </div>
        </div>
        <div className="container px-6 sm:mx-auto lg:px-10 py-10 lg:py-3 lg:w-[60%] h-full">
          <div className="text-grayish  lg:text-right mb-5">
            You have an account ?{" "}
            <Link to="/auth/login">
              <span className="text-primary">Sign In</span>
            </Link>
          </div>
          <div className="h-full  flex flex-col gap-16">
            <div className="flex justify-between items-start">
              <Link className="text-[#6D6D6D] flex items-center gap-1" to={"/"}>
                <IoIosArrowBack />
                Back
              </Link>
              <div className="flex flex-col text-right">
                <div className="text-[#BDBDBD]">STEP 01/02</div>
                <div className="text-[#909090]">Approving identity</div>
              </div>
            </div>
            <div className="flex flex-col gap-10 lg:px-20 lg:w-[80%]">
              <div>
                <h1 className="text-secondary text-3xl font-[700] mb-4">
                  Register Your Account
                </h1>
                <p className="text-grayish text-lg">
                  Your are invited to test our platform.
                </p>
              </div>
              <form className="flex flex-col gap-8">
                <label htmlFor="email">
                  Email adress*
                  <input
                    type="text"
                    name="email"
                    placeholder="Enter your email adress"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>

                <label htmlFor="username">
                  Username*
                  <input
                    type="text"
                    name="username"
                    placeholder="Enter your Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </label>

                <button
                  className="btn btn-primary py-5 text-lg font-normal rounded-lg"
                  onClick={() => proceedToSignup()}
                >
                  Proceed
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SignUp
