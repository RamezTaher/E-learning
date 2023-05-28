import React, { useEffect, useState } from "react"
import { AiOutlineSearch } from "react-icons/ai"
import { MdOutlineNotifications } from "react-icons/md"
import { Link } from "react-router-dom"
import { useLocalStorage } from "react-use"
import { GetUser } from "../utils/api-interceptor"

const PlatformHeader = ({ location, isSearch }) => {
  const [user,setUser]=useState({})
  useEffect(() => {
    GetUser()
      .then(({ data }) => {
        setUser(data)
      })
      .catch((err) => console.log(err))
  }, [window.localStorage.getItem("token")])
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
            src={user?.profileImage}
            alt="user"
            className="w-12 h-12 rounded-full object-center object-cover"
          />
        </Link>
      </div>
    </div>
  )
}

export default PlatformHeader
