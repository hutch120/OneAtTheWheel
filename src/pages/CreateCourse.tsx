import { OneMap } from 'components/OneMap'
import { Header } from '../components/Header'

export function CreateCourse() {
  const mapOptions = {
    center: {
      lon: 144.9125673219142,
      lat: -37.99704788855863
    },
    zoom: 10
  }
  return (
    <div>
      <Header />
      <div className="absolute top-16 left-0 right-0 bottom-0 z-10">
        <OneMap mapOptions={mapOptions} />
      </div>
    </div>
  )
}
