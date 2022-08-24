import 'ol/ol.css'
import { useEffect, useState } from 'react'
import { Map } from 'ol'
import { InitMap } from '../map/map'

export interface IOneMap {
  courseId: string
  follow: boolean
}

export function OneMap({ courseId, follow }: IOneMap) {
  const [loadFailed, setLoadFailed] = useState(false)

  console.log('follow', follow)
  useEffect(() => {
    const map = new Map()
    map.setTarget('map')
    const InitMapRes = InitMap({ map, courseId, follow })
    console.log('InitMapRes', InitMapRes)
    if (!InitMapRes?.success) {
      setLoadFailed(true)
    }
  }, [courseId, follow])

  if (!courseId || courseId === '' || loadFailed) {
    return <div>Unable to load map!</div>
  }
  return (
    <div style={{ height: '100%', width: '100%' }}>
      <div id="map" style={{ height: '100%', width: '100%' }}></div>
    </div>
  )
}
