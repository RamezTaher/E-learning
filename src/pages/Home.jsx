import React from "react"
import Experience from "../components/Experience"
import Footer from "../components/footer"
import Header from "../components/Header"
import Hero from "../components/Hero"

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
      <Footer />
    </>
  )
}

export default Home
