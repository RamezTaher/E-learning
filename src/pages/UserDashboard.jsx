import React from "react"
import DashboardPanel from "../components/DashboardPanel"
import SideBar from "../components/SideBar"

const UserDashboard = () => {
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
