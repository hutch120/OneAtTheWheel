import { Map } from 'ol'
import Point from 'ol/geom/Point'
import Feature from 'ol/Feature'
import { Circle as CircleStyle, Fill, Stroke, Style } from 'ol/style'
import { fromLonLat } from 'ol/proj'
import VectorSource from 'ol/source/Vector'
import { Vector as VectorLayer } from 'ol/layer'

interface IShowLocationMarker {
  lon: number
  lat: number
  map: Map
}

let geoMarker: Feature | null = null

export function ShowLocationMarker({ map, lon, lat }: IShowLocationMarker) {
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

  const position = new Point(fromLonLat([lon, lat]))

  geoMarker = new Feature({
    type: 'geoMarker',
    geometry: position
  })

  const vectorLayer = new VectorLayer({
    source: new VectorSource({
      features: [geoMarker]
    }),
    style: geoMarkerStyle
  })

  map.addLayer(vectorLayer)
}

interface IUpdateLocationMarker {
  lon: number
  lat: number
}

export function UpdateLocationMarker({ lon, lat }: IUpdateLocationMarker) {
  if (geoMarker) {
    const position = new Point(fromLonLat([lon, lat]))
    geoMarker.setGeometry(position)
  }
}
