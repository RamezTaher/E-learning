import React, { useState } from "react"
import { useEffect } from "react"
import { DeleteCourseById, GetAllCourses } from "../utils/api-interceptor"
import { Link, useNavigate } from "react-router-dom"
import Header from "../components/Header"
import AdminHeader from "../components/AdminHeader"
import { AiFillDelete, AiFillEdit } from "react-icons/ai"
import { format, parseISO } from "date-fns"

const AdminAllCourses = () => {
  const [courses, setCourses] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    GetAllCourses()
      .then(({ data }) => {
        setCourses(data)
      })
      .catch((err) => console.log(err))
  }, [])

  const deleteHandler = async (id) => {
    if (window.confirm("Are you sure to delete this Course")) {
      try {
        const res = await DeleteCourseById(id)
        const deletedCourse = res.data
        alert(deletedCourse.message)
        navigate("/admin/courses")
      } catch (error) {
        console.log(error)
      }
    }
  }

  const addNewCourse = () => {
    navigate("/new-course")
  }
  return (
    <>
      <AdminHeader />
      <div className="container px-6 sm:mx-auto lg:px-10 pt-14   h-full">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">Courses</h1>
          <button
            className="bg-green-500 w-[140px] py-4 text-white  font-semibold"
            onClick={() => addNewCourse}
          >
            Add New
          </button>
        </div>
        <table className="border-secondary-tint border-solid border-2 border-collapse w-full table">
          <thead>
            <tr>
              <th>ID</th>
              <th>TITLE</th>
              <th>STUDENTS</th>
              <th>MODULES</th>
              <th>LEVEL</th>
              <th>DURATION</th>
              <th>INSCTRUCTOR</th>
              <th>START AT</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, idx) => (
              <tr key={idx}>
                <td>{course?._id}</td>
                <td>{course?.title}</td>
                <td>{course?.students?.length}</td>
                <td>{course?.modules?.length}</td>
                <td>{course?.level}</td>
                <td>{course?.duration} h</td>
                <td>
                  {course?.instructor?.firstName} {course?.instructor?.lastName}
                </td>
                <td>{format(parseISO(course?.startDate), "dd MMMM Y")}</td>
                <td>
                  <Link to={`/admin/courses/${course._id}`}>
                    <button className="btn-sm">
                      <AiFillEdit color="green" size={20} />
                    </button>
                  </Link>
                  <button
                    variant="danger"
                    className="btn-sm"
                    onClick={() => deleteHandler(course?._id)}
                  >
                    <AiFillDelete color="red" size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default AdminAllCourses
