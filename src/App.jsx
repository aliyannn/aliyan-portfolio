import { useState, useEffect } from "react"
import NavBar from "./components/NavBar";
import Preloader from "./components/PreLoader"
import Home from './components/Home/Home'
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollToTop"
import ThreeBackground from "./components/ThreeBackground"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
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

  return (
    <Router>
      <Preloader load={load} />
      <div className="text-center" id={load ? "no-scroll" : "scroll"}>
        <ThreeBackground />
        <NavBar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
