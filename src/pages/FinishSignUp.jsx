import React from "react"
import { Link, useNavigate } from "react-router-dom"
import { IoIosArrowBack } from "react-icons/io"
import { useLocalStorage } from "react-use"
import { useState } from "react"
import { RegisterUser } from "../utils/api-interceptor"
import Loader from "../components/Loader"

const FinishSignUp = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const [userInfo, setUserInfo, removeUserInfo] = useLocalStorage(
    "userInfo",
    {}
  )
  const [token, setToken, removeToken] = useLocalStorage("token", "")
  const register = async (e) => {
    e.preventDefault()
    if (!firstName || !lastName || !password || !confirmPassword) {
      alert("fill all fields")
    } else {
      if (password !== confirmPassword) {
        alert("Confirm password")
      } else {
        try {
          setLoading(true)
          const user = await RegisterUser({
            ...userInfo,
            firstName,
            lastName,
            password,
          })
          if (user) {
            alert("User Created Successfully")
            navigate("/auth/login")
          }
        } catch (error) {
          setLoading(false)
          alert(error?.response?.data?.message)
        }
      }
    }
  }
  return (
    <>
      {loading && (
        <div className="h-screen w-screen bg-black bg-opacity-80 absolute flex items-center justify-center">
          <Loader />
        </div>
      )}
      <section className="flex flex-col lg:flex-row lg:h-[100vh]">
        <div className="lg:w-[40%] h-[400px] lg:h-full bg-auth-cover bg-center bg-cover flex items-center justify-center p-10">
          <div className="text-white text-xl">
            <div className="mb-4">
              “Develop a passion for learning. If you do, you will never cease
              to grow.”
            </div>
            <div>Anthony J. D’Angelo</div>
          </div>
        </div>
        <div className="container px-6 sm:mx-auto lg:px-10 py-10 lg:py-3 lg:w-[60%] h-full">
          <div className="h-full flex flex-col gap-16">
            <div className="flex justify-between items-start">
              <Link
                className="text-[#6D6D6D] flex items-center gap-1"
                to={"/auth/register"}
              >
                <IoIosArrowBack />
                Back
              </Link>
              <div className="flex flex-col text-right">
                <div className="text-[#BDBDBD]">STEP 02/02</div>
                <div className="text-[#909090]">Personal Information</div>
              </div>
            </div>
            <div className="flex flex-col gap-10 lg:px-20 lg:w-[80%]">
              <div>
                <h1 className="text-secondary text-3xl font-[700] mb-4">
                  Complete your profile{" "}
                </h1>
                <p className="text-grayish text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet.{" "}
                </p>
              </div>
              <form className="grid grid-cols-2 mt-4 gap-6">
                <label htmlFor="name" className="col-span-2 lg:col-span-1">
                  First Name*
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </label>

                <label htmlFor="name" className="col-span-2 lg:col-span-1">
                  Last Name*
                  <input
                    type="text"
                    name="name"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </label>
                <label htmlFor="password" className="col-span-2">
                  Create password*
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </label>
                <label htmlFor="confirm-password" className="col-span-2">
                  Confirm password*{" "}
                  <input
                    type="password"
                    name="confirm-password"
                    placeholder="Enter your password again"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </label>

                <button
                  className="btn btn-primary py-5 text-lg font-normal rounded-lg col-span-2"
                  onClick={(e) => register(e)}
                >
                  Register Account
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default FinishSignUp
