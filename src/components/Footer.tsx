import { useState } from 'react'
import { Link } from 'react-router-dom'
import * as Icons from './Icons'

// For non-map data, push data down from top header height.
export function HeaderSpacer() {
  return <div className="h-18"></div>
}

interface IFooter {
  mapData?: {
    latitude: number
    longitude: number
    direction: number
    heading: number
    speed: number
    timestamp: string
  }
}

// From  here: https://larainfo.com/blogs/react-responsive-navbar-menu-with-tailwind-css-example
export function Footer({ mapData }: IFooter) {
  const [navbar, setNavbar] = useState(false)

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
              {mapData && (
                <div className="md:hidden">
                  <button
                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                    onClick={() => setNavbar(!navbar)}
                  >
                    {navbar ? <Icons.Close /> : <Icons.Sparkles />}
                  </button>
                </div>
              )}
            </div>
          </div>
          {mapData && (
            <div>
              <div
                className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                  navbar ? 'block' : 'hidden'
                }`}
              >
                <div className="grid">
                  <div className="p-2">
                    <Icons.ArrowsPointingIn />
                    <div className="inline pl-2 text-white">{mapData.latitude}</div>
                  </div>
                  <div className="p-2">
                    <Icons.ArrowsPointingIn />
                    <div className="inline pl-2 text-white">{mapData.longitude}</div>
                  </div>
                  <div className="p-2">
                    <Icons.ArrowsPointingOut />
                    <div className="inline pl-2 text-white">{mapData.direction}</div>
                  </div>
                  <div className="p-2">
                    <Icons.ArrowsPointingOut />
                    <div className="inline pl-2 text-white">{mapData.heading}</div>
                  </div>
                  <div className="p-2">
                    <Icons.ArrowsPointingOut />
                    <div className="inline pl-2 text-white">{mapData.speed}</div>
                  </div>
                  <div className="p-2">
                    <Icons.ArrowsPointingOut />
                    <div className="inline pl-2 text-white">{mapData.timestamp}</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  )
}
