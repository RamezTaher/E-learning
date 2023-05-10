import React from "react"
import { Link, useNavigate } from "react-router-dom"
import { IoIosArrowBack } from "react-icons/io"

const FinishSignUp = () => {
  const navigate = useNavigate()
  const register = () => {
    alert("register done")
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
        <div className="container px-6 sm:mx-auto lg:px-10 py-3  w-[60%] h-full">
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
            <div className="flex flex-col gap-10 px-20 w-[80%] ">
              <div>
                <h1 className="text-secondary text-3xl font-[700] mb-4">
                  Complete your profile{" "}
                </h1>
                <p className="text-grayish text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet.{" "}
                </p>
              </div>
              <form className="grid grid-cols-2 mt-4 gap-6">
                <label htmlFor="name" className="col-span-1">
                  Name*
                  <input type="text" name="name" placeholder="Name" />
                </label>

                <label htmlFor="name" className="col-span-1">
                  Last Name*
                  <input type="text" name="name" placeholder="Last Name" />
                </label>
                <label htmlFor="password" className="col-span-2">
                  Create password*
                  <input
                    type="text"
                    name="password"
                    placeholder="Create a new password"
                  />
                </label>
                <label htmlFor="confirm-password" className="col-span-2">
                  Confirm password*{" "}
                  <input
                    type="text"
                    name="confirm-password"
                    placeholder="Enter your password again"
                  />
                </label>

                <button
                  className="btn btn-primary py-5 text-lg font-normal rounded-lg col-span-2"
                  onClick={() => register()}
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
