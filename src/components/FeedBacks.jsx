import React from "react"
import FeedBackCard from "./FeedBackCard"

const FeedBacks = () => {
  const feedback = {
    name: "Amelie",
    img: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80",
    post: "FullStack JS",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, facere quaerat numquam maiores obcaecati in.",
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
            <FeedBackCard info={feedback} />
            <FeedBackCard info={feedback} />
            <FeedBackCard info={feedback} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeedBacks
