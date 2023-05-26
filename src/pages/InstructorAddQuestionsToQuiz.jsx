import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import {
  GetQuizById,
  addQuestionToQuiz,
  removeQuestionFromQuiz,
} from "../utils/api-interceptor"
import InstructorHeader from "../components/InstructorHeader"
import { AiFillDelete } from "react-icons/ai"

const InstructorAddQuestionsToQuiz = () => {
  const { id, quizId } = useParams()
  const [quiz, setQuiz] = useState({})
  const [qs, setQs] = useState("")
  const [possibleAnswers, setPossibleAnswers] = useState("")
  const [correctAnswer, setCorrectAnswer] = useState(0)

  useEffect(() => {
    GetQuizById(quizId)
      .then(({ data }) => {
        setQuiz(data)
      })
      .catch((err) => console.log(err))
  }, [quizId])

  const handleAddQuestion = async (e) => {
    e.preventDefault()
    if (!qs && !possibleAnswers && correctAnswer === 0) {
      alert("Fill All Fields")
    } else {
      try {
        const res = await addQuestionToQuiz(quizId, {
          question: qs,
          answers: possibleAnswers.split("/"),
          correctAnswer,
        })
        if (res.status === 201) {
          console.log(res.data)
          alert("Question Added Successfully")
          window.location.reload()
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
  const deleteHandler = async (e, questionId) => {
    e.preventDefault()
    if (window.confirm("Are you sure to delete this Question")) {
      try {
        const res = await removeQuestionFromQuiz(quizId, questionId)
        const deletedQuestion = res.data
        alert(deletedQuestion.message)
        window.location.reload()
      } catch (error) {
        console.log(error)
      }
    }
  }

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
                    <button
                      variant="danger"
                      className="btn-sm"
                      onClick={(e) => deleteHandler(e, question?._id)}
                    >
                      <AiFillDelete color="red" size={20} />
                    </button>
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
                      {question.answers[question.correctAnswer - 1]}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          {quiz?.questions?.length === 0 && (
            <div>No Questions Yet In This Quiz</div>
          )}
          <form className="flex flex-col gap-3">
            <h1 className="text-3xl font-bold">Add Question</h1>
            <div className="flex flex-col gap-2">
              <label className="text-xl">Question : </label>
              <input
                type="text"
                value={qs}
                placeholder="Enter A Question"
                onChange={(e) => setQs(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xl">Answers (Seperated By " / ") : </label>

              <textarea
                type="text"
                value={possibleAnswers}
                placeholder="Enter Possible Answers Seperated By ' / '"
                className="h-[120px]  resize-none"
                onChange={(e) => setPossibleAnswers(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xl">Correct Answers Number :</label>

              <input
                type="text"
                value={correctAnswer}
                placeholder="Enter Number Of Correct Answer"
                onChange={(e) => setCorrectAnswer(e.target.value)}
              />
            </div>
            <div className="w-[200px] ">
              <button
                className="btn-primary btn px-0"
                onClick={(e) => handleAddQuestion(e)}
              >
                Add Question
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default InstructorAddQuestionsToQuiz
