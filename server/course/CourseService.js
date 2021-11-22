const s3 = require('../awsutils/s3')

async function getCourse ({ name }) {
  if (!name || name === '') return { success: false }
  const response = s3.create({ filename: 'test123.json', data: { test: 'abc' } })
  if (response.success) {
    return { success: true, data: name }
  } else {
    return { success: false, message: 'Failed to create file on AWS S3.' }
  }
}

module.exports = {
  getCourse
}
