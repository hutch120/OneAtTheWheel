const express = require('express')
const cors = require('cors')

// Seperate API routes from business logic
const CourseRoutes = require('../course/CourseRoutes')

// Must pass back an object
// Must include { success: true | false } at minimum.
// See ret.js for more details.
const ret = require('./ret').ret

module.exports.Initialize = function () {
  const server = express()
  server.use(cors())
  server.use(express.json())

  // # Course
  server.post('/course/create', async (req, res) => await ret({ res, req, func: CourseRoutes.createCourse }))
  server.post('/course/read', async (req, res) => await ret({ res, req, func: CourseRoutes.readCourse }))
  server.post('/course/update', async (req, res) => await ret({ res, req, func: CourseRoutes.updateCourse }))
  server.post('/course/delete', async (req, res) => await ret({ res, req, func: CourseRoutes.deleteCourse }))

  // Must be after all other routes.
  // Catch all
  server.use((req, res, next) => { return res.status(404).json({ success: false, error: 'Not Found' }) })

  return server
}
