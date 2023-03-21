import React from "react"
import ProgramCard from "./ProgramCard"

const Trainings = () => {
  const course = {
    title: "Web Development",
    description: "Learn MERN/MEAN stack and the basic of web developemnt.",
    img: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  }
  return (
    <div>
      <div className="container px-6 sm:mx-auto relative lg:px-10  ">
        <div className="flex flex-col items-center gap-10">
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-secondary text-4xl font-[800]">
              Our most popular training programs
            </h1>
            <span className="w-32 h-1 rounded-sm bg-secondary"></span>
          </div>
          <div className="grid grid-cols-3 gap-10">
            <ProgramCard info={course} />
            <ProgramCard info={course} />
            <ProgramCard info={course} />
            <ProgramCard info={course} />
            <ProgramCard info={course} />
            <ProgramCard info={course} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Trainings
