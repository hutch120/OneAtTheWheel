import React, { useState, useCallback } from 'react'
import BlueTrackMap, { MapEvents } from 'bluetrack/BlueTrackMap'
import styled from 'styled-components'
import { Header } from '../components/Header'

const Page = styled.div`
height: 100vh;
width: 100vw;
`

const MapSection = styled.div`
height: calc(100vh - 150px);
width: 100vw;
`

const InfoSection = styled.div`
height: 100px;
width: 100vw;
`

const Title = styled.div`
padding-left: 10px;
left: 80px;
color: #0080ff;
font-size: 20px;
`

const Instructions = styled.div`
padding-left: 10px;
color: #0080ff;
font-size: 12px;
`

let features = []
export function CreateCourse ({ setRoute }) {
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

  return (
    <Page>
      <Header setRoute={setRoute} />
      <MapSection>
        <BlueTrackMap MapOptions={MapOptions} MapCallback={(evt) => MapCallback({ evt, forceUpdate })} />
      </MapSection>
      <InfoSection>
        <Title>Create a course</Title>
        <Instructions>Click/Press on map to create each waypoint (approx) Edit lat/lng after if required.</Instructions>
      </InfoSection>
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

function MapCallback ({ evt, features, forceUpdate }) {
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
