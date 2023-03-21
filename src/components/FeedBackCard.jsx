import React from "react"

const FeedBackCard = ({ info }) => {
  return (
    <div className="flex flex-col gap-6 items-center shadow-lg rounded-md overflow-hidden w-[350px] p-7">
      <div className="flex items-center gap-4">
        <img
          src={info.img}
          alt="img"
          className="w-20 h-20 rounded-full object-right object-cover"
        />

        <div className="flex flex-col">
          <h3 className="text-2xl text-secondary font-bold">{info.name}</h3>
          <span className="text-sm text-secondary-tint font-bold">
            {info.post}
          </span>
        </div>
      </div>
      <div>
        <p className="text-center text-secondary text-[16px]">{info.content}</p>
      </div>
    </div>
  )
}

export default FeedBackCard
