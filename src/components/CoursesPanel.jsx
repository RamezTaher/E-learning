import { Collapse } from "antd"
const { Panel } = Collapse
import React from "react"
import CourseCard from "./CourseCard"
import PlatformHeader from "./PlatformHeader"

const CoursesPanel = () => {
  const info = {}
  return (
    <>
      <div className="ml-[260px] w-full">
        <div className="container px-6 sm:mx-auto lg:px-10 py-3 w-full">
          <div className=" h-full w-full py-4 flex flex-col gap-10">
            <PlatformHeader location={"Courses"} />
            <section className="grid grid-cols-5 gap-1">
              <Collapse
                defaultActiveKey={["1"]}
                bordered={false}
                expandIconPosition={"end"}
                accordion
                className="col-span-1"
              >
                <Panel header="Subject" key="1" className="text-lg">
                  <div
                    className={` text-center py-2 mb-1 rounded-md bg-primary text-white hover:bg-primary hover:text-white transition-all `}
                  >
                    Game Development
                  </div>
                  <div
                    className={` text-center py-2 mb-1 rounded-md  hover:bg-primary hover:text-white transition-all `}
                  >
                    Web Development
                  </div>
                  <div
                    className={` text-center py-2 mb-1 rounded-md  hover:bg-primary hover:text-white transition-all `}
                  >
                    UI/UX Design
                  </div>
                  <div
                    className={` text-center py-2 mb-1 rounded-md  hover:bg-primary hover:text-white transition-all `}
                  >
                    Cyber Security
                  </div>
                </Panel>
              </Collapse>
              <div className="col-span-4 grid grid-cols-4 gap-1">
                <CourseCard info={info} />
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}

export default CoursesPanel
