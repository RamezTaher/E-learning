import React, { useEffect, useState } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { useLocalStorage } from "react-use"

const IntructorProtectedRoute = ({ children, ...rest }) => {
  const [userProfile, setUserProfile, removeUserProfile] = useLocalStorage(
    "userProfile",
    {}
  )

  return userProfile && userProfile._id && userProfile.role === "instructor" ? (
    <Outlet />
  ) : (
    <Navigate to="/auth/login" />
  )
}

export default IntructorProtectedRoute
