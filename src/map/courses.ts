export enum EMarkPassTo {
  port = 'port',
  starboard = 'starboard',
  northerly = 'northerly',
  easterly = 'easterly',
  southerly = 'southerly',
  westerly = 'westerly'
}

interface IMark {
  id: string
  name: string
  lon: number
  lat: number
}

export interface ICourse {
  id: string
  name: string
  description: string[]
  instructions: {
    mark: IMark
    passTo: EMarkPassTo
  }[]
}

// https://hbyc.org.au/race-documents
// Marks: https://img1.wsimg.com/blobby/go/441ac53e-28ec-426d-ae66-90bed6b6b56d/downloads/SI%202021-22%20-%20Attachment%201%2C%20Marks%20-%203%20June%202022.pdf?ver=1660718264224
// Courses: https://img1.wsimg.com/blobby/go/441ac53e-28ec-426d-ae66-90bed6b6b56d/downloads/SI%202021-22%20-%203%20June%202022%20-%20App%20F.pdf?ver=1660718264224

// https://coordinateconverter.org/
const marks = {
  hybc_ch74: {
    id: 'hybc_ch74',
    name: 'Channel 74 (Ch74)',
    lon: 144.928,
    lat: -37.855
  },
  hybc_v: {
    id: 'hybc_v',
    name: 'V Mark (Volvo Finish mark)',
    lon: 144.925,
    lat: -37.863333
  },
  hybc_r4: {
    id: 'r4',
    name: 'R4 Yellow Buoy',
    lon: 144.922667,
    lat: -37.845
  }
}

const courses: ICourse[] = [
  {
    id: 'hbyc-course-1',
    name: 'Course No.1 (Southerly) Approximately 7.1 nautical miles',
    description: [
      'Start/Finish: Vicinity of Ch.74',
      'Start - Mark V to port - Ch.74 to port - R4 to port - Mark V to port - Ch.74 to port - R4 to port - Mark V to port - R4 to port - finish.'
    ],
    instructions: [
      {
        mark: marks.hybc_ch74,
        passTo: EMarkPassTo.southerly
      },
      {
        mark: marks.hybc_v,
        passTo: EMarkPassTo.port
      }
    ]
  },
  {
    id: 'hbyc-course-2',
    name: 'Course No. 2 (Northerly) Approximately 7.1 nautical miles',
    description: [
      'Start/Finish: Vicinity of Ch.74',
      'Start - R4 to starboard, Ch.74 to starboard - Mark V to starboard - R4 to starboard - Ch.74 to starboard - Mark V to starboard - R4 to starboard - Mark V to starboard - finish.'
    ],
    instructions: [
      {
        mark: marks.hybc_ch74,
        passTo: EMarkPassTo.northerly
      },
      {
        mark: marks.hybc_r4,
        passTo: EMarkPassTo.port
      }
    ]
  }
]

// Intent is this will load courses from S3 eventually
export function GetCourses(): ICourse[] {
  return courses
}

export function GetCourse(courseId: string): ICourse | null {
  for (let i = 0; i < courses.length; i++) {
    const course = courses[i]
    if (course.id === courseId) {
      return course
    }
  }
  return null
}
