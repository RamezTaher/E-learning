import React, { useEffect, useState } from "react"
import PlatformHeader from "./PlatformHeader"
import { Collapse } from "antd"
const { Panel } = Collapse
import { TiTick } from "react-icons/ti"
import { GetCourseById } from "../utils/api-interceptor"
import { useNavigate, useParams } from "react-router-dom"
import { format, parseISO } from "date-fns"
const CourseDetailsPanel = () => {
  const { id } = useParams()
  const [course, setCourse] = useState({})
  const navigate = useNavigate()
  useEffect(() => {
    GetCourseById(id)
      .then(({ data }) => {
        setCourse(data)
      })
      .catch((err) => console.log(err))
  }, [])

  const goToCourse = (e) => {
    e.preventDefault()
    navigate(`/platform/course/${id}`)
  }

  return (
    <div className="ml-[260px] w-full">
      <div className="container px-5 sm:mx-auto py-9 w-full">
        <div className=" h-full w-full flex flex-col gap-10">
          <PlatformHeader isSearch={false} location={"Course"} />
          <section className="w-10/12 mx-auto flex flex-col gap-5">
            <div className="h-[350px]">
              <img
                src={course.image}
                alt="course image"
                className="w-full h-full object-center "
              />
            </div>
            <div className="space-y-2">
              <h1 className="text-2xl text-secondary font-bold">
                {course.title}
              </h1>
              <p>
                {course.startDate &&
                  format(parseISO(course.startDate), "dd MMMM Y")}{" "}
                - <span className="text-[#FF5821]"> (Live)</span> Zoom
                Application
              </p>
            </div>
            <div className="flex mt-10">
              <div className="flex flex-col gap-2 w-1/4">
                <h1 className="text-2xl text-secondary font-bold">Trainer</h1>
                <img
                  src={course.instructor?.profileImage}
                  className="w-[140px] h-[140px] rounded-full object-cover"
                />
                <div>
                  <p className="text-secondary">
                    {course.instructor?.firstName}
                    {course.instructor?.lastName}
                  </p>
                  <p className="text-grayish text-sm">
                    @{course.instructor?.username}
                  </p>
                </div>
              </div>
              <div className="w-3/4 space-y-8">
                <div className="space-y-2">
                  <h1 className="text-2xl text-secondary font-bold">
                    About the Training
                  </h1>
                  <p className="text-sm ">{course.description}</p>
                </div>
                <div className="space-y-3">
                  <h2 className="text-xl text-secondary font-semiBold">
                    Discussion topics
                  </h2>
                  <ul className="grid grid-cols-2 gap-5 text-sm">
                    {course?.modules?.map((element, idx) => (
                      <li className="list-disc list-inside" key={idx}>
                        {element?.title}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-16 space-y-16">
              <div className="space-y-2">
                <h1 className="text-2xl text-secondary font-bold">
                  What you’ll learn
                </h1>
                <p className="text-sm ">
                  {course?.subject?.name} - {course?.subject?.description}
                </p>
              </div>

              <Collapse
                defaultActiveKey={["1"]}
                bordered={false}
                expandIconPosition={"end"}
                ghost
              >
                {course?.modules?.map((modul, idx) => (
                  <Panel
                    header={modul.title}
                    key={idx + 1}
                    className="text-xl font-bold"
                  >
                    {modul?.lessons.map((lesson, index) => (
                      <div
                        key={index}
                        className={`py-2 mb-1 flex justify-between text-lg font-normal`}
                      >
                        {lesson.title}
                        <div
                          className="flex items-center gap-5
                        "
                        >
                          {lesson.duration} h
                          <div className="h-8 w-8 rounded-full flex items-center justify-center bg-[#4AB229] text-white">
                            <TiTick />
                          </div>
                        </div>
                      </div>
                    ))}
                  </Panel>
                ))}
              </Collapse>

              <button
                className="px-7 py-3 btn-primary rounded-md"
                onClick={(e) => goToCourse(e)}
              >
                Go Course
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default CourseDetailsPanel
