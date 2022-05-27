import { useParams, Link } from 'react-router-dom'
import {useState, useEffect} from 'react'
import * as API from '../services/launches'
import { HiLink } from "react-icons/hi"
import homePicture from '../assets/homePicture.jpeg'


export function LaunchDetails() {
  const [launch, setLaunch] = useState({})
  const {id} = useParams()

  useEffect(() => {
    API.getDataLaunch('launches', id).then(setLaunch).catch(console.log)
  }, [id])

  return(
    <>
    
      <li className="bg-slate-200 h-24 rounded flex items-center">
        <span className={`relative left-3/4 right-0 rounded w-32 h-9 text-sm flex items-center justify-center
          ${launch.launch_success ? 'bg-green-300' : 'bg-red-300'}`}>
           {launch.launch_success ? 'Success' : 'Failure'}
        </span>
        
        <div className="flex flex-col ">
          <span className="text-lg">
            Mission <span className="font-sans">{launch.mission_name}</span> ({launch.launch_year})
          </span>
        </div>
      </li>
      <img className=" h-full absolute w-full" src={homePicture} />
      <div className=" max-w-screen-lg leading-10 text-white relative top-48 text-lg font-roboto">
        <li className="list-none ml-16">
          <ul className="text-gray-400"> <span className="text-slate-100">Rocket </span> {""}
            <Link to={`/rockets/${launch.rocket?.rocket_id}`}> 
            {launch.rocket?.rocket_name} <HiLink className="inline text-gray-500"/></Link> 
          </ul>
          <ul className="text-gray-400"> 
            <span className="text-slate-100">Launch Site </span> {launch.launch_site?.site_name_long} 
          </ul>
          <ul className="text-gray-400"> 
            <span className="text-slate-100">Details </span> {launch.details  ? launch.details : 'No details'} 
          </ul>
          <ul className="text-gray-400"> 
            <span className="text-slate-100">Mission Patch</span>  <a href={launch.links?.mission_patch}>{launch.links?.mission_patch ? launch.links?.mission_patch : 'No Found'} <HiLink className="inline text-gray-500"/></a> 
          </ul>
          <ul className="text-gray-400"> 
            <span className="text-slate-100">Article link </span> <a href={launch.links?.article_link}>{launch.links?.article_link ? launch.links?.article_link : 'No Found'} <HiLink className="inline text-gray-500"/></a> 
          </ul>
          <ul className="text-gray-400"> 
            <span className="text-slate-100">Wikipedia </span>   <a href={launch.links?.wikipedia}>{launch.links?.wikipedia ? launch.links?.wikipedia : 'No Found'} <HiLink className="inline text-gray-500"/></a> 
          </ul>
          <ul className="text-gray-400"> 
            <span className="text-slate-100">Video Link </span>  <a href={launch.links?.video_link}>{launch.links?.video_link ? launch.links?.video_link : 'No Found'} <HiLink className="inline text-gray-500"/></a> 
          </ul>
        </li>
      </div>

    </>
  )
}