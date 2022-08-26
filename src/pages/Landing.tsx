import { Link } from 'react-router-dom'
import { Layout } from './Layout'
import { GetCourses } from '../map/courses'
import { config } from '../config'

export function Landing() {
  const courses = GetCourses()

  return (
    <Layout>
      <div className="p-4">
        <div className="text-lg pt-4 pb-4">
          HBYC Brass Monkeys Port Phillip Bay{' '}
          <a href="https://hbyc.org.au/race-documents">
            <span className="underline text-blue-500">PDF of courses</span>
          </a>{' '}
          listed below.
        </div>
        {courses.map((course) => {
          const to = `/view/${course.id}`
          return (
            <div key={course.id} className="p-1">
              <Link to={to}>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  {course.name}
                </button>
              </Link>
              {course.description.map((line, index) => {
                return <div key={index}>{line}</div>
              })}
            </div>
          )
        })}
      </div>
      <div className="text-gray-200 fixed bottom-0 right-0">Ver.{config.VERSION}</div>
    </Layout>
  )
}
