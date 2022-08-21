import { useState, useEffect } from 'react'
import { Header } from '../components/Header'
import * as s3Utils from '../awsutils/s3Utils'

export function Landing() {
  const [courses, setCourses] = useState(null)

  async function listCourses() {
    const response = await s3Utils.listCourses()
    const _courses: any = []
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
    <div>
      <Header />
      <div className="p-5">
        <div>WIP: Pick a course...</div>
      </div>
      <div className="p-5">
        <div>
          This is a little project I wrote to assist in figuring out the marks for yacht racing on
          Port Phillip Bay. I've made it public, but I give no warrantee or fitness for any purpose.
          If you do like it, please let me know on LinkedIn. If you have a feature suggestion please
          add it to Github Issues.
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
