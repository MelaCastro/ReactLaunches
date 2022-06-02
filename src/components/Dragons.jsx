import * as API from '../services/launches'
import { useLocation } from 'react-router-dom';
import logo from '../assets/spacexLogo.png'

export function Dragons(dragon) {
  let location = useLocation();
  const [data, isLoading] = API.useSpaceX(location.pathname.split('/')[1]);
  console.log('data', data, isLoading);

  return(
    <> 
      <div className="bg-dragon-principal relative h-screen w-screen">
        <img className="mb-16 inset-5 absolute" src={logo} width={300}/>
        <div className=" text-white flex flex-col items-center absolute top-96 leading-10 w-full">
          <h1 className="text-7xl font-bebas font-bold ">DRAGON</h1>
          <span>SENDING HUMANS AND CARGO INTO SPACE</span>
        </div>
      </div>

      <div>
        {data.map((dragon) => (
          <div key={dragon}> 
          </div>
        ))}
      </div>
    </>
  )
}
