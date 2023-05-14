import React from "react"
import { BsFillPeopleFill } from "react-icons/bs"
import { AiFillClockCircle } from "react-icons/ai"

const CourseCard = ({ course }) => {
  return (
    <div className="flex flex-col cursor-pointer pb-1 shadow-md">
      <img
        src={course.image}
        alt="course"
        className="h-[145px]  object-cover object-center"
      />
      <div className="flex items-center justify-between text-sm text-grayish">
        <div className="flex items-center gap-1">
          <BsFillPeopleFill />
          <span>{course.students.length} Students</span>
        </div>
        <div className="flex items-center gap-1">
          <AiFillClockCircle />
          <span>{course.duration} h</span>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-[18px] text-secondary font-semiBold">
          {course.title}
        </h1>
        <div className="flex items-center gap-2">
          <img
            src={course?.instructor.profileImage}
            alt="trainer"
            className="h-8 w-8 object-cover rounded-full"
          />
          <span className="text-sm text-grayish">
            {course?.instructor.firstName} {course?.instructor.lastName}
          </span>
        </div>
      </div>
    </div>
  )
}

export default CourseCard
