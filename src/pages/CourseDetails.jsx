import React, { useEffect, useState } from "react"
import AdminHeader from "../components/AdminHeader"
import { Link, useNavigate, useParams } from "react-router-dom"
import { GetCourseById, UpdateCourse } from "../utils/api-interceptor"
import { DatePicker } from "antd"
import { format, parseISO } from "date-fns"
import SideBar from "../components/SideBar"

const CourseDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [title, setTitle] = useState("")
  const [image, setImage] = useState("")
  const [description, setDescription] = useState("")
  const [level, setLevel] = useState("")
  const [duration, setDuration] = useState("")
  const [startDate, setStartDate] = useState("")
  const [instructor, setInstructor] = useState({})
  const [subject, setSubject] = useState({})
  const [modules, setModules] = useState([])

  const handleDateChange = (date) => {
    if (date) {
      const formattedDate = date.toISOString()
      setStartDate(formattedDate)
    } else {
      setStartDate(null)
    }
  }

  const getEmbeddedLink = (youtubeLink) => {
    const videoId = youtubeLink.match(
      /(?<=v=|\/embed\/|\/v\/|\/youtu.be\/|\/watch\?v=|&v=|youtu.be\/|\/v=|\/embed\/|\/watch\?v=|&v=|\?v=)([^#\&\?]{11})/
    )

    if (videoId) {
      const embeddedLink = `https://www.youtube.com/embed/${videoId[1]}`

      return embeddedLink
    }

    return null
  }

  useEffect(() => {
    GetCourseById(id)
      .then(({ data }) => {
        setTitle(data.title)
        setImage(data.image)
        setDescription(data.description)
        setDuration(data.duration)
        setLevel(data.level)
        setStartDate(data.startDate)
        setInstructor(data.instructor)
        setSubject(data.subject)
        setModules(data.modules)
      })
      .catch((err) => console.log(err))
  }, [id])

  return (
    <div className="flex">
      <SideBar />
      <div className="ml-[260px] w-full">
        <div className=" container px-5  sm:mx-auto lg:px-10 py-9   h-full pb-10 ">
          <Link to={"/platform/courses"}>
            <div
              className="w-[120px] text-center bg-primary text-white py-2 px-4 mb-2
          "
            >
              Bo Back
            </div>
          </Link>
          <form>
            <div className="mb-2">
              <h1 className="text-2xl text-secondary font-bold mb-2">
                Course Title
              </h1>
              <input
                type="text"
                placeholder="Enter Course Title"
                value={title}
                readOnly
              ></input>
            </div>
            <div className="mb-2">
              <h1 className="text-2xl text-secondary font-bold mb-2">
                Course Image
              </h1>
              <img
                src={image}
                className="w-full h-[400px] mb-2 object-cover object-center"
              />
            </div>
            <div className="mb-2">
              <h1 className="text-2xl text-secondary font-bold mb-2">
                Course Description
              </h1>
              <textarea
                type="text"
                placeholder="Enter Course Description"
                value={description}
                readOnly
              />
            </div>
            <div className="mb-2">
              <h1 className="text-2xl text-secondary font-bold mb-2">
                Course Duration Hours
              </h1>
              <input
                type="text"
                placeholder="Enter Course Duration"
                value={duration}
                readOnly
              ></input>
            </div>
            <div className="mb-2">
              <h1 className="text-2xl text-secondary font-bold mb-2">
                Level: beginner / intermediate / advanced{" "}
              </h1>
              <input
                type="text"
                placeholder="Enter Course Level"
                value={level}
                readOnly
              ></input>
            </div>
            <div className="mb-2">
              <h1 className="text-2xl text-secondary font-bold mb-2">
                Course Start Date{" "}
              </h1>
              <div className="flex items-center justify-between mt-1">
                <div>
                  {" "}
                  {startDate && format(parseISO(startDate), "dd MMMM Y")}{" "}
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <div className="flex flex-col gap-2 w-1/4">
                <h1 className="text-2xl text-secondary font-bold mb-2">
                  Trainer
                </h1>
                <img
                  src={instructor?.profileImage}
                  className="w-[140px] h-[140px] rounded-full object-cover"
                />
                <div>
                  <p className="text-secondary">
                    {instructor?.firstName}
                    {instructor?.lastName}
                  </p>
                  <p className="text-grayish text-sm">
                    @{instructor?.username}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2 w-1/4">
                <h1 className="text-2xl text-secondary font-bold mb-2">
                  Subject
                </h1>
                <img
                  src={subject?.image}
                  className="w-[140px] h-[140px] rounded-full object-cover"
                />
                <div>
                  <p className="text-secondary">
                    Subject Name :{subject?.name}
                  </p>
                  <p className="text-grayish text-sm">
                    Subject Description: {subject?.description}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <h1 className="text-3xl text-secondary font-bold mb-2 text-center">
                Modules
              </h1>
              {modules.length > 0 && (
                <div className="flex flex-col gap-2">
                  {modules?.map((element, idx) => (
                    <div
                      key={element._id}
                      className="flex flex-col gap-2 w-full"
                    >
                      <h2> Module Name : {element.title}</h2>
                      <div className="ml-4 flex flex-col gap-4">
                        {element.lessons.map((lesson, index) => (
                          <div key={lesson._id} className="flex flex-col gap-2">
                            <div className="text-xl text-primary">
                              Lesson N° {index + 1} : {lesson.title}
                            </div>
                            <div className="ml-2">
                              Content : {lesson.content}
                            </div>
                            <div className="ml-2">
                              Duration : {lesson.duration} Hour
                            </div>
                            <iframe
                              width="560"
                              height="315"
                              src={getEmbeddedLink(lesson.videoUrl)}
                              className="ml-2"
                              allowFullScreen
                            ></iframe>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {modules.length === 0 && (
                <div className="text-lg text-center py-10">No Modules Yet</div>
              )}
            </div>
          </form>{" "}
        </div>
      </div>
    </div>
  )
}

export default CourseDetails
