import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import {
  AddQuizToCourse,
  GetCourseById,
  GetQuizById,
} from "../utils/api-interceptor"
import InstructorHeader from "../components/InstructorHeader"

const InstructorAddQuestionsToQuiz = () => {
  const { id, quizId } = useParams()
  const [quiz, setQuiz] = useState({})

  useEffect(() => {
    GetQuizById(quizId)
      .then(({ data }) => {
        setQuiz(data)
      })
      .catch((err) => console.log(err))
  }, [quizId])

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
          {quiz?.questions?.length > 0 && (
            <div className="flex flex-col gap-2">
              {quiz.questions.map((question, idx) => (
                <div key={question._id}>
                  <div className="flex items-center gap-2 text-xl">
                    <h3 className=" font-bold">Questions N°{idx + 1} : </h3>
                    <div>{question.question}</div>
                  </div>
                  <div className="flex items-center gap-2 text-xl">
                    <h3 className=" font-bold">Responses : </h3>
                    <div className="flex items-center gap-2">
                      {question.answers.map((answer, index) => (
                        <div>{answer}</div>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xl">
                    <h3 className=" font-bold">Correct Answer : </h3>
                    <div className="flex items-center gap-2">
                      {question.answers[question.correctAnswer]}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default InstructorAddQuestionsToQuiz
