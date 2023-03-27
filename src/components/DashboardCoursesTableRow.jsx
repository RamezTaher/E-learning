import React from "react"
import ux from "@/ux.png"

const DashboardCoursesTableRow = () => {
  return (
    <tr>
      <td className="w-1/2">
        <div className="flex gap-2">
          <img src={ux} alt="ux" className="w-22 h-22" />

          <div className="flex flex-col justify-between w-[100%]">
            <div
              className="text-lg font-[600]
"
            >
              Basics of Mobile UX
            </div>
            <div className="text-sm text-grayish">5 Lessons</div>
          </div>
        </div>
      </td>
      <td className="align-middle text-center text-xl text-secondary w-1/4">
        Feb 24
      </td>
      <td className="align-middle text-xl text-right text-secondary w-1/4">
        Intermediate
      </td>
    </tr>
  )
}

export default DashboardCoursesTableRow
