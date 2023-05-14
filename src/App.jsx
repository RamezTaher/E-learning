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

function App() {
  return (
    <>
      <Routes>
        <Route element={<AuthProtectedRoute />}>
          <Route path="/platform/dashboard" element={<UserDashboard />} exact />
          <Route path="/platform/courses" element={<UserCourses />} exact />
          <Route
            path="/platform/courses/:id"
            element={<UserCourseDetails exact />}
          />
          <Route path="/platform/billing" element={<UserBilling />} />
        </Route>
        <Route element={<AdminProtectedRoute />}>
          <Route path="/admin/students" element={<AdminAllStudents />} exact />
          <Route
            path="/admin/instructors"
            element={<AdminAllInstructors />}
            exact
          />
          <Route
            path="/admin/students/:id"
            element={<AdminStudentDetails />}
            exact
          />
          <Route
            path="/admin/instructors/:id"
            element={<AdminInstructorDetails />}
            exact
          />
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
