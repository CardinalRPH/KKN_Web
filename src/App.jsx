import { RouterProvider } from "react-router-dom"
import AppRouter from "./routes/router"
import gsap from "gsap"
import { ScrollTrigger, TextPlugin } from "gsap/all"

function App() {
  gsap.registerPlugin(ScrollTrigger, TextPlugin)

  return (
    <RouterProvider router={AppRouter}/>
  )
}

export default App
