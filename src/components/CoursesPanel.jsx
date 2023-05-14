import React from "react"
import { Collapse } from "antd"
const { Panel } = Collapse
import { useNavigate } from "react-router-dom"
import CourseCard from "./CourseCard"
import PlatformHeader from "./PlatformHeader"
import { useLocalStorage } from "react-use"

const CoursesPanel = () => {
  const [courses, setCourses, removeCourses] = useLocalStorage("courses", [])
  const navigate = useNavigate()
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
                <Panel header="Subject" key="1" className="text-lg">
                  <div
                    className={` text-center py-2 mb-1 rounded-md bg-primary text-white hover:bg-primary hover:text-white transition-all cursor-pointer`}
                  >
                    Game Development
                  </div>
                  <div
                    className={` text-center py-2 mb-1 rounded-md  hover:bg-primary hover:text-white transition-all cursor-pointer`}
                  >
                    Web Development
                  </div>
                  <div
                    className={` text-center py-2 mb-1 rounded-md  hover:bg-primary hover:text-white transition-all cursor-pointer`}
                  >
                    UI/UX Design
                  </div>
                  <div
                    className={` text-center py-2 mb-1 rounded-md  hover:bg-primary hover:text-white transition-all cursor-pointer`}
                  >
                    Cyber Security
                  </div>
                </Panel>
              </Collapse>
              <div className="col-span-4 grid grid-cols-4 gap-x-2 gap-y-4">
                {courses.map((course, idx) => (
                  <div key={idx} onClick={() => goToCourse(idx)}>
                    <CourseCard course={course} />
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}

export default CoursesPanel
