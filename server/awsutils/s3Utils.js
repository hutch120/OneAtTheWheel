const AWS = require('aws-sdk')

const bucket = 'one-at-the-wheel-data'

async function listFiles () {
  const s3 = new AWS.S3()
  const listParams = {
    Bucket: bucket
    // Prefix: '' // add file filter if required ... maybe we could have something like public- ??
  }
  try { // You should always catch your errors when using async/await
    const listedObjects = await s3.listObjectsV2(listParams).promise()
    console.log('listedObjects', listedObjects)
    return { success: true, data: listedObjects }
    /* if (listedObjects.Contents.length > 0) {
      listedObjects.Contents.forEach(({ Key }) => {
        deleteParams.Delete.Objects.push({ Key })
      })
    } */
  } catch (error) {
    console.log('error', error)
    return { success: false, error }
  }
}

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

async function updateFile ({ filename, data }) {
  return await createFile({ filename, data })
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
  listFiles,
  createFile,
  readFile,
  updateFile,
  deleteFile
}
