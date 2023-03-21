import React from "react"
import { Carousel } from "antd"
import hero from "@/hero.png"
import CarouselItem from "./CarouselItem"
const Hero = () => {
  return (
    <Carousel autoplay className="bg-primary-tint ">
      <CarouselItem img={hero} />
      <CarouselItem img={hero} />
      <CarouselItem img={hero} />
    </Carousel>
  )
}

export default Hero
