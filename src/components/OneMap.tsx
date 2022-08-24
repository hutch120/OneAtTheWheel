import 'ol/ol.css'
import { useEffect, useState } from 'react'
import { Map } from 'ol'
import { useParams } from 'react-router-dom'
import { InitMap } from '../map/map'

export interface IOneMap {
  center: { lon: number; lat: number }
  zoom: number
}

export function OneMap(mapOptions: IOneMap) {
  const [loadFailed, setLoadFailed] = useState(false)
  const { courseId } = useParams<string>()

  useEffect(() => {
    const map = new Map()
    map.setTarget('map')
    const InitMapRes = InitMap({ map, mapOptions, courseId })
    if (!InitMapRes?.success) {
      console.log('InitMapRes', InitMapRes)
      setLoadFailed(true)
    }
  }, [mapOptions])

  if (!courseId || courseId === '' || loadFailed) {
    return <div>Unable to load map!</div>
  }
  return (
    <div style={{ height: '100%', width: '100%' }}>
      <div id="map" style={{ height: '100%', width: '100%' }}></div>
    </div>
  )
}
