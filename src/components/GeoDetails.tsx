import { useState } from 'react'
import * as Icons from './Icons'
import useGeolocation from 'react-hook-geolocation'
import { ICourse, GetBearing } from '../map/courses'
import { IMarkData } from '../map/marks'
import { format } from 'timeago.js'
//import bearing from '@turf/bearing'
import distance from '@turf/distance'

interface IMapFooter {
  course: ICourse
  mark?: IMarkData
}

export function GeoDetails({ course, mark }: IMapFooter) {
  const [showGeoDetails, setShowGeoDetails] = useState(false)
  const geolocation = useGeolocation({
    enableHighAccuracy: true,
    maximumAge: 15000,
    timeout: 12000
  })

  console.log('MapFooter', course)

  let bearingStr = ''
  let distanceStr = ''
  if (geolocation.longitude && geolocation.latitude && mark?.lon && mark?.lat) {
    const dist = distance([geolocation.longitude, geolocation.latitude], [mark?.lon, mark?.lat], {
      units: 'meters'
    })
    if (dist && dist > 0) {
      const nm = dist / 1852
      distanceStr = nm.toFixed(2) + 'nm'
    }

    // console.log(      'bearing to mark data',      geolocation.longitude,      geolocation.latitude,      mark.lon,      mark.lat    )
    const bearing = GetBearing(geolocation.longitude, geolocation.latitude, mark.lon, mark.lat)
    // console.log('bearing to mark', bearing)
    bearingStr = bearing + '<'
  }

  if (!course) {
    return <div>Invalid CourseId!</div>
  }

  let timeAgoStr = ''
  if (geolocation.timestamp) {
    timeAgoStr = format(new Date(geolocation.timestamp))
  }

  return (
    <div>
      <div className="absolute z-20 top-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h2 className="text-2xl font-bold text-white">
          {bearingStr} {distanceStr}
        </h2>
      </div>

      <div className="absolute z-20 top-3 right-5">
        <button
          className="p-2 rounded-md outline-none focus:border-gray-400 focus:border"
          onClick={() => setShowGeoDetails(!showGeoDetails)}
        >
          {showGeoDetails ? <Icons.Close /> : <Icons.Sparkles />}
        </button>
      </div>

      {showGeoDetails && (
        <div className="absolute z-40 top-16 left-0 right-0 bottom-0 bg-stone-800">
          <div className="grid text-xl">
            <div className="p-2">
              <Icons.ArrowsPointingIn />
              <div className="inline pl-2 text-white">lat: {geolocation.latitude}</div>
            </div>
            <div className="p-2">
              <Icons.ArrowsPointingIn />
              <div className="inline pl-2 text-white">lon: {geolocation.longitude}</div>
            </div>
            {geolocation.heading && (
              <div className="p-2">
                <Icons.ArrowsPointingOut />
                <div className="inline pl-2 text-white">heading: {geolocation.heading}</div>
              </div>
            )}
            {geolocation.altitude && (
              <div className="p-2">
                <Icons.ArrowsPointingOut />
                <div className="inline pl-2 text-white">altitude: {geolocation.altitude}</div>
              </div>
            )}
            {geolocation.speed && (
              <div className="p-2">
                <Icons.ArrowsPointingOut />
                <div className="inline pl-2 text-white">speed: {geolocation.speed}</div>
              </div>
            )}
            <div className="p-2">
              <Icons.Clock />
              <div className="inline pl-2 text-white">{timeAgoStr}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
