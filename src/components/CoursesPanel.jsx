import React from "react"
import { Collapse } from "antd"
const { Panel } = Collapse
import { useNavigate } from "react-router-dom"
import CourseCard from "./CourseCard"
import PlatformHeader from "./PlatformHeader"

const CoursesPanel = () => {
  const info = {
    lessonImg:
      "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    student: 500,
    time: 2,
    title: "Mastering HTML CSS With Bootstrap",
    teacher: "Ramez Taher",
    img: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80",
  }
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
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((idx) => (
                  <div key={idx} onClick={() => goToCourse(idx)}>
                    <CourseCard info={info} />
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
