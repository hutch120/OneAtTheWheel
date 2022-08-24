import { Map } from 'ol'
import TileLayer from 'ol/layer/WebGLTile'
import XYZ from 'ol/source/XYZ'

interface IInitMapBase {
  map: Map
}

export function InitMapBase({ map }: IInitMapBase) {
  const attributions =
    '<a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'

  const source = new XYZ({
    attributions,
    url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
  })

  const tileLayer = new TileLayer({ source })

  map.addLayer(tileLayer)

  return { success: true, message: 'Base map initalised' }
}
