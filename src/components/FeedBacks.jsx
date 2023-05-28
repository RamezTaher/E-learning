import React from "react"
import FeedBackCard from "./FeedBackCard"

const FeedBacks = () => {
  const feedback1 = {
    name: "Mourad",
    img: "https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    post: "UX Design",
    content:
    "I thoroughly enjoyed the UX Design course. The instructors were knowledgeable, and the hands-on projects provided valuable practical experience. Highly recommended!"
  }
  const feedback2 = {
    name: "Saif",
    img: "https://images.unsplash.com/photo-1466112928291-0903b80a9466?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80",
    post: "Data Science",
    content:
    "The Data Science course exceeded my expectations. The curriculum was comprehensive, and the instructors guided us through real-world data analysis scenarios."
  }
  const feedback3 = {
    name: "Sarra",
    img:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" ,
    post: "Digital Marketing",
    content:"Digital Marketing course provided invaluable insights into the latest marketing trends and strategies. The practical assignments helped me develop a strong foundation"
    }
  return (
    <div>
      <div className="container px-6 sm:mx-auto relative lg:px-10  ">
        <div className="flex flex-col items-center gap-10">
          <div className="flex flex-col items-center gap-4 mb-10">
            <h1 className="text-secondary text-4xl font-[800]">
              What our students say about us
            </h1>
            <span className="w-32 h-1 rounded-sm bg-secondary"></span>
          </div>

          <div className="flex items-center gap-10">
            <FeedBackCard info={feedback1} />
            <FeedBackCard info={feedback2} />
            <FeedBackCard info={feedback3} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeedBacks
