import { useParams } from 'react-router-dom'
import {useState, useEffect} from 'react'
import * as API from '../services/launches'


export function LaunchDetails() {
  const [launch, setLaunch] = useState({})
  const {launchId} = useParams()

  useEffect(() => {
    API.getAllLaunchByFlightNumber(launchId).then(setLaunch).catch(console.log)
  }, [launchId])

  return(
    <>
      <li className="bg-slate-200 my-3 h-24 rounded flex items-center">
        <span className={`relative left-3/4 right-0 rounded w-16 h-9 text-sm flex items-center justify-center
          ${launch.launch_success ? 'bg-green-300' : 'bg-red-300'}`}>
           {launch.launch_success ? 'Success' : 'Failure'}
        </span>

        <div className="flex flex-col">
          <span className="text-lg">
            Mission <span className="font-sans">{launch.mission_name}</span> ({launch.launch_year})
          </span>
        </div>

      </li>

    </>
  )
}