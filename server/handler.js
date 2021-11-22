const serverless = require('serverless-http')
const Routes = require('./routes/Routes')

const app = Routes.Initialize()

module.exports.handler = serverless(app)
