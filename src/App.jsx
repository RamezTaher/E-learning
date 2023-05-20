import { Route, Routes } from "react-router-dom"
import FinishSignUp from "./pages/FinishSignUp"
import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import UserBilling from "./pages/UserBilling"
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

function App() {
  return (
    <>
      <Routes>
        <Route element={<AuthProtectedRoute />}>
          <Route path="/platform/dashboard" element={<UserDashboard />} />
          <Route path="/platform/courses" element={<UserCourses />} />
          <Route path="/platform/courses/:id" element={<UserCourseDetails />} />
          <Route path="/platform/billing" element={<UserBilling />} />
        </Route>
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
        <Route path="/auth/login" element={<SignIn />} />
        <Route path="/auth/register" element={<SignUp />} />
        <Route path="/auth/finish-register" element={<FinishSignUp />} />
      </Routes>
    </>
  )
}

export default App
