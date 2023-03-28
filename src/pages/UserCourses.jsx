import React from "react"
import CoursesPanel from "../components/CoursesPanel"
import SideBar from "../components/SideBar"

const UserCourses = () => {
  return (
    <section className="flex">
      <SideBar />
      <CoursesPanel />
    </section>
  )
}

export default UserCourses
