import React, { useEffect, useState } from "react"
import AdminHeader from "../components/AdminHeader"
import { useNavigate, useParams } from "react-router-dom"
import { GetCourseById } from "../utils/api-interceptor"

const AdminCourseDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [title, setTitle] = useState("")
  const [descrition, setDescription] = useState("")
  const [level, setLevel] = useState("")
  const [duration, setDuration] = useState("")
  const [profileImage, setprofileImage] = useState("")
  useEffect(() => {
    GetCourseById(id)
      .then(({ data }) => {
        setTitle(data.title)
        setDescription(data.description)
        setDuration(data.duration)
        setLevel(data.level)
      })
      .catch((err) => console.log(err))
  }, [id])
  const submitHandler = async (e) => {
    e.preventDefault()
  }
  return (
    <>
      <AdminHeader />
      <div className="container px-6 sm:mx-auto lg:px-10 pt-14   h-full">
        <form onSubmit={submitHandler}>
          <div className="mb-2">
            <label>Course Title</label>
            <input
              type="text"
              placeholder="Enter Course Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            ></input>
          </div>
          <div className="mb-2">
            <label>Course Description</label>
            <textarea
              type="text"
              placeholder="Enter Course Description"
              value={descrition}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label>Course Duration Hours</label>
            <input
              type="text"
              placeholder="Enter Course Duration"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            ></input>
          </div>
          <div className="mb-2">
            <label>Level: beginner / intermediate / advanced </label>
            <input
              type="text"
              placeholder="Enter Course Level"
              value={level}
              onChange={(e) => setLevel(e.target.value)}
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
        </form>{" "}
      </div>
    </>
  )
}

export default AdminCourseDetails
