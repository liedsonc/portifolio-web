import { resetCss } from "./config/stitches.config";
import Home from './pages/Home'
import * as data from "../lib/data"

resetCss();
function App() {


  return (
    <div className="App">
      <Home />




    </div>
  )
}

export default App
