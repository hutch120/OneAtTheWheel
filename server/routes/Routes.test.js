/* eslint-env jest */
const AWS = require('aws-sdk')
const request = require('supertest')
const secrets = require('../secrets.js')

describe('Routes', () => {
  const Routes = require('./Routes')
  const server = Routes.Initialize()

  beforeAll(async () => {
    const accessKeyId = secrets?.AWS_ACCESS_KEY_ID ?? ''
    const secretAccessKey = secrets?.AWS_SECRET_ACCESS_KEY ?? ''
    const region = 'ap-southeast-2'
    const awsConfig = { accessKeyId, secretAccessKey, region }
    // console.log('awsConfig', awsConfig)
    AWS.config.update(awsConfig)
  })

  describe('Routes General', () => {
    it('should return 404', async () => {
      const response = await request(server).post('/invalid-route').send()
      expect(response.body.success).toBe(false)
    })
  })

  describe('Course Routes', () => {
    it('should fail to get course data for invalid request', async () => {
      const response = await request(server).post('/getcourse').send()
      expect(response.body.success).toBe(false)
    })
    it('should fail to get course data for empty name', async () => {
      const response = await request(server).post('/getcourse').send({ name: '' })
      expect(response.body.success).toBe(false)
    })
    it('should get course data', async () => {
      const response = await request(server).post('/getcourse').send({ name: 'test' })
      expect(response.body.success).toBe(true)
    })
  })
})
