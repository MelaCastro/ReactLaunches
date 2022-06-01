import { HiCalendar } from "react-icons/hi"
import { Link } from "react-router-dom"


export function LaunchItem(launch) {
  return (
    <>
    <br />
    <li className="flex items-center relative text-white">
      <span className={`relative left-3/4 rounded w-20 h-9 text-sm flex items-center justify-center border
        ${launch.launch_success ? 'border-green-300 text-green-300' : 'border-red-300 text-red-300'}`}>
          {launch.launch_success ? 'Success' : 'Failure'}
      </span>

      <div className="flex flex-col">
        <span className="text-lg ">
          Mission <span className="font-sans">{launch.mission_name}</span> ({launch.launch_year})
        </span>

        <span className="text-xs flex items-center text-slate-300">
          <HiCalendar className="mr-1" /> <span>{launch.launch_date_local.split('T'[0])}</span>               
        </span>
        <Link to={`/launch/${launch.flight_number}`}>
          <div className="bg-transparent border hover:bg-white hover:duration-700 hover:text-black 
              text-sm w-28 h-8 flex items-center mt-2 justify-center">
            More Details
          </div>
        </Link>
        <br /><br />
        
      </div>
    </li>
    </>
  )
}