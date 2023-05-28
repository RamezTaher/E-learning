import React from "react"

const Card = ({ img, title,text }) => {
  return (
    <div className="flex flex-col gap-4 p-10">
      <div className="w-15">
        <img src={img} alt="way" />
      </div>
      <h1 className="text-secondary text-xl font-[800]">{title}</h1>
      <p className="text-secondary-tint text-sm">
        {text}
      </p>
    </div>
  )
}

export default Card
