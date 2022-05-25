import { Routes, Route } from "react-router-dom";
import logo from './assets/space-logo.png'
import { LaunchList } from './components/LaunchList'
import { LaunchDetails} from './components/LaunchDetails'

function App() {

  return (
    <>
    <img src={logo} width={600}/>
    <Routes>
      <Route path='/' element={<LaunchList />} />
      <Route path='launch/:launchId' element={<LaunchDetails />} />
    </Routes>
      
    </>
  )
}

export default App
