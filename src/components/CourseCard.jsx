import React from "react"
import { BsFillPeopleFill } from "react-icons/bs"
import { AiFillClockCircle } from "react-icons/ai"

const CourseCard = ({ info }) => {
  return (
    <div className="flex flex-col cursor-pointer pb-1 shadow-md">
      <img
        src={info.lessonImg}
        alt="course"
        className="h-[145px]  object-cover object-center"
      />
      <div className="flex items-center justify-between text-sm text-grayish">
        <div className="flex items-center gap-1">
          <BsFillPeopleFill />
          <span>{info.student} Students</span>
        </div>
        <div className="flex items-center gap-1">
          <AiFillClockCircle />
          <span>{info.time} h</span>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-[18px] text-secondary font-semiBold">
          {info.title}
        </h1>
        <div className="flex items-center gap-2">
          <img
            src={info.img}
            alt="trainer"
            className="h-8 w-8 object-cover rounded-full"
          />
          <span className="text-sm text-grayish">{info.teacher}</span>
        </div>
      </div>
    </div>
  )
}

export default CourseCard
