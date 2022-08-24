import { Map } from 'ol'
import TileLayer from 'ol/layer/WebGLTile'
import XYZ from 'ol/source/XYZ'
import View from 'ol/View'
import { fromLonLat } from 'ol/proj'
import { GetCourse } from '../map/courses'

interface IInitMap {
  map: Map
  courseId: string
  follow: boolean
}
export function InitMap({ map, courseId, follow }: IInitMap) {
  const course = GetCourse(courseId)
  if (!course) {
    return { success: false, message: 'Unable to get course for the courseId' }
  }

  console.log('InitMap: course', course, 'follow', follow)

  const attributions =
    '<a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'

  const source = new XYZ({
    attributions,
    url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
  })

  const tileLayer = new TileLayer({ source })

  const firstMark = course.instructions[0].mark
  const lon = firstMark.lon
  const lat = firstMark.lat
  const zoom = 11

  const view = new View({
    center: fromLonLat([lon, lat]),
    zoom
  })

  map.setLayers([tileLayer])
  map.setView(view)

  return { success: true, message: 'Map Initalised' }
}
