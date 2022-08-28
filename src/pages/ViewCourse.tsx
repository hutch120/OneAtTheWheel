import { useState } from 'react'
import { OneMap } from '../components/OneMap'
import { Layout } from './Layout'
import { useParams } from 'react-router-dom'
import { GetCourse } from '../map/courses'
import { IMarkData } from '../map/marks'
import { PickMark } from 'components/PickMark'

export function ViewCourse() {
  const { courseId } = useParams<string>()
  const [mark, setMark] = useState<IMarkData | undefined>()

  if (!courseId || courseId === '') {
    return <div>Invalid CourseId!</div>
  }

  const course = GetCourse(courseId)
  if (!course) {
    return <div>Invalid Course!</div>
  }
  if (course.instructions.length === 0) {
    return (
      <Layout scrollContent={false} showMapFooter={true} course={course} mark={mark}>
        <div>No instructions!</div>
      </Layout>
    )
  }

  return (
    <Layout
      scrollContent={false}
      showMapFooter={true}
      showMapHeaderMenu={false}
      course={course}
      mark={mark}
    >
      <PickMark course={course} setMark={setMark} />
      <OneMap course={course} mark={mark} setMark={setMark} />
    </Layout>
  )
}
