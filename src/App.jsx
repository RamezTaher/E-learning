import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/login" element={<SignIn />} />
        <Route path="/auth/register" element={<SignUp />} />
      </Routes>
    </>
  )
}

export default App
