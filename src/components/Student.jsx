import React from "react"
import { AiOutlinePlus } from "react-icons/ai"

const Student = ({ student }) => {
  return (
    <div className="flex items-center justify-between bg-[#F5F6FB] rounded-md p-2">
      <div className="flex items-center gap-2">
        <img
          src={student.profileImage}
          alt="user"
          className="w-14 h-14 rounded-full object-center object-cover"
        />
        <div className="flex flex-col">
          <div className="text-secondary text-lg font-semiBold">
            {student.firstName} {student.lastName}
          </div>
          <div className="text-sm text-grayish">@{student.username}</div>
        </div>
      </div>

      <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white cursor-pointer">
        <AiOutlinePlus size={18} />
      </div>
    </div>
  )
}

export default Student
