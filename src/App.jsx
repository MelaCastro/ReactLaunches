import {useState, useEffect} from 'react'
import { LaunchItem } from './components/LaunchItem'
import logo from './assets/space-logo.png'
import * as API from './services/launches'

function App() {
  const [launches, setLaunches] = useState([])

  useEffect(() => {
    API.getAllLaunches().then(setLaunches)
  }, [])

  return (
    <>
    <img src={logo} width={600}/>
      <ul className="container mx-auto">
        {launches.map(launch => (
          <LaunchItem key={launch.flight_number} {...launch}/>
        ))}
      </ul>
      
    </>
  )
}

export default App
