import React, { useEffect, useState } from "react"
import AdminHeader from "../components/AdminHeader"
import { Link, useParams } from "react-router-dom"
import {
  AddLessonToModule,
  AddModuleToCourse,
  DeleteLessonFromModule,
  GetCourseById,
  RemoveModuleFromCourse,
} from "../utils/api-interceptor"
import { AiFillDelete, AiFillMinusCircle } from "react-icons/ai"

const AdminCourseModules = () => {
  const { id } = useParams()
  const [course, setCourse] = useState({})
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [videoUrl, setVideoUrl] = useState("")
  const [duration, setDuration] = useState("")
  const [order, setOrder] = useState("")
  const [moduleTitle, setModuleTitle] = useState("")
  const [newLessonTitle, setNewLessonTitle] = useState("")
  const [newLessonContent, setNewLessonContent] = useState("")
  const [newLessonVideoUrl, setNewLessonVideoUrl] = useState("")
  const [newLessonDuration, setNewLessonDuration] = useState("")
  const [newLessonOrder, setNewLessonOrder] = useState("")

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

  const addModule = async (e) => {
    e.preventDefault()
    if (moduleTitle) {
      try {
        const res = await AddModuleToCourse(id, {
          title: moduleTitle,
          lessons: [
            {
              title: newLessonTitle,
              content: newLessonContent,
              videoUrl: newLessonVideoUrl,
              duration: newLessonDuration,
              order: newLessonOrder,
            },
          ],
        })
        if (res.status === 201) {
          console.log(res.data)
          alert("Module Added Successfully")
          window.location.reload()
        }
      } catch (error) {
        console.log(error)
      }
    } else {
      alert("fill All Fields")
    }
  }

  const handleDeleteModuleLesson = async (moduleId, lessonId) => {
    if (window.confirm("Are you sure to delete this Lesson")) {
      try {
        const res = await DeleteLessonFromModule(moduleId, lessonId)
        const deletedLesson = res.data
        alert(deletedLesson.message)
        window.location.reload()
      } catch (error) {
        console.log(error)
      }
    }
  }

  const handleDeleteModuleFromCourse = async (moduleId) => {
    if (window.confirm("Are you sure to delete this Module")) {
      try {
        const res = await RemoveModuleFromCourse(id, moduleId)
        const deletedModule = res.data
        alert(deletedModule.message)
        window.location.reload()
      } catch (error) {
        console.log(error)
      }
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
                  <div className="flex items-center gap-1 ">
                    <span
                      className="text-lg font-bold
                  "
                    >
                      Module Name :
                    </span>{" "}
                    {element.title}
                    <div
                      onClick={() => handleDeleteModuleFromCourse(element._id)}
                      className="cursor-pointer"
                    >
                      <AiFillDelete color="red" size={20} />
                    </div>
                  </div>
                  <div className="text-lg font-bold">Module Lessons :</div>
                  <div className="ml-3">
                    {element.lessons.map((lesson) => (
                      <div key={lesson.id} className="flex items-center gap-2">
                        {element.lessons.length > 1 && (
                          <div
                            className="cursor-pointer
                        "
                            onClick={() =>
                              handleDeleteModuleLesson(element._id, lesson.id)
                            }
                          >
                            <AiFillMinusCircle color="red" />
                          </div>
                        )}
                        {lesson.title}
                      </div>
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

          <div className="mt-10">
            <h1 className="text-4xl font-bold">Add New Module</h1>

            <form className="grid grid-cols-2 gap-4 mt-2 ">
              <div className="flex flex-col gap-1">
                <label>Module Title</label>
                <input
                  type="text"
                  placeholder="Enter Lesson Title"
                  value={moduleTitle}
                  onChange={(e) => setModuleTitle(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label>Lesson Title</label>
                <input
                  type="text"
                  placeholder="Enter Lesson Title"
                  value={newLessonTitle}
                  onChange={(e) => setNewLessonTitle(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label>Lesson Video Link</label>
                <input
                  type="text"
                  placeholder="Enter Lesson Video Link"
                  value={newLessonVideoUrl}
                  onChange={(e) => setNewLessonVideoUrl(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label>Lesson Duration (Hours)</label>
                <input
                  type="text"
                  placeholder="Enter Lesson Duration"
                  value={newLessonDuration}
                  onChange={(e) => setNewLessonDuration(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label>Lesson Order</label>
                <input
                  type="text"
                  placeholder="Enter Lesson Order"
                  value={newLessonOrder}
                  onChange={(e) => setNewLessonOrder(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label>Lesson Contant</label>
                <textarea
                  type="text"
                  placeholder="Enter Lesson Contant"
                  value={newLessonContent}
                  onChange={(e) => setNewLessonContent(e.target.value)}
                />
              </div>

              <div
                className="flex items-end justify-start "
                onClick={(e) => addModule(e)}
              >
                <button className="bg-primary text-white py-3 rounded w-[150px] text-lg">
                  Add Module
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminCourseModules
