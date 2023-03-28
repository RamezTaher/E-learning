import React from "react"
import CourseDetailsPanel from "../components/CourseDetailsPanel"
import SideBar from "../components/SideBar"

const UserCourseDetails = () => {
  return (
    <section className="flex">
      <SideBar />
      <CourseDetailsPanel />
    </section>
  )
}

export default UserCourseDetails
