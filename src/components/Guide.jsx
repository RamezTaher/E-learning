import React from "react"
import Card from "./Card"
import path from "@/app/path.svg"
import matched from "@/app/team.svg"
import test from "@/app/test.svg"
import learn from "@/app/start.svg"
import hire from "@/app/hire.svg"
const Guide = () => {
  return (
    <div>
      <div className="container px-6 sm:mx-auto relative  lg:px-10 py-3 flex flex-col items-center">
        <h1 className="text-secondary text-4xl font-[800] mb-10">
          How it Works
        </h1>
        <div className="grid grid-cols-5">
          <Card img={path} title={"Choose a Path"} />
          <Card img={matched} title={"Get Matched "} />
          <Card img={learn} title={"Start Learning"} />
          <Card img={test} title={"Get Tested"} />
          <Card img={hire} title={"Get an Internship"} />
        </div>
      </div>
    </div>
  )
}

export default Guide
