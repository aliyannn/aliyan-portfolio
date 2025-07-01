import { useState, useEffect } from "react"
import NavBar from "./components/NavBar";
import Preloader from "./components/PreLoader"
import Home from './components/Home/Home'
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer"
import ThreeBackground from "./components/ThreeBackground"
import "./style.css"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [load, updateLoad] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false)
    }, 2000)

    return () => clearTimeout(timer);
  }, [])

  // Remove hash from the URL
  useEffect(() => {
    if (window.location.hash) {
      window.scrollTo(0, 0)
      window.history.replaceState(null, null, window.location.pathname)
    }
  }, [])

  return (
    <>
      <Preloader load={load} />
      <div className="text-center" id={load ? "no-scroll" : "scroll"}>
        <ThreeBackground />
        <NavBar />
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
