import { Map } from 'ol'
import Point from 'ol/geom/Point'
import Feature from 'ol/Feature'
import { Circle as CircleStyle, Fill, Stroke, Style, Text } from 'ol/style'
import { fromLonLat } from 'ol/proj'
import VectorSource from 'ol/source/Vector'
import { Vector as VectorLayer } from 'ol/layer'
import { EMarkPassTo, ICourse } from './courses'
import Geometry from 'ol/geom/Geometry'
import Select from 'ol/interaction/Select'
import { click } from 'ol/events/condition'
import { Coordinate } from 'ol/coordinate'
import LineString from 'ol/geom/LineString'

interface IInitMapMarks {
  map: Map
  course: ICourse
  setMarkId: React.Dispatch<React.SetStateAction<string>>
}

let selectedMark: Coordinate | null = null
let vectorSourceLocationToMark: VectorSource | null = null

export function InitMapMarks({ map, course, setMarkId }: IInitMapMarks) {
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
      name: mark.id,
      type: 'geoMarker',
      geometry: position
    })

    markFeature.setId(mark.id)
    markFeature.setStyle([styleDot, styleMarkName, styleMarkPassTo, styleMarkOrder])
    features.push(markFeature)
  }

  const vectorLayerMarks = new VectorLayer({
    source: new VectorSource({
      features
    })
  })

  map.addLayer(vectorLayerMarks)

  const locationToMarkFeature = new Feature({
    type: 'lineString'
  })

  vectorSourceLocationToMark = new VectorSource({
    features: [locationToMarkFeature]
  })
  const vectorLayerLocationToMark = new VectorLayer({
    source: vectorSourceLocationToMark
  })

  map.addLayer(vectorLayerLocationToMark)

  const selectClick = new Select({
    condition: click,
    style: null
  })
  map.addInteraction(selectClick)
  selectClick.on('select', function (e) {
    const features = e.target.getFeatures()
    if (features.getLength() > 0) {
      const selectedMarkFeature = features.item(0) as Feature<Point>
      selectedMark = selectedMarkFeature?.getGeometry()?.getCoordinates() ?? null
      const markId = selectedMarkFeature.getId() as string
      console.log('selectedMark', selectedMark)
      setMarkId(markId)
    }
  })

  return { success: true, message: 'Location Marker Initalised.' }
}

export function UpdateMark(position: GeolocationPosition) {
  // const { accuracy, altitude, altitudeAccuracy, heading, latitude, longitude, speed } =  position.coords
  // const timestamp = position.timestamp
  const { latitude, longitude } = position.coords
  UpdatePosition({ lon: longitude, lat: latitude })
}

export function UpdateMarkErr(positionError: GeolocationPositionError) {
  console.log('UpdateMark update error', positionError)
}

interface IUpdatePosition {
  lon: number
  lat: number
}

function UpdatePosition({ lon, lat }: IUpdatePosition) {
  if (selectedMark) {
    console.log('Device position', lon, lat, 'selectedMark', selectedMark)
    vectorSourceLocationToMark?.clear()
    const currentLocation = fromLonLat([lon, lat])
    const lineString = [currentLocation, selectedMark]
    const locationToMarkFeature = new Feature({
      type: 'lineString',
      geometry: new LineString(lineString)
    })
    vectorSourceLocationToMark?.addFeature(locationToMarkFeature)
  }
}
