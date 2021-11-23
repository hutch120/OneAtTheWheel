const CourseService = require('./CourseService')

async function listCourses ({ req }) {
  return await CourseService.listCourses()
}

async function createCourse ({ req }) {
  const name = req?.body?.name ?? ''
  const data = req?.body?.data ?? {}
  return await CourseService.createCourse({ name, data })
}

async function readCourse ({ req }) {
  const name = req?.body?.name ?? ''
  return await CourseService.readCourse({ name })
}

async function updateCourse ({ req }) {
  const name = req?.body?.name ?? ''
  const data = req?.body?.data ?? ''
  return await CourseService.updateCourse({ name, data })
}

async function deleteCourse ({ req }) {
  const name = req?.body?.name ?? ''
  return await CourseService.deleteCourse({ name })
}

module.exports = {
  listCourses,
  createCourse,
  readCourse,
  updateCourse,
  deleteCourse
}
