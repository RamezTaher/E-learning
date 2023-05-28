import React from "react"

const ProgramCard = ({ info }) => {
  return (
    <div className="h-[450px] rounded-md overflow-hidden flex flex-col shadow-md">
      <div className="h-[200px]">
        <img
          src={info.img}
          alt="img"
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="flex flex-col items-center justify-around  p-3 h-full">
        <h1 className="text-secondary text-center text-lg font-bold">{info.title}</h1>
        <p className="text-center text-sm text-secondary-tint ">{info.description}</p>

      </div>
    </div>
  )
}

export default ProgramCard
