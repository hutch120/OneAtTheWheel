import { Map } from 'ol'
import Point from 'ol/geom/Point'
import Feature from 'ol/Feature'
import { Circle as CircleStyle, Fill, Stroke, Style, Text } from 'ol/style'
import { fromLonLat } from 'ol/proj'
import VectorSource from 'ol/source/Vector'
import { Vector as VectorLayer } from 'ol/layer'
import { ICourse } from './courses'
import { GetMark, IMarkData } from './marks'
import Geometry from 'ol/geom/Geometry'
import Select from 'ol/interaction/Select'
import { click } from 'ol/events/condition'
import LineString from 'ol/geom/LineString'

interface IInitMapMarks {
  map: Map
  course: ICourse
  setMark: Function
}

let vectorSourceLocationToMark: VectorSource | null = null

export function InitMapMarks({ map, course, setMark }: IInitMapMarks) {
  const instructions = course.instructions
  const featuresMarkDots: Feature<Geometry>[] = [] // Dot and text split to make hitbox/select/click work.
  const featuresMarkText: Feature<Geometry>[] = [] // Dot and text split to make hitbox/select/click work.
  for (let index = 0; index < instructions.length; index++) {
    const instruction = instructions[index]
    const mark = instruction.mark
    const lon = mark.lon
    const lat = mark.lat
    const position = new Point(fromLonLat([lon, lat]))
    // const order = index + 1

    let markColor = 'grey'
    /*if (instruction.passTo === EMarkPassTo.port) {
      markColor = 'red'
    } else if (instruction.passTo === EMarkPassTo.starboard) {
      markColor = 'green'
    }*/
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
        offsetY: -10,
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

    const styleMarkDescription: Style = new Style({
      text: new Text({
        font: '10px sans-serif',
        text: mark.description,
        textAlign: 'left',
        offsetY: 4,
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

    /*
    const styleMarkPassTo: Style = new Style({
      text: new Text({
        font: '16px sans-serif',
        text: instruction.passTo,
        textAlign: 'left',
        offsetY: 18,
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
    })*/

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

    markFeatureText.setStyle([styleMarkName, styleMarkDescription])
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
    }),
    declutter: false
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
      const markId = selectedMarkFeature.getId() as string

      if (markId && markId !== '') {
        let mark: IMarkData | null = GetMark(markId)
        setMark(mark)
      }
    }
  })

  return { success: true, message: 'Location Marker Initalised.' }
}

interface IUpdatePosition {
  location: {
    lon: number
    lat: number
  }
  mark: IMarkData
}

export function UpdateLineFromPositionToMark({ location, mark }: IUpdatePosition) {
  if (mark?.lon && mark?.lat && location.lon && location.lat) {
    console.log('Update line', mark.lon, mark.lat, 'lon:', location.lon, 'lat:', location.lat)
    vectorSourceLocationToMark?.clear()

    const locationLonLat = fromLonLat([location.lon, location.lat])
    const markLonLat = fromLonLat([mark?.lon, mark?.lat])

    console.log('Device position and selected Mark', [locationLonLat, markLonLat])
    const lineString = [locationLonLat, markLonLat]
    const locationToMarkFeature = new Feature({
      type: 'lineString',
      geometry: new LineString(lineString)
    })
    vectorSourceLocationToMark?.addFeature(locationToMarkFeature)
  }
}
