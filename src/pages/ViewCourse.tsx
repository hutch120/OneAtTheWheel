import { useState } from 'react'
import { OneMap } from '../components/OneMap'
import { Layout } from './Layout'
import { useParams } from 'react-router-dom'

export function ViewCourse() {
  const { courseId } = useParams<string>()
  const { follow } = useParams<string>()

  const [markId, setMarkId] = useState<string>('')

  if (!courseId || courseId === '') {
    return <div>Invalid CourseId!</div>
  }

  let bFollow = false
  if (follow && follow === 'true') {
    bFollow = true
  }

  return (
    <Layout scrollContent={false} showMapFooter={true} markId={markId}>
      <OneMap courseId={courseId} follow={bFollow} setMarkId={setMarkId} />
    </Layout>
  )
}
