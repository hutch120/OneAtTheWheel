import 'ol/ol.css'
import { useEffect } from 'react'
import { Map } from 'ol'
import TileLayer from 'ol/layer/WebGLTile'
import XYZ from 'ol/source/XYZ'
import View from 'ol/View'
import { fromLonLat } from 'ol/proj'

interface IOneMap {
  mapOptions: {
    center: { lon: number; lat: number }
    zoom: number
  }
}

export function OneMap({ mapOptions }: IOneMap) {
  const source = new XYZ({
    url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
  })

  const layer = new TileLayer({
    source: source
  })

  const lon = mapOptions?.center?.lon ?? 144.9125673219142
  const lat = mapOptions?.center?.lat ?? -37.99704788855863
  const zoom = mapOptions?.zoom ?? 2

  const map = new Map({
    layers: [layer],
    view: new View({
      center: fromLonLat([lon, lat]),
      zoom
    })
  })

  map.on('postrender', function (event) {
    console.log(event)
  })

  useEffect(() => map.setTarget('map'))

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <div id="map" style={{ height: '100%', width: '100%' }}></div>
    </div>
  )
}
