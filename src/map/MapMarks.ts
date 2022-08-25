import { Map } from 'ol'
import Point from 'ol/geom/Point'
import Feature from 'ol/Feature'
import { Circle as CircleStyle, Fill, Stroke, Style, Text } from 'ol/style'
import { fromLonLat, toLonLat } from 'ol/proj'
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
  const featuresMarkDots: Feature<Geometry>[] = [] // Dot and text split to make hitbox/select/click work.
  const featuresMarkText: Feature<Geometry>[] = [] // Dot and text split to make hitbox/select/click work.
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
        radius: 20,
        fill: new Fill({ color: markColor }),
        stroke: new Stroke({
          color: 'white',
          width: 2
        })
      })
    })

    const styleMarkName: Style = new Style({
      text: new Text({
        font: '16px sans-serif',
        text: mark.name,
        textAlign: 'left',
        offsetY: -8,
        offsetX: 25,
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
        font: '16px sans-serif',
        text: instruction.passTo,
        textAlign: 'left',
        offsetY: 8,
        offsetX: 25,
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
        font: '20px sans-serif',
        text: order + '',
        fill: new Fill({
          color: 'black'
        }),
        stroke: new Stroke({
          color: 'white',
          width: 3
        })
      })
    })

    const markFeatureDot = new Feature({
      name: mark.id,
      type: 'geoMarker',
      geometry: position
    })
    const markFeatureText = new Feature({
      type: 'geoMarker',
      geometry: position
    })

    markFeatureDot.setId(mark.id)
    markFeatureDot.setStyle([styleDot])
    featuresMarkDots.push(markFeatureDot)

    markFeatureText.setStyle([styleMarkName, styleMarkPassTo, styleMarkOrder])
    featuresMarkText.push(markFeatureText)
  }
  const styleLine: Style = new Style({
    stroke: new Stroke({
      color: 'blue',
      width: 3
    }),
    fill: new Fill({
      color: 'rgba(0, 0, 255, 0.1)'
    })
  })

  const locationToMarkFeature = new Feature({
    type: 'lineString'
  })

  vectorSourceLocationToMark = new VectorSource({
    features: [locationToMarkFeature]
  })
  const vectorLayerLocationToMark = new VectorLayer({
    source: vectorSourceLocationToMark,
    style: [styleLine]
  })
  map.addLayer(vectorLayerLocationToMark)

  const vectorLayerMarkDots = new VectorLayer({
    source: new VectorSource({
      features: featuresMarkDots
    })
  })
  map.addLayer(vectorLayerMarkDots)

  const vectorLayerMarkText = new VectorLayer({
    source: new VectorSource({
      features: featuresMarkText
    })
  })
  map.addLayer(vectorLayerMarkText)

  const selectClick = new Select({
    condition: click,
    style: null,
    layers: [vectorLayerMarkDots] // If you add the text layers the hitbox is super wierd.
  })
  map.addInteraction(selectClick)

  /*
  map.on('pointermove', function (e) {
    console.log('map pointermove')
    map.forEachFeatureAtPixel(e.pixel, function (f) {
      const markId = f.getId() as string
      if (markId && markId !== '') {
        console.log('selectedMark', markId)
        setMarkId(markId)
      }
      return true
    })
  })*/

  selectClick.on('select', function (e) {
    // console.log('Features clicked')
    const features = e.target.getFeatures()
    const featuresCount = features.getLength()
    for (let index = 0; index < featuresCount; index++) {
      const selectedMarkFeature = features.item(index) as Feature<Point>
      selectedMark = selectedMarkFeature?.getGeometry()?.getCoordinates() ?? null
      const markId = selectedMarkFeature.getId() as string
      if (markId && markId !== '') {
        // console.log('selectedMark', selectedMark)
        setMarkId(markId)
        UpdatePosition({}) // Use current values
      }
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
  lon?: number | null
  lat?: number | null
}

let currentLon: number | null = null
let currentLat: number | null = null

function UpdatePosition({ lon = currentLon, lat = currentLat }: IUpdatePosition) {
  if (selectedMark && lon && lat) {
    currentLon = lon
    currentLat = lat
    vectorSourceLocationToMark?.clear()

    const selectedMarkLonLat = toLonLat(selectedMark)
    console.log('Device position and selected Mark', [[lon, lat], selectedMarkLonLat])

    const currentLocation = fromLonLat([lon, lat])

    const lineString = [currentLocation, selectedMark]
    const locationToMarkFeature = new Feature({
      type: 'lineString',
      geometry: new LineString(lineString)
    })
    vectorSourceLocationToMark?.addFeature(locationToMarkFeature)
  }
}
