import React from "react"
import DashboardCourses from "./DashboardCourses"
import DashboardHomework from "./DashboardHomework"
import DashboardTopStudents from "./DashboardTopStudents"
import PlatformHeader from "./PlatformHeader"

const DashboardPanel = () => {
  return (
    <>
      <div className="ml-[260px] w-full">
        <div className="container px-6 sm:mx-auto lg:px-10 py-3 w-full">
          <div className=" h-full w-full p-7 flex flex-col gap-10">
            <PlatformHeader location={"Dashboard"} />
            <section className="grid grid-cols-3 gap-x-6">
              <div className="col-span-2 flex flex-col gap-20">
                <DashboardCourses />
                <DashboardTopStudents />
              </div>
              <div className="col-span-1">
                <DashboardHomework />
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}

export default DashboardPanel
