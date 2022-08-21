import { useState } from 'react'
import { Header } from '../components/Header'
import { SelectBox, ISelectBoxItem } from '../components/SelectBox'
import { Link } from 'react-router-dom'

const testCourses: ISelectBoxItem[] = [
  {
    key: '',
    value: 'Select a course...',
    item: {}
  },
  {
    key: '1',
    value: 'Course 1',
    item: {
      marks: []
    }
  },
  {
    key: '2',
    value: 'Course 2',
    item: {
      marks: []
    }
  }
]

export function Landing() {
  const [courses] = useState<ISelectBoxItem[]>(testCourses)
  const [course, setCourse] = useState<ISelectBoxItem>({
    key: '',
    value: 'Loading courses, please wait...',
    item: {}
  })

  const bCourseSelected = course?.key !== ''
  const selectedCourseUrl = `/view/${course?.key}`

  return (
    <div>
      <Header />
      <div className="pl-5 pr-5 pt-5 max-w-sm">
        {courses && (
          <SelectBox
            title=""
            description=""
            updateState={setCourse}
            item={course}
            options={courses}
          />
        )}
      </div>
      <div className="p-5">
        <Link to={selectedCourseUrl}>
          {bCourseSelected && (
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              View Course
            </button>
          )}
        </Link>
      </div>
      <div className="p-5">
        <div>
          The goal of this project is to assist in navigating to marks, in particular for yacht
          racing on Port Phillip Bay. It might be useful for other usecases, that's why I've made it
          public, but I give no warrantee or fitness for any purpose. If you do like it, please let
          me know on LinkedIn. If you have a feature suggestion please add it to Github Issues.
        </div>
        <div className="pt-5 p-2">
          <a href="https://github.com/hutch120/OneAtTheWheel/blob/main/LICENSE">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              MIT Licence
            </button>
          </a>
        </div>
        <div className="p-2">
          <a href="https://github.com/hutch120/OneAtTheWheel">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Github Source Code
            </button>
          </a>
        </div>
        <div className="p-2">
          <a href="https://www.linkedin.com/in/simonhutchison1/">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              LinkedIn
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}
