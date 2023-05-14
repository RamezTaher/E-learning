import React, { useEffect, useState } from "react"
import Student from "./Student"
import { GetTopUsers } from "../utils/api-interceptor"

const DashboardTopStudents = () => {
  const [topStudents, setTopStudents] = useState([])
  useEffect(() => {
    GetTopUsers()
      .then(({ data }) => {
        setTopStudents(data)
        console.log(data)
      })
      .catch((err) => console.log(err))
  }, [])
  return (
    <div>
      <h1 className="text-2xl font-[600] mb-6 text-secondary">Top Students</h1>
      <div className="grid grid-cols-2 gap-6">
        {topStudents.map((student, idx) => (
          <div className="col-span-1" key={idx}>
            <Student student={student} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default DashboardTopStudents
