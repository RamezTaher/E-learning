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
          <Card img={exp1} text={"Motivation is a powerful force that drives individuals to take action, overcome challenges, and achieve their goals. It is the internal or external stimulus that inspires and fuels our behavior, giving us the energy and determination to pursue what we desire."} title={"Motivation"} className="col-span-1" />
          <Card img={exp1} title={"Inventiveness"} text={"Inventiveness is a quality that involves the ability to think creatively, generate original ideas, and develop innovative solutions to problems. It is the capacity to approach situations with a fresh perspective, think outside the box, and come up with novel concepts or creations."} className="col-span-1" />
          <Card img={exp1} title={"Discipline"} text={"Discipline is a fundamental quality that involves self-control, adherence to rules or principles, and the ability to stay focused and committed to achieving goals. It is the practice of restraining impulses, overcoming distractions, and consistently taking the necessary actions to accomplish desired outcomes."} className="col-span-1" />
          <Card img={exp1} title={"Innovation"} text={"Innovation is the process of introducing new ideas, methods, products, or services that create value and lead to positive change. It involves the application of creativity, problem-solving, and resourcefulness to develop novel solutions or improvements that address existing challenges or meet evolving needs."} className="col-span-1" />
        </div>
      </div>
    </div>
  )
}

export default Experience
