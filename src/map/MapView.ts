import { Map } from 'ol'
import View from 'ol/View'
import { fromLonLat } from 'ol/proj'
import { ICourse } from './courses'

interface IInitView {
  map: Map
  course: ICourse
  follow: boolean
}
export function InitMapView({ map, course, follow }: IInitView) {
  console.log('InitView: course', course, 'follow', follow)

  const firstMark = course.instructions[0].mark
  const lon = firstMark.lon
  const lat = firstMark.lat
  const zoom = 11

  const view = new View({
    center: fromLonLat([lon, lat]),
    zoom,
    rotation: 0
  })

  map.setView(view)

  return { success: true, message: 'Map view initalised' }
}
