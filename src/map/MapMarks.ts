import { Map } from 'ol'
import Point from 'ol/geom/Point'
import Feature from 'ol/Feature'
import { Circle as CircleStyle, Fill, Stroke, Style } from 'ol/style'
import { fromLonLat } from 'ol/proj'
import VectorSource from 'ol/source/Vector'
import { Vector as VectorLayer } from 'ol/layer'
import { ICourse } from './courses'
import Geometry from 'ol/geom/Geometry'

interface IInitMapMarks {
  map: Map
  course: ICourse
}

export function InitMapMarks({ map, course }: IInitMapMarks) {
  const instructions = course.instructions
  const features: Feature<Geometry>[] = []
  for (let index = 0; index < instructions.length; index++) {
    const element = instructions[index]
    const lon = element.mark.lon
    const lat = element.mark.lat
    const position = new Point(fromLonLat([lon, lat]))

    const style: Style = new Style({
      image: new CircleStyle({
        radius: 10,
        fill: new Fill({ color: 'green' }),
        stroke: new Stroke({
          color: 'white',
          width: 2
        })
      })
    })

    const markFeature = new Feature({
      type: 'geoMarker',
      geometry: position
    })
    markFeature.setStyle(style)
    features.push(markFeature)
  }

  const vectorLayerMarks = new VectorLayer({
    source: new VectorSource({
      features
    })
  })

  map.addLayer(vectorLayerMarks)

  return { success: true, message: 'Location Marker Initalised.' }
}
