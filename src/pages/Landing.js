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

const FilterableListWrapper = styled.div`
padding: 20px;
`

function onClickShowACourse ({ setRoute, course }) {
  updateRoute({ key: ROUTES.viewcourse, value: course, setRoute })
}

export function Landing ({ route, setRoute }) {
  const [courses, setCourses] = useState(null)

  async function listCourses () {
    const response = await s3Utils.listCourses()
    const _courses = []
    if (response.success) {
      const contents = response?.data?.Contents
      for (let i = 0; i < contents.length; i++) {
        const keyRemoveExtension = contents[i].Key.replace('.json', '')
        _courses.push({ id: i, course: keyRemoveExtension })
      }
    }
    setCourses(_courses)
  }

  useEffect(() => {
    listCourses()
  }, [])

  console.log('courses', courses)
  return (
    <Wrapper>
      <Header route={route} setRoute={setRoute} />
      <HeaderBuffer />
      {!courses && <div>Loading Courses...</div>}
      {courses &&
        <FilterableListWrapper>
          <FilterableList list={courses} onClickItem={(course) => onClickShowACourse({ setRoute, course })} />
        </FilterableListWrapper>}
      <Background />
    </Wrapper>
  )
}
