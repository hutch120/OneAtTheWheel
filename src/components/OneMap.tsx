import 'ol/ol.css'
import { useEffect, useState } from 'react'
import { Map } from 'ol'
import { InitMapCore } from '../map/MapCore'

export interface IOneMap {
  courseId: string
  follow: boolean
  setMarkId: React.Dispatch<React.SetStateAction<string>>
}

export function OneMap({ courseId, follow, setMarkId }: IOneMap) {
  const [loadFailed, setLoadFailed] = useState(false)

  console.log('follow', follow)
  useEffect(() => {
    const map = new Map()
    map.setTarget('map')
    const InitMapRes = InitMapCore({ map, courseId, follow, setMarkId })
    console.log('InitMapRes', InitMapRes)
    if (!InitMapRes?.success) {
      setLoadFailed(true)
    }
  }, [courseId, follow, setMarkId])

  if (!courseId || courseId === '' || loadFailed) {
    return <div>Unable to load map!</div>
  }
  return (
    <div style={{ height: '100%', width: '100%' }}>
      <div id="map" style={{ height: '100%', width: '100%' }}></div>
    </div>
  )
}
