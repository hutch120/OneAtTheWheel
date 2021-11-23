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
    it('should not create course data for invalid name', async () => {
      const response = await request(server).post('/course/create').send()
      expect(response.body.success).toBe(false)
    })
    it('should not create course data for empty name', async () => {
      const response = await request(server).post('/course/create').send({ name: '' })
      expect(response.body.success).toBe(false)
    })
    it('should create course file', async () => {
      const response = await request(server).post('/course/create').send({ name: 'test', data: { foo: 'bar' } })
      expect(response.body.success).toBe(true)
    })

    it('should not get course data for invalid name', async () => {
      const response = await request(server).post('/course/read').send()
      expect(response.body.success).toBe(false)
    })
    it('should not get course data for empty name', async () => {
      const response = await request(server).post('/course/read').send({ name: '' })
      expect(response.body.success).toBe(false)
    })
    it('should get course data', async () => {
      const response = await request(server).post('/course/read').send({ name: 'test' })
      expect(response.body.data.foo).toBe('bar')
    })

    it('should not update course data for invalid name', async () => {
      const response = await request(server).post('/course/update').send()
      expect(response.body.success).toBe(false)
    })
    it('should not update course data for empty name', async () => {
      const response = await request(server).post('/course/update').send({ name: '' })
      expect(response.body.success).toBe(false)
    })
    it('should update course data', async () => {
      const response = await request(server).post('/course/update').send({ name: 'test', data: { foo: 'bar2' } })
      expect(response.body.success).toBe(true)
    })

    it('should list courses', async () => {
      const response = await request(server).post('/course/list').send()
      expect(response.body.success).toBe(true)
    })

    it('should not delete course data for invalid name', async () => {
      const response = await request(server).post('/course/delete').send()
      expect(response.body.success).toBe(false)
    })
    it('should not delete course data for empty name', async () => {
      const response = await request(server).post('/course/delete').send({ name: '' })
      expect(response.body.success).toBe(false)
    })
    it('should delete course data', async () => {
      const response = await request(server).post('/course/delete').send({ name: 'test' })
      expect(response.body.success).toBe(true)
    })
  })
})
