import React from "react"

const ProgramCard = ({ info }) => {
  return (
    <div className="h-[330px] rounded-md overflow-hidden flex flex-col shadow-md">
      <div className="h-32">
        <img
          src={info.img}
          alt="img"
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="flex flex-col items-center justify-around  p-3 h-full">
        <h1 className="text-secondary text-2xl font-bold">{info.title}</h1>
        <p className="text-center text-secondary-tint ">{info.description}</p>

        <button className="btn-primary py-2 w-24 rounded-md">Enroll</button>
      </div>
    </div>
  )
}

export default ProgramCard
