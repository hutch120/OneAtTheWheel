import { IMarkData } from '../map/marks'
import { ICourse } from '../map/courses'
import { EMarkPassTo } from '../map/courses'

interface IPickMark {
  course: ICourse
  setMark: React.Dispatch<React.SetStateAction<IMarkData | undefined>>
}

export function PickMark({ course, setMark }: IPickMark) {
  return (
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
  )
}
