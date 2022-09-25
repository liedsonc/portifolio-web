import { resetCss } from "./config/stitches.config";
import Home from './pages/Home'
import * as data from "../lib/data"
resetCss();
function App() {

  console.log(data.main.img)
  return (
    <div className="App">
      <Home >

      </Home>


    </div>
  )
}

export default App
