import { Map } from 'ol'
import { GetCourse } from './courses'
import { InitLocationMarker, UpdateLocationMarker, UpdateLocationMarkerErr } from './LocationMarker'
import { InitMapBase } from './MapBase'
import { InitMapView } from './MapView'
import { InitMapMarks, UpdateMark, UpdateMarkErr } from './MapMarks'

interface IInitMap {
  map: Map
  courseId: string
  follow: boolean
}
export function InitMapCore({ map, courseId, follow }: IInitMap) {
  const course = GetCourse(courseId)
  if (!course) {
    return { success: false, message: 'Unable to get course for the courseId' }
  }

  const InitBaseMapRes = InitMapBase({ map })
  if (!InitBaseMapRes.success) return InitBaseMapRes

  const InitMapViewRes = InitMapView({ map, course, follow })
  if (!InitMapViewRes.success) return InitMapViewRes

  const InitLocationMarkerRes = InitLocationMarker({ map })
  if (!InitLocationMarkerRes.success) return InitLocationMarkerRes

  const InitMapMarksRes = InitMapMarks({ map, course })
  if (!InitMapMarksRes.success) return InitMapMarksRes

  if (!navigator.geolocation) {
    return { success: false, message: 'GeoLocation not available.' }
  }

  navigator.geolocation.getCurrentPosition(UpdatePosition, UpdatePositionErr)
  const watchId = navigator.geolocation.watchPosition(UpdatePosition, UpdatePositionErr, {
    enableHighAccuracy: true,
    maximumAge: 15000,
    timeout: 12000
  })
  console.log('position watchId', watchId)

  return { success: true, message: 'Map Initalised' }
}

function UpdatePosition(position: GeolocationPosition) {
  UpdateLocationMarker(position)
  UpdateMark(position)
}

function UpdatePositionErr(positionError: GeolocationPositionError) {
  UpdateLocationMarkerErr(positionError)
  UpdateMarkErr(positionError)
}
