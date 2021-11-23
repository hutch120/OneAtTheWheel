const AWS = require('aws-sdk')

const bucket = 'one-at-the-wheel-data'

async function createFile ({ filename, data }) {
  const s3 = new AWS.S3()
  const params = {
    Body: JSON.stringify(data),
    Bucket: bucket,
    Key: filename
  }
  try { // You should always catch your errors when using async/await
    const s3Response = await s3.putObject(params).promise()
    return { success: true, data: s3Response }
  } catch (error) {
    console.log('error', error)
    return { success: false, error }
  }
}

async function readFile ({ filename, data }) {
  const s3 = new AWS.S3()
  const params = {
    Bucket: bucket,
    Key: filename
  }
  try { // You should always catch your errors when using async/await
    const s3Response = await s3.getObject(params).promise()
    const bodyContentsString = s3Response.Body.toString('utf-8')
    const bodyContentsJSON = JSON.parse(bodyContentsString)
    return { success: true, data: bodyContentsJSON }
  } catch (error) {
    console.log('error', error)
    return { success: false, error }
  }
}

async function deleteFile ({ filename, data }) {
  const s3 = new AWS.S3()
  const params = {
    Bucket: bucket,
    Key: filename
  }
  try { // You should always catch your errors when using async/await
    const s3Response = await s3.deleteObject(params).promise()
    return { success: true, data: s3Response }
  } catch (error) {
    console.log('error', error)
    return { success: false, error }
  }
}

module.exports = {
  createFile,
  readFile,
  deleteFile
}
