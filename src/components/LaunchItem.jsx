import { HiCalendar } from "react-icons/hi"

export function LaunchItem(launch) {
  return (
    <li className="bg-slate-200 my-3 h-24 rounded flex items-center">

      <span className={`relative left-3/4 rounded w-16 h-9 text-sm flex items-center justify-center
        ${launch.launch_success ? 'bg-green-300' : 'bg-red-300'}`}>
          {launch.launch_success ? 'Success' : 'Failure'}
      </span>

      <div className="flex flex-col">
        <span className="text-lg">
          Mission <span className="font-sans">{launch.mission_name}</span> ({launch.launch_year})
        </span>

        <span className="text-xs flex items-center">
          <HiCalendar className="mr-1 text-gray-400" /> <span className="text-gray-400">{launch.launch_date_local.split('T'[0])}</span>               
        </span>
        <div className="bg-violet-400 text-white font-sans text-sm w-28 h-8 rounded flex items-center mt-2 justify-center">
          <a>More Details</a>
        </div>
      </div>

    </li>
  )
}