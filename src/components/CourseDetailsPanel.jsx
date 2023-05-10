import React from "react"
import PlatformHeader from "./PlatformHeader"
import courseImg from "@/react.jpg"
import { Collapse } from "antd"
const { Panel } = Collapse
import { TiTick } from "react-icons/ti"
const CourseDetailsPanel = () => {
  return (
    <div className="ml-[260px] w-full">
      <div className="container px-5 sm:mx-auto py-9 w-full">
        <div className=" h-full w-full flex flex-col gap-10">
          <PlatformHeader isSearch={false} location={"Courses"} />
          <section className="w-10/12 mx-auto flex flex-col gap-5">
            <div className="h-[350px]">
              <img
                src={courseImg}
                alt="course image"
                className="w-full h-full object-center "
              />
            </div>
            <div className="space-y-2">
              <h1 className="text-2xl text-secondary font-bold">
                What’s in mind of Game Developer
              </h1>
              <p>
                18 December 2021 - 20:00 -{" "}
                <span className="text-[#FF5821]"> (Live)</span> Zoom Application
                - Free entry
              </p>

              <button className="px-7 py-3 btn-primary rounded-md">
                Enroll
              </button>
            </div>
            <div className="flex mt-10">
              <div className="flex flex-col gap-2 w-1/4">
                <h1 className="text-2xl text-secondary font-bold">Trainer</h1>
                <img
                  src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80"
                  alt="Trainer image"
                  className="w-[140px] h-[140px] rounded-full object-cover"
                />
                <div>
                  <p className="text-secondary">Mourad Ben Youssef</p>
                  <p className="text-grayish text-sm">@mourad</p>
                </div>
              </div>
              <div className="w-3/4 space-y-8">
                <div className="space-y-2">
                  <h1 className="text-2xl text-secondary font-bold">
                    About the Training
                  </h1>
                  <p className="text-sm ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Odio dignissim aliquet neque eget. Quis orci, ut elementum
                    facilisi egestas. Tempus ac libero donec ornare.{" "}
                  </p>
                </div>
                <div className="space-y-3">
                  <h2 className="text-xl text-secondary font-semiBold">
                    Discussion topics
                  </h2>
                  <ul className="grid grid-cols-2 gap-5 text-sm">
                    <li className="list-disc list-inside">
                      Introduction to unity
                    </li>
                    <li className="list-disc list-inside">
                      Introduction to unity
                    </li>
                    <li className="list-disc list-inside">
                      Introduction to unity
                    </li>
                    <li className="list-disc list-inside">
                      Introduction to unity
                    </li>
                    <li className="list-disc list-inside">
                      Introduction to unity
                    </li>
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio
                  dignissim aliquet neque eget. Quis orci, ut elementum facilisi
                  egestas. Tempus ac libero donec ornare.{" "}
                </p>
              </div>

              <Collapse
                defaultActiveKey={["1"]}
                bordered={false}
                expandIconPosition={"end"}
                ghost
              >
                <Panel header="Module goes here" key="1" className="">
                  <div className={`py-2 mb-1 flex justify-between`}>
                    Title goes here
                    <div className="h-8 w-8 rounded-full flex items-center justify-center bg-[#4AB229] text-white">
                      <TiTick />
                    </div>
                  </div>
                  <div className={`py-2 mb-1 flex justify-between`}>
                    Title goes here
                    <div className="h-8 w-8 rounded-full flex items-center justify-center bg-[#4AB229] text-white">
                      <TiTick />
                    </div>
                  </div>
                </Panel>
                <Panel header="Module goes here" key="2" className="">
                  <div className={`py-2 mb-1 flex justify-between`}>
                    Title goes here
                    <div className="h-8 w-8 rounded-full flex items-center justify-center bg-[#4AB229] text-white">
                      <TiTick />
                    </div>
                  </div>
                  <div className={`py-2 mb-1 flex justify-between`}>
                    Title goes here
                    <div className="h-8 w-8 rounded-full flex items-center justify-center bg-[#4AB229] text-white">
                      <TiTick />
                    </div>
                  </div>
                </Panel>
                <Panel header="Module goes here" key="3" className="">
                  <div className={`py-2 mb-1 flex justify-between`}>
                    Title goes here
                    <div className="h-8 w-8 rounded-full flex items-center justify-center bg-[#4AB229] text-white">
                      <TiTick />
                    </div>
                  </div>
                  <div className={`py-2 mb-1 flex justify-between`}>
                    Title goes here
                    <div className="h-8 w-8 rounded-full flex items-center justify-center bg-[#4AB229] text-white">
                      <TiTick />
                    </div>
                  </div>
                </Panel>
              </Collapse>

              <button className="px-7 py-3 btn-primary rounded-md">
                Enroll
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default CourseDetailsPanel
