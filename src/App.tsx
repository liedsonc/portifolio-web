import { resetCss } from "./config/stitches.config";
import Home from './pages/Home'
import About from './pages/About'
import * as data from "../lib/data"
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
import { Project } from "./components/Project";

resetCss();
function App() {


  return (
    <div

      className="App">
      <Home />
      <About />
      <Projects />
      <Footer />

    </div>
  )
}

export default App
