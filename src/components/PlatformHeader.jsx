import React from "react"
import { AiOutlineSearch } from "react-icons/ai"
import { MdOutlineNotifications } from "react-icons/md"
import { Link } from "react-router-dom"

const PlatformHeader = ({ location, isSearch }) => {
  return (
    <div className="flex justify-between items-center ">
      <div className="text-secondary text-2xl font-semibold">{location}</div>
      {isSearch && (
        <div className="relative text-secondary w-1/2">
          <input
            type="text"
            placeholder="Search..."
            className="rounded-md py-1 px-8 text-lg text-secondary focus:border-secondary"
          />
          <AiOutlineSearch className="absolute top-1/2 left-2 -translate-y-1/2 text-lg " />
        </div>
      )}

      <div className="flex items-center gap-2">
        <MdOutlineNotifications size={26} className="cursor-pointer" />
        <Link to={"/user/profile"}>
          <img
            src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80"
            alt="user"
            className="w-12 h-12 rounded-full object-center object-cover"
          />
        </Link>
      </div>
    </div>
  )
}

export default PlatformHeader
