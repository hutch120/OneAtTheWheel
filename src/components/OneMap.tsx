import { Map } from 'ol'
import { useEffect, useState } from 'react'
import { InitMapCore, Dispose } from '../map/MapCore'
import { UpdateLineFromPositionToMark } from '../map/MapMarks'
import { ICourse, IMarkData } from '../map/courses'
import useGeolocation from 'react-hook-geolocation'

export interface IOneMap {
  course: ICourse
  mark?: IMarkData
  setMark: React.Dispatch<React.SetStateAction<IMarkData | undefined>>
}

export interface ILocation {
  lon: number
  lat: number
}
export function OneMap({ course, mark, setMark }: IOneMap) {
  const [loadFailed, setLoadFailed] = useState(false)
  const [mapInitalised, setMapInitalised] = useState(false)
  const geolocation = useGeolocation({
    enableHighAccuracy: true,
    maximumAge: 15000,
    timeout: 12000
  })

  useEffect(() => {
    const map: Map = new Map({
      target: 'map'
    })

    const InitMapRes = InitMapCore({ map, course, setMark })
    console.log('InitMapRes', InitMapRes)
    if (InitMapRes?.success) {
      setMapInitalised(true)
    } else {
      setLoadFailed(true)
    }
    return () => {
      Dispose()
    }
  }, [course, setMark])

  useEffect(() => {
    if (mapInitalised && geolocation && mark) {
      const location: ILocation = { lon: geolocation.longitude, lat: geolocation.latitude }
      UpdateLineFromPositionToMark({ location, mark })
    }
  }, [mapInitalised, geolocation, mark])

  if (!course || loadFailed) {
    return <div>Unable to load map!</div>
  }

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <div id="map" style={{ height: '100%', width: '100%' }}></div>
    </div>
  )
}
