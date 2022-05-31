import {useState, useEffect} from 'react'
import * as API from '../services/launches'
import { LaunchItem } from './LaunchItem'
import logo from '../assets/spacexLogo.png'
import homePicture from '../assets/homePicture.jpg'

export function LaunchList() {
  const [launches, setLaunches] = useState([])

  useEffect(() => {
    API.getAllLaunches().then(setLaunches).catch(console.log)
  }, [])

  return(
    <>
    <img className="h-full fixed w-full" src={homePicture} /> 
    <nav>
      <img className="mb-16 inset-5 relative" src={logo} width={300}/>
    </nav>
      <ul className="container mx-auto">
        {launches.map(launch => (
          <LaunchItem key={launch.flight_number} {...launch}/>
        ))}
      </ul>
    </>
  )
}
