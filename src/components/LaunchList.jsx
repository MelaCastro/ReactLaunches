import {useState, useEffect} from 'react'
import * as API from '../services/launches'
import { LaunchItem } from './LaunchItem'

export function LaunchList() {
  const [launches, setLaunches] = useState([])

  useEffect(() => {
    API.getAllLaunches().then(setLaunches).catch(console.log)
  }, [])

  return(
    <>
      <ul className="container mx-auto">
        {launches.map(launch => (
          <LaunchItem key={launch.flight_number} {...launch}/>
        ))}
      </ul>
    </>
  )
}
