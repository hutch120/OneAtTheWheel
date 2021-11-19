import React, { useState, useEffect } from 'react'
import { Landing } from './pages/Landing'
import { MapShowCourse } from './pages/ViewCourse'
import { MapCreateCourse } from './pages/CreateCourse'
import { Info } from './pages/Info'
import styled from 'styled-components'

const Page = styled.div`
  height: 100vh;
  width: 100vw;
`

export const PAGES = {
  landing: 'landing',
  mapCreateCourse: 'mapCreateCourse',
  mapShowCourse: 'mapShowCourse',
  info: 'info'
}

function getPageFromHash () {
  const hashArr = window?.location?.hash?.split('/') ?? []
  if (hashArr.length === 3 && hashArr[1] === 'course' && hashArr[2] !== '') {
    const course = hashArr[2] ?? ''
    if (course === 'new') {
      return { page: PAGES.mapCreateCourse, data: { course } }
    } else {
      return { page: PAGES.mapShowCourse, data: { course } }
    }
  } else if (hashArr.length === 2 && hashArr[1] === 'info') {
    return { page: PAGES.info, data: {} }
  } else {
    return { page: PAGES.landing, data: {} }
  }
}

function App () {
  const [pageData, setPageData] = useState()

  useEffect(() => {
    window.addEventListener('popstate', function (event) {
      console.log('back/forward button clicked...')
      const pageData = getPageFromHash()
      setPageData(pageData)
    })
    const pageData = getPageFromHash()
    setPageData(pageData)
    return () => {
      window.removeEventListener('popstate')
    }
  }, [])

  if (!pageData) return null

  const args = { ...pageData, setPageData }
  return (
    <Page>
      {pageData?.page === PAGES.landing && <Landing {...args} />}
      {pageData?.page === PAGES.mapShowCourse && <MapShowCourse {...args} />}
      {pageData?.page === PAGES.mapCreateCourse && <MapCreateCourse {...args} />}
      {pageData?.page === PAGES.info && <Info {...args} />}
    </Page>
  )
}

export default App
