const CourseService = require('./CourseService')

async function getCourse ({ req }) {
  const name = req?.body?.name ?? ''
  return await CourseService.getCourse({ name })
}

module.exports = {
  getCourse
}
