import React, { useEffect, useState } from "react"
import { Collapse } from "antd"
const { Panel } = Collapse
import { useNavigate } from "react-router-dom"
import CourseCard from "./CourseCard"
import PlatformHeader from "./PlatformHeader"
import { useLocalStorage } from "react-use"
import {
  GetAllCourses,
  GetAllSubjects,
  GetUser,
} from "../utils/api-interceptor"
import UserProfile from "../pages/UserProfile"

const CoursesPanel = () => {
  const [courses, setCourses, removeCourses] = useLocalStorage("courses", [])
  const [userProfile, setUserProfile, removeUserProfile] = useLocalStorage(
    "userProfile",
    {}
  )

  const [subjects, setSubjects] = useState([])
  const [AllCourses, setAllCourses] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    GetAllSubjects()
      .then(({ data }) => {
        setSubjects(data)
      })
      .catch((err) => console.log(err))
  }, [window.localStorage.getItem("token")])
  useEffect(() => {
    GetUser()
      .then(({ data }) => {
        setAllCourses(data.courses)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [window.localStorage.getItem("token")])
  const goToCourse = (idx) => {
    navigate(`/platform/courses/${idx}`)
  }
  return (
    <>
      <div className="ml-[260px] w-full">
        <div className="container px-5 sm:mx-auto py-3 w-full">
          <div className=" h-full w-full py-4 flex flex-col gap-10">
            <PlatformHeader isSearch={true} location={"Courses"} />
            <section className="grid grid-cols-5 gap-1">
              <Collapse
                defaultActiveKey={["1"]}
                bordered={false}
                expandIconPosition={"end"}
                accordion
                ghost
                className="col-span-1"
              >
                <Panel header="Subjects" key="1" className="text-lg">
                  {subjects.map((element, idx) => (
                    <div
                      key={idx}
                      className={` text-center py-2 mb-1 rounded-md  hover:bg-primary hover:text-white transition-all cursor-pointer
                      `}
                    >
                      {element.name}
                    </div>
                  ))}
                </Panel>
              </Collapse>
              <div className="col-span-4 grid grid-cols-4 gap-x-2 gap-y-4">
                {AllCourses.length > 0 &&
                  AllCourses.map((course, idx) => (
                    <div key={idx} onClick={() => goToCourse(course._id)}>
                      <CourseCard course={course} />
                    </div>
                  ))}
                {AllCourses.length === 0 && <div>No Courses Yet</div>}
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}

export default CoursesPanel
