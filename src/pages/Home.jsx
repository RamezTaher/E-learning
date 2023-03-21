import React from "react"
import Experience from "../components/Experience"
import FeedBacks from "../components/FeedBacks"
import Foot from "../components/Foot"
import Guide from "../components/Guide"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Trainings from "../components/Trainings"

const Home = () => {
  return (
    <>
      <Header />
      <section>
        <Hero />
      </section>
      <section>
        <Experience />
      </section>
      <section className="py-20">
        <Guide />
      </section>
      <section>
        <Trainings />
      </section>
      <section className="py-20">
        <FeedBacks />
      </section>
      <Foot />
    </>
  )
}

export default Home
