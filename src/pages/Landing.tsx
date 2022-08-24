import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Layout } from './Layout'

enum EMarkSideTo {
  port = 'port',
  starboard = 'starboard'
}

interface ICourse {
  id: string
  name: string
  item: {
    mark: {
      lon: number
      lat: number
      name: string
      sideTo: EMarkSideTo
    }[]
  }
}
const testCourses: ICourse[] = [
  {
    id: 'course1',
    name: 'Course 1',
    item: {
      mark: []
    }
  },
  {
    id: 'course2',
    name: 'Course 2',
    item: {
      mark: []
    }
  }
]

export function Landing() {
  const [courses] = useState<ICourse[]>(testCourses)

  return (
    <Layout>
      <div className="p-4">
        Select a course
        {courses.map((course) => {
          const to = `/view/${course.id}`
          return (
            <div key={course.id} className="p-1">
              <Link to={to}>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  {course.name}
                </button>
              </Link>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}
