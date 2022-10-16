import { resetCss } from "./config/stitches.config";
import Home from './pages/Home'
import About from './pages/About'
import * as data from "../lib/data"

resetCss();
function App() {


  return (
    <div className="App">
      <Home />
      <About />



    </div>
  )
}

export default App
