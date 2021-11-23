const s3Utils = require('../awsutils/s3Utils')

async function createCourse ({ name, data }) {
  if (!name || name === '') return { success: false }
  const filename = `${name}.json`
  const response = await s3Utils.createFile({ filename, data })
  if (response.success) {
    return { success: true }
  } else {
    return { success: false, message: 'Failed to create course on AWS S3.' }
  }
}

async function readCourse ({ name }) {
  if (!name || name === '') return { success: false }
  const filename = `${name}.json`
  const response = await s3Utils.readFile({ filename })
  if (response.success) {
    return { success: true, data: response.data }
  } else {
    return { success: false, message: 'Failed to read file from AWS S3.' }
  }
}

async function updateCourse ({ name }) {
  return await createCourse({ name })
}

async function deleteCourse ({ name }) {
  if (!name || name === '') return { success: false }
  const filename = `${name}.json`
  const response = await s3Utils.deleteFile({ filename })
  if (response.success) {
    return { success: true }
  } else {
    return { success: false, message: 'Failed to delete course from AWS S3.' }
  }
}

module.exports = {
  createCourse,
  readCourse,
  updateCourse,
  deleteCourse
}
