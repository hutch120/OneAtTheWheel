import { useState } from 'react'
import { OneMap } from '../components/OneMap'
import { Layout } from './Layout'
import { useParams } from 'react-router-dom'
import { EMarkPassTo, GetCourse } from '../map/courses'
import { IMarkData } from '../map/marks'

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

  return (
    <Layout scrollContent={false} showMapFooter={true} course={course} mark={mark}>
      <div className="absolute z-10 top-40 left-2">
        {course.instructions.map((instruction, index) => {
          let color = 'bg-blue-500'
          let hover = 'hover:bg-blue-700'
          if (instruction.passTo === EMarkPassTo.port) {
            color = 'bg-red-500'
            hover = 'hover:bg-red-700'
          } else if (instruction.passTo === EMarkPassTo.starboard) {
            color = 'bg-green-500'
            hover = 'hover:bg-green-700'
          }
          return (
            <div key={index} className="p-1">
              <button
                onClick={() => {
                  setMark(instruction.mark)
                }}
                className={`${color} ${hover} text-white font-bold py-2 px-4 rounded`}
              >
                {index + 1} {instruction.mark.name}
              </button>
            </div>
          )
        })}
      </div>
      <OneMap course={course} mark={mark} setMark={setMark} />
    </Layout>
  )
}
