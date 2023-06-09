import { Route, Routes } from "react-router-dom"
import FinishSignUp from "./pages/FinishSignUp"
import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import UserCourseDetails from "./pages/UserCourseDetails"
import UserCourses from "./pages/UserCourses"
import UserDashboard from "./pages/UserDashboard"
import AuthProtectedRoute from "./utils/AuthProtectedRoute"
import AdminProtectedRoute from "./utils/AdminProtectedRoute"
import AdminStudentDetails from "./pages/AdminStudentDetails"
import AdminAllStudents from "./pages/AdminAllStudents"
import AdminAllInstructors from "./pages/AdminAllInstructors"
import AdminInstructorDetails from "./pages/AdminInstructorDetails"
import AdminAllCourses from "./pages/AdminAllCourses"
import AdminCourseDetails from "./pages/AdminCourseDetails"
import AdminNewCourse from "./pages/AdminNewCourse"
import AdminCourseModules from "./pages/AdminCourseModules"
import AdminStudentCourses from "./pages/AdminStudentCourses"
import InstructorProtectedRoute from "./utils/IntructorProtectedRoute"
import InstructorAllStudents from "./pages/InstructorAllStudents"
import InstructorAllCourses from "./pages/InstructorAllCourses"
import InstructorNewCourse from "./pages/InstructorNewCourse"
import InstructorCourseModules from "./pages/InstructorCourseModules"
import InstructorStudentCourses from "./pages/InstructorStudentCourses"
import InstructorCourseDetails from "./pages/InstructorCourseDetails"
import CourseDetails from "./pages/CourseDetails"
import UserProfile from "./pages/UserProfile"
import InstructorProfile from "./pages/InstructorProfile"
import InstructorAddTest from "./pages/InstructorAddTest"
import InstructorAddQuiz from "./pages/InstructorAddQuiz"
import InstructorAddQuestionsToQuiz from "./pages/InstructorAddQuestionsToQuiz"
import UserCourseQuiz from "./pages/UserCourseQuiz"
import Contact from "./pages/Contact"

function App() {
  return (
    <>
      <Routes>
        <Route element={<AuthProtectedRoute />}>
          <Route path="/platform/dashboard" element={<UserDashboard />} />
          <Route path="/platform/courses" element={<UserCourses />} />
          <Route path="/platform/courses/:id" element={<UserCourseDetails />} />
          <Route path="/platform/course/:id" element={<CourseDetails />} />
          <Route
            path="/platform/course/:id/quiz/:quizId"
            element={<UserCourseQuiz />}
          />
          <Route path="/user/profile" element={<UserProfile />} />
        </Route>
        {/* Instructor */}
        <Route element={<InstructorProtectedRoute />}>
          <Route path="/instructor/profile" element={<InstructorProfile />} />
          <Route
            path="/instructor/students"
            element={<InstructorAllStudents />}
          />
          <Route
            path="/instructor/courses"
            element={<InstructorAllCourses />}
          />
          <Route
            path="/instructor/courses/new-course"
            element={<InstructorNewCourse />}
          />
          <Route
            path="/instructor/courses/:id/add-modules"
            element={<InstructorCourseModules />}
          />
          <Route
            path="/instructor/courses/:id/add-test"
            element={<InstructorAddTest />}
          />
          <Route
            path="/instructor/courses/:id/add-quiz"
            element={<InstructorAddQuiz />}
          />
          <Route
            path="/instructor/courses/:id/add-quiz/:quizId"
            element={<InstructorAddQuestionsToQuiz />}
          />

          <Route
            path="/instructor/students/:id/menage-courses"
            element={<InstructorStudentCourses />}
          />
          <Route
            path="/instructor/courses/:id"
            element={<InstructorCourseDetails />}
          />
        </Route>
        {/* Admin */}
        <Route element={<AdminProtectedRoute />}>
          <Route path="/admin/students" element={<AdminAllStudents />} />
          <Route
            path="/admin/courses/new-course"
            element={<AdminNewCourse />}
          />
          <Route
            path="/admin/courses/:id/add-modules"
            element={<AdminCourseModules />}
          />
          <Route path="/admin/instructors" element={<AdminAllInstructors />} />
          <Route path="/admin/courses" element={<AdminAllCourses />} />
          <Route path="/admin/students/:id" element={<AdminStudentDetails />} />
          <Route
            path="/admin/students/:id/menage-courses"
            element={<AdminStudentCourses />}
          />
          <Route
            path="/admin/instructors/:id"
            element={<AdminInstructorDetails />}
          />
          <Route path="/admin/courses/:id" element={<AdminCourseDetails />} />
        </Route>
        <Route path="/" element={<Home />} />
        {/* Contact Page */}
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/auth/login" element={<SignIn />} />
        <Route path="/auth/register" element={<SignUp />} />
        <Route path="/auth/finish-register" element={<FinishSignUp />} />
      </Routes>
    </>
  )
}

export default App
