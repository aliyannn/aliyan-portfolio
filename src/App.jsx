import { useState, useEffect } from "react"
import NavBar from "./components/NavBar";
import Preloader from "./components/PreLoader"
import Home from './components/Home/Home'
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer"
import ThreeBackground from "./components/ThreeBackground"
import Kursor from "kursor"
import "kursor/dist/kursor.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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

  // Remove hash from the URL and scroll to top on page reload
  useEffect(() => {
    if (window.location.hash) {
      window.scroll(0, 0)
      window.history.replaceState(null, null, window.location.pathname)
    }
  }, [])

  useEffect(()=>{
    new Kursor({
      type: 2,
      removeDefaultCursor: true,
      color: '#cd5ff8'
    })
  },[])

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
