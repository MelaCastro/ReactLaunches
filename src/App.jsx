import { Routes, Route } from "react-router-dom";
import { LaunchList } from './components/LaunchList'
import { LaunchDetails} from './components/LaunchDetails'
import {RocketDetails} from './components/RocketDetails'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<LaunchList />} />
      <Route path='launch/:id' element={<LaunchDetails />} />
      <Route path='rockets/:id' element={<RocketDetails />} />
    </Routes>
      
    </>
  )
}

export default App
