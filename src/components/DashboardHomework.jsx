import { Progress } from "antd"
import React from "react"

const DashboardHomework = () => {
  const info = {
    lesson: "Data With Python",
    lessonsNumber: 5,
    percentange: 25,
  }
  return (
    <div>
      <h1 className="text-3xl font-[600] mb-4 text-secondary">
        Homework progreee
      </h1>
      <div className="flex flex-col gap-2 p-2">
        <Homework info={info} />
        <Homework info={info} />
        <Homework info={info} />
        <Homework info={info} />
      </div>
    </div>
  )
}

export default DashboardHomework

const Homework = ({ info }) => {
  return (
    <div className="flex items-center justify-center gap-2 py-3  rounded-md shadow-md">
      <div>
        <Progress
          size={70}
          trailColor={"#DCDCDC"}
          strokeColor={"#07A3E9"}
          type="circle"
          percent={info.percentange}
        />
      </div>
      <div>
        <div className="text-secondary font-[600] text-xl">{info.lesson}</div>
        <div className="text-grayish">{info.lessonsNumber} Lessons</div>
      </div>
    </div>
  )
}
