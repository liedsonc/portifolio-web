import { resetCss } from "./config/stitches.config";
import Home from './pages/Home'
resetCss();
function App() {
  return (
    <div className="App">
      <Home></Home>
    </div>
  )
}

export default App
