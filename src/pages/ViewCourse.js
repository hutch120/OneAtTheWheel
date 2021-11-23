import React from 'react'
import BlueTrackMap, { MapEvents } from 'bluetrack/BlueTrackMap'
import styled from 'styled-components'
import useGeolocation from 'react-hook-geolocation'
import { Header } from '../components/Header'

const Page = styled.div`
height: 100vh;
width: 100vw;
`

const GeoInfo = styled.div`
position: absolute;
width: 80%;
left: 10px;
bottom: 30px;
z-index: -1;
`

export function ViewCourse ({ route, setRoute }) {
  const geolocation = useGeolocation({
    enableHighAccuracy: true,
    maximumAge: 15000,
    timeout: 12000
  })

  const MapOptions = {
    addMode: true,
    x: [{ value: 144.9125673219142 }],
    y: [{ value: -37.99704788855863 }],
    z: [{ value: 10 }],
    d: [
      { label: 'Base Map', enabled: true, id: 'basemap1', order: 1, type: 'stamen' }
    ]
  }

  return (
    <Page>
      <Header route={route} setRoute={setRoute} />
      {!geolocation.error &&
        <GeoInfo>
          <ul>
            <li>Latitude:          {geolocation.latitude}</li>
            <li>Longitude:         {geolocation.longitude}</li>
            <li>Location accuracy: {geolocation.accuracy}</li>
            <li>Altitude:          {geolocation.altitude}</li>
            <li>Altitude accuracy: {geolocation.altitudeAccuracy}</li>
            <li>Heading:           {geolocation.heading}</li>
            <li>Speed:             {geolocation.speed}</li>
            <li>Timestamp:         {geolocation.timestamp}</li>
          </ul>
        </GeoInfo>}
      {geolocation.error &&
        <GeoInfo>
          <ul>
            <li>No geo info yet... is it enabled?</li>
          </ul>
        </GeoInfo>}
      <BlueTrackMap MapOptions={MapOptions} MapCallback={MapCallback} />
    </Page>
  )
}

function MapCallback (evt) {
  switch (evt.type) {
    case MapEvents.FeaturesSelected:
      break
    case MapEvents.MapMoved:
      break
    case MapEvents.SourceModified:
      break
    case MapEvents.MapClicked:
      break
    default:
      console.log('MapCallback event not supported', evt)
  }
  console.log('MapCallback event', evt.type, evt)
}
