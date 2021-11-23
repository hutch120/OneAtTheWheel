import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Header, HeaderBuffer } from '../components/Header'
import { updateRoute, ROUTES } from './Routes'
import { FilterableList } from '../components/FilterableList'
import * as s3Utils from '../awsutils/s3Utils'

const Wrapper = styled.div`
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
margin: auto;
text-align: center;
`

const Background = styled.div`
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
background-image: url('images/gracie_yacht.jpg');
background-size: cover;
z-index: -2;
`

function onClickShowACourse ({ setRoute, course }) {
  updateRoute({ key: ROUTES.viewcourse, value: course, setRoute })
}

export function Landing ({ setRoute }) {
  const [courses, setCourses] = useState()

  async function listCourses () {
    const response = await s3Utils.listCourses()
    setCourses(response.data)
  }

  useEffect(() => {
    listCourses()
  }, [])

  console.log('courses', courses)
  return (
    <Wrapper>
      <Header setRoute={setRoute} />
      <HeaderBuffer />
      <FilterableList list={['a', 'b']} onClickRow={onClickShowACourse} />
      <Background />
    </Wrapper>
  )
}
