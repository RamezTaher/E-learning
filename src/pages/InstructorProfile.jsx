import React, { useEffect, useState } from "react"
import AdminHeader from "../components/AdminHeader"
import {
  GetUser,
  UpdateUser,
  UpdateUserProfile,
} from "../utils/api-interceptor"
import { useNavigate, useParams } from "react-router-dom"
import { useLocalStorage } from "react-use"
import SideBar from "../components/SideBar"
import PlatformHeader from "../components/PlatformHeader"
import InstructorHeader from "../components/InstructorHeader"

const InstructorProfile = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [username, setUsername] = useState("")
  const [profileImage, setprofileImage] = useState("")
  const [userProfile, setUserProfile, removeUserProfile] = useLocalStorage(
    "userProfile",
    {}
  )
  useEffect(() => {
    GetUser()
      .then(({ data }) => {
        setEmail(data.email)
        setFirstName(data.firstName)
        setLastName(data.lastName)
        setUsername(data.username)
        setprofileImage(data.profileImage)
      })
      .catch((err) => console.log(err))
  }, [])
  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      const res = await UpdateUser(userProfile?._id, {
        email,
        firstName,
        lastName,
        username,
        profileImage,
      })
      if (res.status === 200) {
        alert("User Updated Successfully")
        window.location.reload()
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <InstructorHeader />
      <div className="container px-6 sm:mx-auto lg:px-10 pt-14   h-full">
        <form onSubmit={submitHandler}>
          <div className="mb-2">
            <label>First Name</label>
            <input
              type="text"
              placeholder="Enter name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            ></input>
          </div>
          <div className="mb-2">
            <label>Last Name</label>
            <input
              type="text"
              placeholder="Enter name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            ></input>
          </div>
          <div className="mb-2">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div className="mb-2">
            <label>Username</label>
            <input
              type="text"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            ></input>
          </div>

          <div className="mb-2">
            <label>Profile Image</label>
            <input
              type="text"
              placeholder="Enter Profile Image"
              value={profileImage}
              onChange={(e) => setprofileImage(e.target.value)}
            ></input>
          </div>
          <div className="w-24 h-24 rounded-full ">
            <img
              className="w-full h-full object-cover object-center"
              src={profileImage}
            />
          </div>
          <div className="flex items-center justify-center mt-10">
            <button
              type="submit"
              className="bg-green-500 w-[300px] py-3 text-white text-lg "
              onClick={() => submitHandler}
            >
              Confirm
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default InstructorProfile
