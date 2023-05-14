import React from "react"
import DashboardCoursesTableRow from "./DashboardCoursesTableRow"
import { useLocalStorage } from "react-use"

const DashboardCourses = () => {
  const [userProfile, setUserProfile, removeUserProfile] = useLocalStorage(
    "userProfile",
    {}
  )
  return (
    <div className="rounded-lg shadow-sm">
      <h1 className="text-2xl font-[600] mb-4 text-secondary">My Courses</h1>
      <table className="w-full border-spacing-y-[10px]  border-separate">
        <thead>
          <tr className=" text-lg font-[500] text-secondary">
            <th className="text-left">Course name</th>
            <th className="text-center">Start</th>
            <th className="text-right">Level</th>
          </tr>
        </thead>
        <tbody>
          {userProfile?.courses?.map((course, idx) => (
            <DashboardCoursesTableRow key={idx} course={course} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DashboardCourses
