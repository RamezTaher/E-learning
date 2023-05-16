import { Progress } from "antd"
import React from "react"
import { useLocalStorage } from "react-use"

const DashboardHomework = () => {
  const [userProfile, setUserProfile, removeUserProfile] = useLocalStorage(
    "userProfile",
    {}
  )

  return (
    <div>
      <h1 className="text-2xl font-[600] mb-4 text-secondary">
        Course's Lessons
      </h1>
      <div className="flex flex-col gap-2 p-2">
        {userProfile.courses.map((course, idx) => (
          <Homework course={course} key={idx} />
        ))}
      </div>
    </div>
  )
}

export default DashboardHomework

const Homework = ({ course }) => {
  return (
    <div className="flex flex-col  gap-2 p-4  rounded-md shadow-md">
      <div className="text-secondary font-[600] text-lg">{course.title}</div>
      <div>
        {course?.modules?.map((elt, idx) => (
          <div className=" ml-2 text-[16px] font-[500]" key={idx}>
            {elt.title}
            <ul className="ml-5 mt-2 text-grayish font-[400]">
              {elt.lessons.map((lesson, index) => (
                <li key={index}>{lesson.title}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
