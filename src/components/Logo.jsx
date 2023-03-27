import React from "react"

const Logo = ({ size }) => {
  return (
    <div className={`text-center text-[${size}px]`}>
      <span className="text-primary">L</span>earn{" "}
      <span className="text-primary">U</span>p
    </div>
  )
}

export default Logo
