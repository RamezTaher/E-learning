import React, { useEffect } from "react"
import CoursesPanel from "../components/CoursesPanel"
import SideBar from "../components/SideBar"
import { useLocalStorage } from "react-use"
import { GetAllCourses, GetUser } from "../utils/api-interceptor"

const UserCourses = () => {
  return (
    <section className="flex">
      <SideBar />
      <CoursesPanel />
    </section>
  )
}

export default UserCourses
