import React, { useState, useCallback } from 'react'
import BlueTrackMap, { MapEvents } from 'bluetrack/BlueTrackMap'
import styled from 'styled-components'
import { Header } from '../components/Header'
// import * as s3Utils from '../awsutils/s3Utils'

const Page = styled.div`
height: 100vh;
width: 100vw;
`

const MapSection = styled.div`
height: 100vh;
width: 100vw;
`

const Instructions = styled.div`
position: absolute;
top: 42px;
left: 10px;
color: #0080ff;
font-size: 16px;
font-weight: 600;
max-width: 100vw;
color: grey;
`

const Button = styled.button`
position: absolute;
bottom: 20px;
left: 20px;
background: transparent;
border-radius: 6px;
border: 2px solid #626262;
margin: 2px;
padding: 6px;
background: #cfcfcf;
color: black;
font-size: 20px;
`

let features = []
export function CreateCourse ({ route, setRoute }) {
  const [, updateState] = useState()
  const forceUpdate = useCallback(() => updateState({}), [])

  console.log('rerender', features)
  const MapOptions = {
    addMode: true,
    x: [{ value: 144.92737356567378 }],
    y: [{ value: -38.07013375011199 }],
    z: [{ value: 10 }],
    d: [
      { label: 'Base Map', enabled: true, id: 'basemap1', order: 1, type: 'stamen' },
      {
        label: 'Points',
        id: 'points',
        order: 2,
        type: 'geojson',
        geojson: {
          type: 'FeatureCollection',
          features
        },
        add: { type: 'Point' }
      }
    ]
  }

  async function saveCourse () {
    // const response = await s3Utils.createCourse()
  }

  return (
    <Page>
      <Header route={route} setRoute={setRoute} />
      <MapSection>
        <BlueTrackMap MapOptions={MapOptions} MapCallback={(evt) => MapCallback({ evt, forceUpdate })} />
      </MapSection>
      <Instructions>Click/Press on map to create each waypoint (approx) Edit lat/lng after if required.</Instructions>
      <Button onClick={() => saveCourse()}>Save</Button>
    </Page>
  )
}

function addFeature ({ newFeature, forceUpdate }) {
  const id = features.length + 1
  const idStr = id + ''
  newFeature.properties = { id, marker_url: idStr }
  features.push(newFeature)
  console.log('new features list', features)
  forceUpdate()
}

function moveFeature ({ _features, forceUpdate }) {
  features = _features ?? []
  forceUpdate()
}

function MapCallback ({ evt, forceUpdate }) {
  switch (evt.type) {
    case MapEvents.FeaturesSelected:

      break
    case MapEvents.MapMoved:
      break
    case MapEvents.SourceModified:
      moveFeature({ _features: evt?.data?.geojsonFeaturesAll?.features, forceUpdate })
      break
    case MapEvents.SourceAdded:
      addFeature({ newFeature: evt?.data?.geojson?.features[0], forceUpdate })
      break
    case MapEvents.MapClicked:

      break
    default:
      console.log('MapCallback event not supported', evt)
  }
  console.log('MapCallback event', evt.type, evt)
}
