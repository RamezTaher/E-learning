import React, { useEffect, useState } from "react"
import AdminHeader from "../components/AdminHeader"
import { Link, useParams } from "react-router-dom"
import { AddLessonToModule, GetCourseById } from "../utils/api-interceptor"

const AdminCourseModules = () => {
  const { id } = useParams()
  const [course, setCourse] = useState({})
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [videoUrl, setVideoUrl] = useState("")
  const [duration, setDuration] = useState("")
  const [order, setOrder] = useState("")

  useEffect(() => {
    GetCourseById(id)
      .then(({ data }) => {
        setCourse(data)
      })
      .catch((err) => console.log(err))
  }, [id])

  const addLesson = async (e, id) => {
    e.preventDefault()
    if (title && content && duration && videoUrl && order) {
      try {
        const res = await AddLessonToModule(id, {
          title,
          content,
          duration,
          videoUrl,
          order,
        })
        if (res.status === 201) {
          alert("Lesson Added Successfully")
          window.location.reload()
        }
      } catch (error) {
        console.log(error)
      }
    } else {
      alert("fill all fields")
    }
  }
  return (
    <>
      <AdminHeader />
      <div className="container px-6 sm:mx-auto lg:px-10 pt-10   h-full pb-10 ">
        <Link to={"/admin/courses"}>
          <div
            className="w-[120px] text-center bg-primary text-white py-2 px-4 mb-4
  "
          >
            Bo Back
          </div>
        </Link>
        <div>
          <h1 className="text-4xl  font-bold my-5">Course Modules</h1>
          {course?.modules?.length > 0 && (
            <div>
              {course.modules.map((element) => (
                <div key={element._id}>
                  <div>
                    <span
                      className="text-lg font-bold
                  "
                    >
                      Module Name :
                    </span>{" "}
                    {element.title}
                  </div>
                  <div className="text-lg font-bold">Module Lessons :</div>
                  <div className="ml-3">
                    {element.lessons.map((lesson) => (
                      <div key={lesson.id}>{lesson.title}</div>
                    ))}
                  </div>
                  <div className="text-lg font-bold">
                    Add Lesson To This Module ?
                  </div>
                  <form onSubmit={addLesson} className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                      <label>Lesson Title</label>
                      <input
                        type="text"
                        placeholder="Enter Lesson Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label>Lesson Video Link</label>
                      <input
                        type="text"
                        placeholder="Enter Lesson Video Link"
                        value={videoUrl}
                        onChange={(e) => setVideoUrl(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label>Lesson Duration (Hours)</label>
                      <input
                        type="text"
                        placeholder="Enter Lesson Duration"
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label>Lesson Order</label>
                      <input
                        type="text"
                        placeholder="Enter Lesson Order"
                        value={order}
                        onChange={(e) => setOrder(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label>Lesson Contant</label>
                      <textarea
                        type="text"
                        placeholder="Enter Lesson Contant"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                      />
                    </div>
                    <div
                      className="flex items-end justify-center"
                      onClick={(e) => addLesson(e, element._id)}
                    >
                      <button className="bg-primary text-white py-3 rounded w-[150px] text-lg">
                        Add Lesson
                      </button>
                    </div>
                  </form>
                </div>
              ))}
            </div>
          )}
          {course?.modules?.length === 0 && <div>No Modules Yet</div>}
        </div>
      </div>
    </>
  )
}

export default AdminCourseModules
