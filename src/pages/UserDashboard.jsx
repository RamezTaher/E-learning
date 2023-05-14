import React, { useEffect, useState } from "react"
import DashboardPanel from "../components/DashboardPanel"
import SideBar from "../components/SideBar"
import { GetUser } from "../utils/api-interceptor"
import { useLocalStorage } from "react-use"

const UserDashboard = () => {
  const [userProfile, setUserProfile, removeUserProfile] = useLocalStorage(
    "userProfile",
    {}
  )

  useEffect(() => {
    GetUser()
      .then(({ data }) => {
        setUserProfile(data)
      })
      .catch((err) => console.log(err))
  }, [])
  return (
    <>
      <section className="flex">
        <SideBar />
        <DashboardPanel />
      </section>
    </>
  )
}

export default UserDashboard
