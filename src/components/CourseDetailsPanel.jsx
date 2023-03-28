import React from "react"
import PlatformHeader from "./PlatformHeader"

const CourseDetailsPanel = () => {
  return (
    <div className="ml-[260px] w-full">
      <div className="container px-5 sm:mx-auto py-3 w-full">
        <div className=" h-full w-full py-4 flex flex-col gap-10">
          <PlatformHeader isSearch={false} location={"Courses"} />
          <section className="grid grid-cols-5 gap-1">Course Details</section>
        </div>
      </div>
    </div>
  )
}

export default CourseDetailsPanel
