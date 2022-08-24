import { Map } from 'ol'
import { GetCourse } from './courses'
import { InitLocationMarker } from './LocationMarker'
import { InitMapBase } from './MapBase'
import { InitMapView } from './MapView'
import { InitMapMarks } from './MapMarks'

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

  return { success: true, message: 'Map Initalised' }
}
