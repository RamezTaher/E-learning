import React, { useEffect, useState } from "react"
import SideBar from "../components/SideBar"
import { Link, useNavigate, useParams } from "react-router-dom"
import { GetQuizById } from "../utils/api-interceptor"

const UserCourseQuiz = () => {
  const { id, quizId } = useParams()
  const [quiz, setQuiz] = useState({})
  const [q, setQ] = useState(0)
  const [checked, setChecked] = useState(undefined)
  const [final, setFinal] = useState(false)
  const [score, setScore] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {
    GetQuizById(quizId)
      .then(({ data }) => {
        setQuiz(data)
      })
      .catch((err) => console.log(err))
  }, [quizId])
  const onNext = () => {
    if (!final) {
      if (checked + 1 === quiz.questions[q].correctAnswer) {
        setScore((prev) => prev + 1)
        alert("Correct Answer")
      } else {
        alert("Wrong Answer")
      }

      if (quiz.questions.length === q + 1) {
        setFinal(true)
      } else {
        setChecked(undefined)
        setQ((prv) => prv + 1)
      }
    } else {
      alert(`You Got ${score}/${quiz.questions.length}`)
    }
  }
  const onSelect = (i) => {
    setChecked(i)
  }
  const onGoBack = () => {
    navigate(`/platform/course/${id}`)
  }
  return (
    <div className="flex">
      <SideBar />
      <div className="ml-[260px] w-full">
        <div className=" container px-5  sm:mx-auto lg:px-10 py-9   h-full ">
          <Link to={`/platform/course/${id}`}>
            <div
              className="w-[120px] text-center bg-primary text-white py-2 px-4 mb-2
          "
            >
              Bo Back
            </div>
          </Link>

          <div className="cont">
            {quiz.questions?.length > 0 && (
              <>
                <h1 className="title text-light">Quiz Questions</h1>

                <div className="questions">
                  <h2 className=" text-xl font-bold ">
                    {quiz?.questions[q]?.question}
                  </h2>

                  <ul>
                    {quiz?.questions[q]?.answers?.map((q, i) => (
                      <li key={i} onClick={() => onSelect(i)}>
                        <label
                          className="text-primary"
                          htmlFor={`q${i}-option`}
                        >
                          {q}
                        </label>
                        <div
                          className={`check ${checked === i ? "checked" : ""}`}
                        ></div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-2">
                  <button className="btn btn-primary text-xl" onClick={onNext}>
                    {final ? "Get Results" : "Next"}
                  </button>
                  {final && (
                    <button
                      className="btn btn-primary text-xl"
                      onClick={onGoBack}
                    >
                      Go Back
                    </button>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserCourseQuiz
