import React from "react"
import ProgramCard from "./ProgramCard"

const Trainings = () => {
  const course1 = {
    title: "Unlocking the Power of the Web: Mastering the Art of Web Development",
    description: "In the digital age, web development is a crucial skill. This course provides a comprehensive introduction to web development, covering both front-end and back-end technologies. From HTML and CSS to JavaScript frameworks and server-side programming, you'll learn the tools and techniques to create dynamic, interactive, and user-friendly websites and web applications.",
    img: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  }
  const course2 = {
    title: "Entrepreneurship",
    description: "Entrepreneurship is about turning ideas into successful ventures. This course is designed to inspire and equip aspiring entrepreneurs with the knowledge and skills needed to navigate the entrepreneurial journey. From identifying opportunities and creating business plans to marketing strategies and financial management, you'll learn the essential elements of entrepreneurship and gain practical insights to launch and grow your own venture.",
    img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
  }
  const course3 = {
    title: "Digital Marketing Mastery: Unleashing the Power of Online Promotion",
    description:"n the digital era, effective marketing strategies are essential for business success. This course dives into the world of digital marketing, covering topics such as search engine optimization (SEO), social media marketing, content marketing, and email marketing. Discover how to leverage online platforms, analyze data, and craft compelling campaigns to reach and engage target audiences in the digital landscape. Gain the skills to drive brand awareness",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1115&q=80",
  }
  
  return (
    <div>
      <div className="container px-6 sm:mx-auto relative lg:px-10  ">
        <div className="flex flex-col items-center gap-10">
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-secondary text-4xl font-[800]">
              Our most popular training programs
            </h1>
            <span className="w-32 h-1 rounded-sm bg-secondary"></span>
          </div>
          <div className="grid grid-cols-3 gap-10">
            <ProgramCard info={course1} />
            <ProgramCard info={course2} />
            <ProgramCard info={course3} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Trainings
