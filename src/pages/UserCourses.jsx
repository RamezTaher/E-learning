import React, { useEffect } from "react"
import CoursesPanel from "../components/CoursesPanel"
import SideBar from "../components/SideBar"
import { useLocalStorage } from "react-use"
import { GetAllCourses } from "../utils/api-interceptor"

const UserCourses = () => {
  const [courses, setCourses, removeCourses] = useLocalStorage("courses", [])

  useEffect(() => {
    GetAllCourses()
      .then(({ data }) => {
        setCourses(data)
        console.log(data)
      })
      .catch((err) => console.log(err))
  }, [])
  return (
    <section className="flex">
      <SideBar />
      <CoursesPanel />
    </section>
  )
}

export default UserCourses
