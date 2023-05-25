import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { AddQuizToCourse, GetCourseById } from "../utils/api-interceptor"
import InstructorHeader from "../components/InstructorHeader"

const InstructorAddQuestionsToQuiz = () => {
  const { id, quizId } = useParams()
  const [course, setCourse] = useState({})

  useEffect(() => {
    GetCourseById(id)
      .then(({ data }) => {
        setCourse(data)
      })
      .catch((err) => console.log(err))
  }, [id])

  return (
    <>
      <InstructorHeader />
      <div className="container px-6 sm:mx-auto lg:px-10 pt-10   h-full pb-10 ">
        <Link to={`/instructor/courses/${id}/add-quiz`}>
          <div
            className="w-[120px] text-center bg-primary text-white py-2 px-4 mb-4
  "
          >
            Bo Back
          </div>
        </Link>
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl  font-bold mt-5">Quiz Details</h1>
          <h3 className="text-2xl font-bold">Questions : </h3>
        </div>
      </div>
    </>
  )
}

export default InstructorAddQuestionsToQuiz
