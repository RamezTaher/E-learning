import React from "react"
import CoursesPanel from "../components/CoursesPanel"

const UserCourses = () => {
  return (
    <section className="flex">
      <SideBar />
      <CoursesPanel />
    </section>
  )
}

export default UserCourses
