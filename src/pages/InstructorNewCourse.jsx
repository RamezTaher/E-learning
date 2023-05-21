import React, { useEffect, useState } from "react"
import AdminHeader from "../components/AdminHeader"
import { Link, Navigate, useNavigate } from "react-router-dom"
import { DatePicker, Select } from "antd"
import {
  CreateCourse,
  GetAllInstructors,
  GetAllSubjects,
} from "../utils/api-interceptor"
import InstructorHeader from "../components/InstructorHeader"

const InstructorNewCourse = () => {
  const navigate = useNavigate()

  const [title, setTitle] = useState("")
  const [image, setImage] = useState("")
  const [description, setDescription] = useState("")
  const [level, setLevel] = useState("")
  const [duration, setDuration] = useState("")
  const [startDate, setStartDate] = useState("")
  const [instructors, setInstructors] = useState([])
  const [courseInstructor, setCourseInstructor] = useState("")
  const [subjects, setSubjects] = useState([])
  const [courseSubject, setCourseSubject] = useState("")

  useEffect(() => {
    GetAllInstructors()
      .then(({ data }) => {
        setInstructors(data)
        setCourseInstructor(data[0]._id)
      })
      .catch((err) => console.log(err))
    GetAllSubjects()
      .then(({ data }) => {
        setSubjects(data)
        setCourseSubject(data[0]._id)
      })
      .catch((err) => console.log(err))
  }, [])

  const handleDateChange = (date) => {
    if (date) {
      const formattedDate = date.toISOString()
      setStartDate(formattedDate)
    } else {
      setStartDate(null)
    }
  }

  const submitHandler = async (e) => {
    e.preventDefault()

    if (
      title &&
      image &&
      description &&
      duration &&
      level &&
      startDate &&
      courseInstructor &&
      courseSubject
    ) {
      try {
        const res = await CreateCourse({
          title,
          image,
          description,
          duration,
          level,
          startDate,
          instructor: courseInstructor,
          subject: courseSubject,
        })
        if (res.status === 201) {
          alert("Course Created Successfully")
          navigate("/instructor/courses")
        }
      } catch (error) {
        console.log(error)
      }
    } else {
      alert("fill all fields")
    }
  }

  return (
    <>
      <InstructorHeader />
      <div className="container px-6 sm:mx-auto lg:px-10 pt-10   h-full pb-10 ">
        <Link to={"/instructor/courses"}>
          <div
            className="w-[120px] text-center bg-primary text-white py-2 px-4 mb-3
      "
          >
            Bo Back
          </div>
        </Link>
        <form onSubmit={submitHandler}>
          <div className="mb-2">
            <h1 className="text-2xl text-secondary font-bold mb-2">
              Course Title
            </h1>
            <input
              type="text"
              placeholder="Enter Course Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            ></input>
          </div>
          <div className="mb-2">
            <h1 className="text-2xl text-secondary font-bold mb-2">
              Course Image
            </h1>
            <input
              type="text"
              placeholder="Enter Course Image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            ></input>
          </div>
          <div className="mb-2">
            <h1 className="text-2xl text-secondary font-bold mb-2">
              Course Description
            </h1>
            <textarea
              type="text"
              placeholder="Enter Course Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <h1 className="text-2xl text-secondary font-bold mb-2">
              Course Duration Hours
            </h1>
            <input
              type="text"
              placeholder="Enter Course Duration"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            ></input>
          </div>
          <div className="mb-2">
            <h1 className="text-2xl text-secondary font-bold mb-2">
              Level: beginner / intermediate / advanced{" "}
            </h1>
            <input
              type="text"
              placeholder="Enter Course Level"
              value={level}
              onChange={(e) =>
                setLevel(e.target.value.trim().toLocaleLowerCase())
              }
            ></input>
          </div>
          <div className="mb-2">
            <h1 className="text-2xl text-secondary font-bold mb-2">
              Course Start Date{" "}
            </h1>
            <div className="flex items-center justify-between mt-1">
              <DatePicker
                onChange={handleDateChange}
                format={"DD-MM-YYYY"}
                className="w-full text-lg  p-3 border border-solid border-grayish text-black placeholder:text-black"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 mb-2">
            <h1 className="text-2xl text-secondary font-bold mb-2">Trainer</h1>

            <select
              className="p-3 border border-solid border-grayish rounded"
              onChange={(e) => setCourseInstructor(e.target.value)}
            >
              {instructors.map((instructor, idx) => (
                <option key={idx} value={instructor._id}>
                  {instructor.firstName}
                  {instructor.lastName}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-2 mb-2">
            <h1 className="text-2xl text-secondary font-bold mb-2">Subject</h1>

            <select
              className="p-3 border border-solid border-grayish rounded"
              onChange={(e) => setCourseSubject(e.target.value)}
            >
              {subjects.map((subject, idx) => (
                <option key={idx} value={subject._id}>
                  {subject.name}
                </option>
              ))}
            </select>
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

export default InstructorNewCourse
