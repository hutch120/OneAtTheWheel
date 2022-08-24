import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import * as Icons from './Icons'
import useGeolocation from 'react-hook-geolocation'
// import { GetCourse } from '../map/courses'
import { format } from 'timeago.js'

// For non-map data, push data down from top header height.
export function HeaderSpacer() {
  return <div className="h-18"></div>
}

// From  here: https://larainfo.com/blogs/react-responsive-navbar-menu-with-tailwind-css-example
export function MapFooter() {
  const { courseId } = useParams<string>()
  const { follow } = useParams<string>()
  const [navbar, setNavbar] = useState(false)

  const geolocation = useGeolocation({
    enableHighAccuracy: true,
    maximumAge: 15000,
    timeout: 12000
  })

  if (!courseId || courseId === '') {
    return <div>Invalid CourseId!</div>
  }

  let bFollow = false
  if (follow && follow === 'true') {
    bFollow = true
  }

  let followUrl = `/view/${courseId}/follow/true`
  let noFollowUrl = `/view/${courseId}`

  // const course = GetCourse(courseId)

  let timeAgoStr = ''
  if (geolocation.timestamp) {
    timeAgoStr = format(new Date(geolocation.timestamp))
  }

  return (
    <div>
      <nav className="bg-blue-500 shadow z-20">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 bg-blue-500">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <Link to="/about">
                <h2 className="text-2xl font-bold text-white">
                  <Icons.Help />
                </h2>
              </Link>

              {!bFollow && (
                <Link to={followUrl} aria-label="Follow">
                  <h2 className="text-2xl font-bold text-white">
                    <Icons.ArrowTrendingUp />
                  </h2>
                </Link>
              )}
              {bFollow && (
                <Link to={noFollowUrl} aria-label="Follow">
                  <h2 className="text-2xl font-bold text-white">
                    <Icons.ArrowDownCircle />
                  </h2>
                </Link>
              )}

              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? <Icons.Close /> : <Icons.Sparkles />}
                </button>
              </div>
            </div>
          </div>

          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'block' : 'hidden'
              }`}
            >
              <div className="grid">
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
          </div>
        </div>
      </nav>
    </div>
  )
}
