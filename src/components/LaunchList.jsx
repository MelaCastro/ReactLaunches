import {useState, useEffect} from 'react'
import { Link } from "react-router-dom"
import * as API from '../services/launches'
import { LaunchItem } from './LaunchItem'
import logo from '../assets/spacexLogo.png'
import homePicture from '../assets/homePicture.jpg'

export function LaunchList() {
  const [launches, setLaunches] = useState([])

  useEffect(() => {
    API.getAllLaunches('launches').then(setLaunches).catch(console.log)
  }, [])
  console.log(launches)

  return(
    <>
    <img className="h-full fixed w-full" src={homePicture} /> 
    <nav className="relative flex items-center justify-between mx-8 ">
      <img className="mb-16 inset-5 relative" src={logo} width={300}/>
      <ul className="text-white">
        <Link to={`/dragons`}>
          <span className="mr-3.5">Dragons</span>
        </Link>
        
        <a className="mr-3.5">Launch Pads</a>
        <a className="mr-3.5">Landing Pads</a>
        <a className="mr-3.5">Company Info</a>
      </ul>
    </nav>
    <div className="max-w-screen-2xl mx-auto"> 
      <ul> 
        {launches.map((launch, i) => ( 
          <LaunchItem key={i} {...launch}/> 
        ))}
      </ul>
    </div>
    </>
  )
}
