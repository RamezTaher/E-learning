import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { AddQuizToCourse, GetCourseById } from "../utils/api-interceptor"
import InstructorHeader from "../components/InstructorHeader"

const InstructorAddQuiz = () => {
  const { id } = useParams()
  const [course, setCourse] = useState({})

  useEffect(() => {
    GetCourseById(id)
      .then(({ data }) => {
        setCourse(data)
      })
      .catch((err) => console.log(err))
  }, [id])

  const addQuiz = async (e) => {
    try {
      const res = await AddQuizToCourse(id)
      if (res.status === 200) {
        alert("Quiz Added Successfully")
        window.location.reload()
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <InstructorHeader />
      <div className="container px-6 sm:mx-auto lg:px-10 pt-10   h-full pb-10 ">
        <Link to={"/instructor/courses"}>
          <div
            className="w-[120px] text-center bg-primary text-white py-2 px-4 mb-4
  "
          >
            Bo Back
          </div>
        </Link>
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl  font-bold mt-5">Course Quiz</h1>
          <h3 className="text-2xl font-bold">Quiz List : </h3>
          {course?.quiz && (
            <div className="flex flex-col gap-2">
              {course?.quiz?.map((element, idx) => (
                <div
                  key={element._id}
                  className="flex items-center gap-2 text-xl"
                >
                  <Link
                    to={`/instructor/courses/${id}/add-quiz/${element?._id}`}
                  >
                    <span className="text-primary">Quiz N°{idx + 1}</span>
                  </Link>

                  <span> {element?.questions?.length ?? 0} Question</span>
                </div>
              ))}
            </div>
          )}
          {!course?.test && <div>No Quiz Yet</div>}
        </div>
        <div className="mt-5">
          <div
            className="flex items-end justify-start "
            onClick={(e) => addQuiz(e)}
          >
            <button className="bg-primary text-white py-3 rounded w-[250px] text-lg">
              Add New Quiz
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default InstructorAddQuiz
