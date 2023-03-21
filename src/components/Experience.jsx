import React from "react"
import Card from "./Card"
import exp1 from "@/ways/inventiveness.svg"

const Experience = () => {
  return (
    <div>
      <div className="container px-6 sm:mx-auto relative  lg:px-10 py-3 flex flex-col">
        <div className="flex flex-col items-center justify-center gap-5 py-28">
          <h1 className="text-secondary text-4xl font-bold">
            Creating the best experience Tailored for YOU!
          </h1>
          <p className="text-secondary-tint text-sm ">
            Earn skills for your development journey, while embracing the needs
            of the market !
          </p>
        </div>

        <div className="grid grid-cols-4 gap-5">
          <Card img={exp1} title={"Inventiveness"} className="col-span-1" />
          <Card img={exp1} title={"Inventiveness"} className="col-span-1" />
          <Card img={exp1} title={"Inventiveness"} className="col-span-1" />
          <Card img={exp1} title={"Inventiveness"} className="col-span-1" />
        </div>
      </div>
    </div>
  )
}

export default Experience
