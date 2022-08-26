// https://hbyc.org.au/race-documents
// Marks: https://img1.wsimg.com/blobby/go/441ac53e-28ec-426d-ae66-90bed6b6b56d/downloads/SI%202021-22%20-%20Attachment%201%2C%20Marks%20-%203%20June%202022.pdf?ver=1660718264224
// https://coordinateconverter.org/

export interface ICategoriesData {
  id: string
  name: string
  description: string[]
}

interface ICategories {
  [key: string]: ICategoriesData
}

export const categories: ICategories = {
  hybc_division_1: {
    id: 'hybc_division_1',
    name: 'HYBC Division 1',
    description: ['DIVISION 1 (incl. Measurement Cup) Courses']
  },
  hybc_division_2: {
    id: 'hybc_division_2',
    name: 'HYBC Division 2',
    description: ['DIVISION 2 and 3 (OD/S80/Diamonds and Pursuit) Courses']
  },
  hybc_short_courses: {
    id: 'hybc_short_courses',
    name: 'HYBC Short Courses',
    description: ['Sort Courses']
  }
}
