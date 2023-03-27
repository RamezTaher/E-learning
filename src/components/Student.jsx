import React from "react"
import { AiOutlinePlus } from "react-icons/ai"

const Student = () => {
  return (
    <div className="flex items-center justify-between bg-[#F5F6FB] rounded-md p-2">
      <div className="flex items-center gap-2">
        <img
          src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80"
          alt="user"
          className="w-14 h-14 rounded-full object-center object-cover"
        />
        <div className="flex flex-col">
          <div className="text-secondary text-lg font-semiBold">
            Ramez Taher
          </div>
          <div className="text-sm text-grayish">@rameztaher</div>
        </div>
      </div>

      <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white cursor-pointer">
        <AiOutlinePlus size={18} />
      </div>
    </div>
  )
}

export default Student
