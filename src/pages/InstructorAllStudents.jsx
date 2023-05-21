import React, { useState } from "react"
import { useEffect } from "react"
import { DeleteUser, GetAllStudents } from "../utils/api-interceptor"
import { Link, useNavigate } from "react-router-dom"
import Header from "../components/Header"
import AdminHeader from "../components/AdminHeader"
import { AiFillDelete, AiFillEdit, AiFillPlusCircle } from "react-icons/ai"
import { format, parseISO } from "date-fns"
import InstructorHeader from "../components/InstructorHeader"

const InstructorAllStudents = () => {
  const [students, setStudents] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    GetAllStudents()
      .then(({ data }) => {
        setStudents(data)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <>
      <InstructorHeader />
      <div className="container px-6 sm:mx-auto lg:px-10 pt-14   h-full">
        <h1 className="text-3xl font-bold mb-6">Students</h1>
        <table className="border-secondary-tint border-solid border-2 border-collapse w-full table">
          <thead>
            <tr>
              <th>ID</th>
              <th>FIRST NAME</th>
              <th>LAST NAME</th>
              <th>USERNAME</th>
              <th>EMAIL</th>
              <th>ROLE</th>
              <th>JOINED AT</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, idx) => (
              <tr key={idx}>
                <td>{student?._id}</td>
                <td>{student?.firstName}</td>
                <td>{student?.lastName}</td>
                <td>{student?.username}</td>
                <td>
                  <a href={`mailto:${student?.email}`}> {student?.email}</a>
                </td>
                <td>{student.role}</td>
                <td>
                  {student?.createdAt &&
                    format(parseISO(student?.createdAt), "dd MMMM Y")}
                </td>
                <td>
                  <Link
                    to={`/instructor/students/${student._id}/menage-courses`}
                  >
                    <button className="btn-sm">
                      <AiFillPlusCircle color="blue" size={20} />
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default InstructorAllStudents
