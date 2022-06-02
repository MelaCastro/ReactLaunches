import {useState, useEffect} from 'react'

// Peticion fetch par al api

const API_URL = 'https://api.spacexdata.com/v3'

export async function getAllLaunches(RouteData) {
  try {
    const response = await fetch(`${API_URL}/${RouteData}`)
    const data = await response.json()
    return data

  } catch (error) {
    console.error(error)
  }
}


export function useSpaceX(path) {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true)
        const response = await fetch(`${API_URL}/${path}`)
        const _data = await response.json()
        setData(_data)
        setIsLoading(false)
      } catch (error) {
        console.error(error)
        setIsLoading(false)
      }
    }

    getData()
  }, [])

  return [data, isLoading]
}

export async function getDataLaunch(Route,Id) {
  try {
    const response = await fetch(`${API_URL}/${Route}/${Id}`)
    const data = await response.json()
    return data
    
  } catch (error) {
    console.error(error)
  }
}
