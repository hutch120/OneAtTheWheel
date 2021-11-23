import React, { useState, useEffect } from 'react'
import { Landing } from './Landing'
import { ViewCourse } from './ViewCourse'
import { CreateCourse } from './CreateCourse'
import { Info } from './Help'
import styled from 'styled-components'

const Page = styled.div`
  height: 100vh;
  width: 100vw;
`

export const ROUTES = {
  landing: 'landing',
  createcourse: 'createcourse',
  viewcourse: 'viewcourse',
  info: 'info'
}

export function setRouteFromHash ({ setRoute }) {
  let route = { id: ROUTES.landing }
  const hashArr = window?.location?.hash?.split('/') ?? []
  const key = hashArr[1] ?? ''
  const value = hashArr[2] ?? ''

  if (key === ROUTES.createcourse) route = { id: ROUTES.createcourse, data: { course: value } }
  if (key === ROUTES.viewcourse) route = { id: ROUTES.viewcourse, data: { course: value } }
  if (key === ROUTES.info) route = { id: ROUTES.info }
  if (key === '') route = { id: ROUTES.landing }
  setRoute(route)
}

export function updateRoute ({ key, value, setRoute }) {
  let hash = ''
  if (key && value === '') hash = `/${key}`
  if (value && value !== '') hash = `/${key}/${value}`
  window.location.hash = hash
  setRouteFromHash({ setRoute })
}

function addEventListeners ({ setRoute }) {
  window.addEventListener('popstate', function (event) {
    console.log('back/forward button clicked...')
    setRouteFromHash({ setRoute })
  })
}

function removeEventListeners () {
  window.removeEventListener('popstate')
}

export function Routes () {
  const [route, setRoute] = useState()

  useEffect(() => {
    addEventListeners({ setRoute })
    setRouteFromHash({ setRoute })
    return () => {
      removeEventListeners()
    }
  }, [])

  const args = { route, setRoute, updateRoute }
  if (!route?.id) return null

  return (
    <Page>
      {route?.id === ROUTES.landing && <Landing {...args} />}
      {route?.id === ROUTES.viewcourse && <ViewCourse {...args} />}
      {route?.id === ROUTES.createcourse && <CreateCourse {...args} />}
      {route?.id === ROUTES.info && <Info {...args} />}
    </Page>
  )
}
