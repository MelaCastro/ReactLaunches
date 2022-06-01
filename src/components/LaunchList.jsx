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
    <nav className="relative flex items-center justify-between mx-8 ">
      <img className="mb-16 inset-5 relative" src={logo} width={300}/>
      <ul className="text-white">
        <a href="" className="mr-3.5">Dragons</a>
        <a href="" className="mr-3.5">Launch Pads</a>
        <a href="" className="mr-3.5">Landing Pads</a>
        <a href="" className="mr-3.5">Company Info</a>
      </ul>
    </nav>
    <div className="max-w-screen-2xl mx-auto"> 
      <ul className="">
        {launches.map(launch => (
          <LaunchItem key={launch.flight_number} {...launch}/>
        ))}
      </ul>
    </div>
    </>
  )
}
