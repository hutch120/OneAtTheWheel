const AWS = require('aws-sdk')

const bucket = 'one-at-the-wheel-data'

async function create ({ filename, data }) {
  const s3 = new AWS.S3()
  const params = {
    Body: JSON.stringify(data),
    Bucket: bucket,
    Key: filename
  }
  await s3.putObject(params).promise()
  try { // You should always catch your errors when using async/await
    const s3Response = await s3.putObject(params).promise()
    return { success: true, data: s3Response }
  } catch (error) {
    console.log('error', error)
    return { success: false, error }
  }
}

module.exports = {
  create
}
