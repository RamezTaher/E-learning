import React, { useEffect, useState } from "react"
import AdminHeader from "../components/AdminHeader"
import { Link, useParams } from "react-router-dom"
import {
  GetAllCourses,
  GetUserById,
  RemoveCourseFromUser,
  addCourseToUser,
} from "../utils/api-interceptor"
import Loader from "../components/Loader"

import { format, parseISO } from "date-fns"
import { AiFillDelete } from "react-icons/ai"

const AdminStudentCourses = () => {
  const { id } = useParams()
  const [student, setStudent] = useState({})
  const [courses, setCourses] = useState([])
  const [addedCourse, setAddedCourse] = useState("")

  useEffect(() => {
    GetUserById(id)
      .then(({ data }) => {
        setStudent(data)
      })
      .catch((err) => console.log(err))

    GetAllCourses()
      .then(({ data }) => {
        setCourses(data)
        setAddedCourse(data[0]._id)
      })
      .catch((err) => console.log(err))
  }, [id])
  const addCourseToStudent = async (e) => {
    e.preventDefault()
    if (addedCourse) {
      try {
        const res = await addCourseToUser(id, {
          courseId: addedCourse,
        })
        console.log(res)
        if (res.status === 201) {
          console.log(res.data)
          alert("Course added successfully")
          window.location.reload()
        }
      } catch (error) {
        alert(error?.response?.data?.message)
      }
    } else {
      alert("fill the fields")
    }
  }

  const deleteHandler = async (e, courseId) => {
    e.preventDefault()
    if (window.confirm("Are you sure to remove this Course")) {
      try {
        const res = await RemoveCourseFromUser(id, {
          courseId,
        })
        const deletedCourse = res.data
        alert(deletedCourse.message)
        window.location.reload()
      } catch (error) {
        console.log(error)
      }
    }
  }
  return (
    <>
      {!student && <Loader />}
      {student && (
        <>
          <AdminHeader />
          <div className="container px-6 sm:mx-auto lg:px-10 pt-10   h-full pb-10 ">
            <Link to={"/admin/students"}>
              <div
                className="w-[120px] text-center bg-primary text-white py-2 px-4 mb-4
  "
              >
                Bo Back
              </div>
            </Link>
            <div>
              <h1 className="text-4xl  font-bold my-5">
                {student.firstName}'s Courses
              </h1>
              {student.courses?.length > 0 && (
                <table className="w-full border-spacing-y-[10px]  border-separate">
                  <thead>
                    <tr className=" text-lg font-[500] text-secondary">
                      <th className="text-left">Course name</th>
                      <th className="text-center">Start</th>
                      <th className="text-center">Duration</th>
                      <th className="text-center">Level</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {student?.courses?.map((course) => (
                      <tr key={course._id}>
                        <td className="w-1/2">
                          <div className="flex gap-2">
                            <img
                              src={course?.image}
                              alt="ux"
                              className="w-28 h-20 object-cover object-center"
                            />

                            <div className="flex flex-col gap-2 w-[100%]">
                              <div
                                className="text-lg font-[600]
                "
                              >
                                {course?.title}
                              </div>
                              <div className="text-sm text-grayish">
                                {course?.modules?.length} Lessons
                              </div>
                            </div>
                          </div>
                        </td>

                        <td className="align-middle text-center text-xl text-secondary ">
                          {course?.startDate &&
                            format(parseISO(course?.startDate), "dd MMM Y")}
                        </td>
                        <td className="align-middle text-xl text-center text-secondary ">
                          {course.duration} hours
                        </td>
                        <td className="align-middle text-xl text-center text-secondary ">
                          {course?.level}
                        </td>
                        <td className="w-[60px] align-middle text-xl text-right text-secondary cursor-pointer">
                          <button
                            variant="danger"
                            className="btn-sm"
                            onClick={(e) => deleteHandler(e, course?._id)}
                          >
                            <AiFillDelete color="red" size={20} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
              {student.courses?.length === 0 && (
                <div>{student.firstName} Has No Courses Yet</div>
              )}
              <div className="mt-10">
                <h1 className="text-4xl font-bold">
                  Add New Courses To {student.firstName}
                </h1>

                <form className="grid grid-cols-2 gap-4 mt-2 ">
                  <select
                    className="p-3 border border-solid border-grayish rounded"
                    onChange={(e) => setAddedCourse(e.target.value)}
                  >
                    {courses.map((course) => (
                      <option key={course._id} value={course._id}>
                        {course.title}
                      </option>
                    ))}
                  </select>
                  <div
                    className="flex items-end justify-start "
                    onClick={(e) => addCourseToStudent(e)}
                  >
                    <button className="bg-primary text-white py-3 rounded w-[150px] text-lg cursor-pointer">
                      Add Course
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default AdminStudentCourses
