import { IOneMap } from '../components/OneMap'
import { Map } from 'ol'
import TileLayer from 'ol/layer/WebGLTile'
import XYZ from 'ol/source/XYZ'
import View from 'ol/View'
import { fromLonLat } from 'ol/proj'
import { GetCourse } from '../map/courses'

interface IInitMap {
  map: Map
  mapOptions: IOneMap
  courseId?: string
}
export function InitMap({ map, mapOptions, courseId }: IInitMap) {
  if (!courseId || courseId === '') {
    return { success: false, message: 'Invalid courseId' }
  }

  const course = GetCourse(courseId)
  if (!course) {
    return { success: false, message: 'Unable to get course for the courseId' }
  }

  /*
  map.on('postrender', function (event) {
    console.log(event)
  })
  */

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
