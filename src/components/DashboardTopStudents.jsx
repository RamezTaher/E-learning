import React from "react"
import Student from "./Student"

const DashboardTopStudents = () => {
  return (
    <div>
      <h1 className="text-4xl font-[600] mb-6 text-secondary">Top Students</h1>
      <div className="grid grid-cols-2 gap-6">
        <div className="col-span-1">
          <Student />
        </div>
        <div className="col-span-1">
          <Student />
        </div>
        <div className="col-span-1">
          <Student />
        </div>
        <div className="col-span-1">
          <Student />
        </div>
      </div>
    </div>
  )
}

export default DashboardTopStudents
