import React, { useEffect, useState } from "react"
import AdminHeader from "../components/AdminHeader"
import { GetUserById, UpdateUser } from "../utils/api-interceptor"
import { useNavigate, useParams } from "react-router-dom"

const AdminInstructorDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [username, setUsername] = useState("")
  const [role, setRole] = useState("")
  const [profileImage, setprofileImage] = useState("")
  useEffect(() => {
    GetUserById(id)
      .then(({ data }) => {
        setEmail(data.email)
        setFirstName(data.firstName)
        setLastName(data.lastName)
        setUsername(data.username)
        setRole(data.role)
        setprofileImage(data.profileImage)
      })
      .catch((err) => console.log(err))
  }, [id])
  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      const res = await UpdateUser(id, {
        email,
        firstName,
        lastName,
        username,
        role,
        profileImage,
      })
      if (res.status === 200) {
        alert("User Updated Successfully")
        navigate("/admin/instructors")
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <AdminHeader />
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
            <label>Role</label>
            <input
              type="text"
              placeholder="Enter Roel"
              value={role}
              onChange={(e) => setRole(e.target.value)}
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

export default AdminInstructorDetails
