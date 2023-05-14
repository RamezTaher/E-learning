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
        <Route path="/" element={<Home />} />
        <Route path="/auth/login" element={<SignIn />} />
        <Route path="/auth/register" element={<SignUp />} />
        <Route path="/auth/finish-register" element={<FinishSignUp />} />
      </Routes>
    </>
  )
}

export default App
