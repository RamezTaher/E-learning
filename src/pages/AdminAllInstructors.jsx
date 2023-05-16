import React, { useState } from "react"
import { useEffect } from "react"
import { DeleteUser, GetAllInstructors, GetAllStudents } from "../utils/api-interceptor"
import { Link, useNavigate } from "react-router-dom"
import Header from "../components/Header"
import AdminHeader from "../components/AdminHeader"
import { AiFillDelete, AiFillEdit } from "react-icons/ai"
import { format, parseISO } from "date-fns"

const AdminAllInstructors = () => {
  const [instructors, setInstructors] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    GetAllInstructors()
      .then(({ data }) => {
        setInstructors(data)
      })
      .catch((err) => console.log(err))
  }, [])

  const deleteHandler = async (id) => {
    if (window.confirm("Are you sure to delete this Instructor")) {
      try {
        const res = await DeleteUser(id)
        const deltedStudent = res.data
        alert(deltedStudent.message)
        navigate("/admin/instructors")
      } catch (error) {
        console.log(error)
      }
    }
  }
  return (
    <>
      <AdminHeader />
      <div className="container px-6 sm:mx-auto lg:px-10 pt-14   h-full">
        <h1 className="text-3xl font-bold mb-6">Instructors</h1>
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
            {instructors.map((instructor, idx) => (
              <tr key={idx}>
                <td>{instructor?._id}</td>
                <td>{instructor?.firstName}</td>
                <td>{instructor?.lastName}</td>
                <td>{instructor?.username}</td>
                <td>
                  <a href={`mailto:${instructor?.email}`}>
                    {" "}
                    {instructor?.email}
                  </a>
                </td>
                <td>{instructor.role}</td>
                <td>{instructor?.createdAt&&format(parseISO(instructor?.createdAt), "dd MMMM Y")}</td>
                <td>
                  <Link to={`/admin/instructors/${instructor._id}`}>
                    <button className="btn-sm">
                      <AiFillEdit color="green" size={20} />
                    </button>
                  </Link>
                  <button
                    variant="danger"
                    className="btn-sm"
                    onClick={() => deleteHandler(instructor?._id)}
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

export default AdminAllInstructors
