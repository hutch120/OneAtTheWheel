import { OneMap } from '../components/OneMap'
import useGeolocation from 'react-hook-geolocation'
import { Header } from '../components/Header'

export function ViewCourse() {
  const geolocation = useGeolocation({
    enableHighAccuracy: true,
    maximumAge: 15000,
    timeout: 12000
  })

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
      {!geolocation.error && (
        <div>
          <ul>
            <li>Latitude: {geolocation.latitude}</li>
            <li>Longitude: {geolocation.longitude}</li>
            <li>Location accuracy: {geolocation.accuracy}</li>
            <li>Altitude: {geolocation.altitude}</li>
            <li>Altitude accuracy: {geolocation.altitudeAccuracy}</li>
            <li>Heading: {geolocation.heading}</li>
            <li>Speed: {geolocation.speed}</li>
            <li>Timestamp: {geolocation.timestamp}</li>
          </ul>
        </div>
      )}
      {geolocation.error && (
        <div>
          <ul>
            <li>No geo info yet... is it enabled?</li>
          </ul>
        </div>
      )}
      <OneMap mapOptions={mapOptions} />
    </div>
  )
}
