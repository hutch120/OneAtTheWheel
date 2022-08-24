import { Map } from 'ol'
import Point from 'ol/geom/Point'
import Feature from 'ol/Feature'
import { Circle as CircleStyle, Fill, Stroke, Style, Text } from 'ol/style'
import { fromLonLat } from 'ol/proj'
import VectorSource from 'ol/source/Vector'
import { Vector as VectorLayer } from 'ol/layer'
import { EMarkPassTo, ICourse } from './courses'
import Geometry from 'ol/geom/Geometry'

interface IInitMapMarks {
  map: Map
  course: ICourse
}

export function InitMapMarks({ map, course }: IInitMapMarks) {
  const instructions = course.instructions
  const features: Feature<Geometry>[] = []
  for (let index = 0; index < instructions.length; index++) {
    const instruction = instructions[index]
    const mark = instruction.mark
    const lon = mark.lon
    const lat = mark.lat
    const position = new Point(fromLonLat([lon, lat]))
    const order = index + 1

    let markColor = 'grey'
    if (instruction.passTo === EMarkPassTo.port) {
      markColor = 'red'
    } else if (instruction.passTo === EMarkPassTo.starboard) {
      markColor = 'green'
    }
    const styleDot: Style = new Style({
      image: new CircleStyle({
        radius: 10,
        fill: new Fill({ color: markColor }),
        stroke: new Stroke({
          color: 'white',
          width: 2
        })
      })
    })

    const styleMarkName: Style = new Style({
      text: new Text({
        text: mark.name,
        textAlign: 'left',
        offsetX: 15,
        fill: new Fill({
          color: 'black'
        }),
        stroke: new Stroke({
          color: 'white',
          width: 2
        })
      })
    })

    const styleMarkPassTo: Style = new Style({
      text: new Text({
        text: instruction.passTo,
        textAlign: 'left',
        offsetY: 10,
        offsetX: 15,
        fill: new Fill({
          color: 'black'
        }),
        stroke: new Stroke({
          color: 'white',
          width: 2
        })
      })
    })

    const styleMarkOrder: Style = new Style({
      text: new Text({
        text: order + '',
        fill: new Fill({
          color: 'black'
        }),
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
    markFeature.setStyle([styleDot, styleMarkName, styleMarkPassTo, styleMarkOrder])
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
