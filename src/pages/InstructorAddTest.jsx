import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import {
  AddLessonToModule,
  AddModuleToCourse,
  AddTestToCourse,
  DeleteLessonFromModule,
  GetCourseById,
  RemoveModuleFromCourse,
} from "../utils/api-interceptor"
import { AiFillDelete, AiFillMinusCircle } from "react-icons/ai"
import InstructorHeader from "../components/InstructorHeader"

const InstructorAddTest = () => {
  const { id } = useParams()
  const [course, setCourse] = useState({})
  const [newLink, setNewLink] = useState("")

  useEffect(() => {
    GetCourseById(id)
      .then(({ data }) => {
        setCourse(data)
      })
      .catch((err) => console.log(err))
  }, [id])

  const addTest = async (e) => {
    e.preventDefault()
    console.log("clicked")
    if (newLink) {
      try {
        const res = await AddTestToCourse(id, {
          test: newLink,
        })
        if (res.status === 200) {
          console.log(res.data)
          alert("test Added Successfully")
          window.location.reload()
        }
      } catch (error) {
        console.log(error)
      }
    } else {
      alert("fill All Fields")
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
        <div>
          <h1 className="text-4xl  font-bold my-5">Course Test</h1>
          {course?.test && (
            <div className="flex items-center gap-2">
              <div className="text-xl font-bold">test Link :</div>{" "}
              <div>{course.test}</div>
            </div>
          )}
          {!course?.test && <div>No test Yet</div>}

          <div className="mt-10">
            <h1 className="text-4xl font-bold">Add New Test / Update</h1>

            <form className="grid grid-cols-2 gap-4 mt-2 ">
              <div className="flex flex-col gap-1">
                <label>Test Link</label>
                <input
                  type="text"
                  placeholder="Enter Lesson Title"
                  value={newLink}
                  onChange={(e) => setNewLink(e.target.value)}
                />
              </div>

              <div
                className="flex items-end justify-start "
                onClick={(e) => addTest(e)}
              >
                <button className="bg-primary text-white py-3 rounded w-[250px] text-lg">
                  Add/Update Test
                </button>
              </div>
            </form>

            <div>
              <h1 className="text-4xl  font-bold my-5">Test Responses</h1>
              {course?.responses?.length > 0 && (
                <div>
                  {course.responses.map((response) => (
                    <div
                      key={response._id}
                      className="flex items-center gap-5 text-xl"
                    >
                      <div className="flex items-center gap-1  ">
                        <span className=" font-bold">Student</span>{" "}
                        {response.student}
                      </div>
                      <div className="flex items-center gap-1 ">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={response.link}
                        >
                          <div className="text-primary font-bold">
                            Response Link
                          </div>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {course?.responses?.length === 0 && <div>No Responses Yet</div>}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default InstructorAddTest
