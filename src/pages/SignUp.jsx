import React from "react"
import { Link, useNavigate } from "react-router-dom"
import { IoIosArrowBack } from "react-icons/io"

const SignUp = () => {
  const navigate = useNavigate()
  const proceedToSignup = () => {
    navigate("/auth/finish-register")
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
          <div className="flex flex-col gap-10 px-20 w-[80%]">
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
                />
              </label>

              <label htmlFor="code">
                Invitation code*
                <input
                  type="text"
                  name="code"
                  placeholder="Enter your invitation code"
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
      </section>
    </>
  )
}

export default SignUp
