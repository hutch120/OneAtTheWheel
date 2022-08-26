import { Map } from 'ol'
import { ICourse, IMarkData } from './courses'
import { InitLocationMarker } from './LocationMarker'
import { InitMapBase } from './MapBase'
import { InitMapView } from './MapView'
import { InitMapMarks } from './MapMarks'

interface IInitMap {
  map: Map
  course: ICourse
  setMark: React.Dispatch<React.SetStateAction<IMarkData | undefined>>
}

let map: Map | null = null

export function InitMapCore({ map, course, setMark }: IInitMap) {
  const InitBaseMapRes = InitMapBase({ map })
  if (!InitBaseMapRes.success) return InitBaseMapRes

  const InitMapViewRes = InitMapView({ map, course })
  if (!InitMapViewRes.success) return InitMapViewRes

  const InitLocationMarkerRes = InitLocationMarker({ map })
  if (!InitLocationMarkerRes.success) return InitLocationMarkerRes

  const InitMapMarksRes = InitMapMarks({ map, course, setMark })
  if (!InitMapMarksRes.success) return InitMapMarksRes

  if (!navigator.geolocation) {
    return { success: false, message: 'GeoLocation not available.' }
  }

  return { success: true, message: 'Map Initalised' }
}

export function Dispose() {
  if (map) {
    map.dispose()
  }
  return { success: true, message: 'Disposed Map' }
}
