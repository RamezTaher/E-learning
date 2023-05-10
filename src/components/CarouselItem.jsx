import React from "react"

const CarouselItem = ({ img }) => {
  return (
    <div className="py-6 flex items-center h-[500px]">
      <div className="flex flex-col  gap-8 px-20 w-1/2">
        <h2 className="text-[40px] font-bold text-secondary leading-10">
          Learn with us <br /> We are the best.
        </h2>

        <p className="text-secondary text-lg">
          Create beautiful webflow sites with flowbase. clone for free and get
          started building a site today
        </p>
        <div className="w-[175px]">
          <button className="w-full py-3 btn-primary text-lg font-bold">
            Sign up
          </button>
        </div>
      </div>
      <div className="w-1/2 flex items-center justify-center">
        <img
          className="h-full object-center object-cover brightness-50"
          src={img}
          alt="hero"
        />
      </div>
    </div>
  )
}

export default CarouselItem
