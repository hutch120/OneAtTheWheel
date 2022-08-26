import { Map } from 'ol'
import View from 'ol/View'
import { fromLonLat } from 'ol/proj'
import { ICourse } from './courses'
import { IMarkData } from './marks'

interface IInitView {
  map: Map
  course: ICourse
  mark?: IMarkData
}
export function InitMapView({ map, course }: IInitView) {
  console.log('InitView: course', course)

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
