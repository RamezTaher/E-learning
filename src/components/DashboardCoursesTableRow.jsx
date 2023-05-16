import React from "react"
import { format, parseISO } from "date-fns"

const DashboardCoursesTableRow = ({ course }) => {
  return (
    <tr>
      <td className="w-1/2">
        <div className="flex gap-2">
          <img src={course?.image} alt="ux" className="w-22 h-22" />

          <div className="flex flex-col justify-between w-[100%]">
            <div
              className="text-lg font-[600]
"
            >
              {course?.title}
            </div>
            <div className="text-sm text-grayish">
              {course?.modules?.length} Lessons
            </div>
          </div>
        </div>
      </td>
      <td className="align-middle text-center text-xl text-secondary w-1/4">
        {course?.startDate&&format(parseISO(course?.startDate), "dd MMM Y")}
      </td>
      <td className="align-middle text-xl text-right text-secondary w-1/4">
        {course?.level}
      </td>
    </tr>
  )
}

export default DashboardCoursesTableRow
