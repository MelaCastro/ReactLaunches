import { useParams } from 'react-router-dom'
import {useState, useEffect} from 'react'
import * as API from '../services/launches'
import { HiCalendar } from "react-icons/hi"
import rocketPicture from '../assets/rocketPicture.jpg'

export function RocketDetails() {
  const [rockets, setRocket] = useState({})
  const {id} = useParams()

  useEffect(() => {
    API.getDataLaunch('rockets', id).then(setRocket).catch(console.log)
  }, [id])

  return (
    <>
      <img className=" h-full absolute w-full" src={rocketPicture} /> 
      <div className="relative container px-8 flex flex-col max-w-screen-lg leading-7 top-40 left-3.5">
        <ul className=" px-8 rounded">
          <li className="text-slate-100">
            Rocket Name  <span className="text-slate-400">{rockets?.rocket_name}</span> </li> 
          <li className="text-slate-100">
            State  <span className="text-slate-400">{rockets.active ? 'Active' : 'Inactive'}</span></li>
          <li className="text-slate-100">Stages  <span className="text-slate-400">{rockets?.stages}</span></li>
          <li className="flex items-center text-slate-100">First Flight  <span className="text-slate-400 flex items-center"><HiCalendar className=" ml-1"/> {rockets?.first_flight}</span></li>
          <li className="text-slate-100">Country  <span className="text-slate-400">{rockets?.country}</span></li>
          <li className="text-slate-100">Description  <span className="text-slate-400"> <br/>{rockets?.description}</span></li>
        </ul>
        <br/>

        <table className="table-auto rounded container border-collapse text-center max-w-screen-lg mx-auto">
          <thead>
            <tr>
              <th className="border border-transparent border-b-slate-100 text-slate-100">Height</th>
              <th className="border border-transparent border-b-slate-100 text-slate-100">Diameter</th>
              <th className="border border-transparent border-b-slate-100 text-slate-100">Mass</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-slate-400">Meters {rockets.height?.meters}</td>
              <td className="text-slate-400">Meters {rockets.diameter?.meters}</td>
              <td className="text-slate-400">Kg {rockets.mass?.kg}</td>
            </tr>

            <tr>
              <td className="text-slate-400">Feet {rockets.height?.feet}</td>
              <td className="text-slate-400">Feet {rockets.diameter?.feet}</td>
              <td className="text-slate-400">Lb {rockets.mass?.lb}</td>
            </tr>
          </tbody>
        </table>
        <br/><br/>

        <span className="text-slate-100 rounded px-8">
          Wikipedia link  <a className="text-slate-400" href={rockets?.wikipedia}>{rockets?.wikipedia} </a>
        </span>
      </div>
    </>
  )
}