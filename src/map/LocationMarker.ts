import { Map } from 'ol'
import Point from 'ol/geom/Point'
import Feature from 'ol/Feature'
import { Circle as CircleStyle, Fill, Stroke, Style } from 'ol/style'
import { fromLonLat } from 'ol/proj'
import VectorSource from 'ol/source/Vector'
import { Vector as VectorLayer } from 'ol/layer'
import { ILocation } from '../components/OneMap'

interface IInitLocationMarker {
  map: Map
}

let geoMarker: Feature | null = null

export function InitLocationMarker({ map }: IInitLocationMarker) {
  const geoMarkerStyle: Style = new Style({
    image: new CircleStyle({
      radius: 10,
      fill: new Fill({ color: 'blue' }),
      stroke: new Stroke({
        color: 'white',
        width: 2
      })
    })
  })

  geoMarker = new Feature({
    type: 'geoMarker',
    geometry: undefined
  })

  const vectorLayer = new VectorLayer({
    source: new VectorSource({
      features: [geoMarker]
    }),
    style: geoMarkerStyle
  })

  map.addLayer(vectorLayer)

  return { success: true, message: 'Location Marker Initalised.' }
}

interface IUpdateLocationMarker {
  location: ILocation
}
export function UpdateLocationMarker({ location }: IUpdateLocationMarker) {
  // const { accuracy, altitude, altitudeAccuracy, heading, latitude, longitude, speed } =  position.coords
  // const timestamp = position.timestamp
  if (geoMarker) {
    const position = new Point(fromLonLat([location.lon, location.lat]))
    geoMarker.setGeometry(position)
  }
}

export function UpdateLocationMarkerErr(positionError: GeolocationPositionError) {
  console.log('Position update error', positionError)
}
