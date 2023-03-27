import React from "react"
import DashboardCourses from "./DashboardCourses"
import DashboardTopStudents from "./DashboardTopStudents"
import PlatformHeader from "./PlatformHeader"

const DashboardPanel = () => {
  return (
    <div className="ml-[260px] h-full w-full p-7 flex flex-col gap-10">
      <PlatformHeader location={"Dashboard"} />
      <section className="grid grid-cols-3">
        <div className="col-span-2 flex flex-col gap-20">
          <DashboardCourses />
          <DashboardTopStudents />
        </div>
        <div className="col-span-1"></div>
      </section>
    </div>
  )
}

export default DashboardPanel
