//
// Utility to download and update local files on client projects wtih the Bluetrack map built component.
// Note the build occurs using a yaml file which runs on Github and saves the files to an S3 bucket which is
// served at https://bluetrack.hutchisonsoftware.com.au/docs
//
// Assumes directory structure is
// root -|
//       |- bluetrack
//       |- node_modules
//       |- src <<< typically for React Apps.
//
// Usage:
//   cd bluetrack
//   node update.js
//

const urls = [
  'https://bluetrack.hutchisonsoftware.com.au/component/BlueTrackMap.js',
  'https://bluetrack.hutchisonsoftware.com.au/component/package.json'
]

const https = require('https')
const fs = require('fs')

const download = function (url, dest, cb) {
  const file = fs.createWriteStream(dest)
  const res = { url, dest, success: false, error: '' }
  https.get(url, function (response) {
    response.pipe(file)
    file.on('finish', function () {
      res.success = true
      file.close(() => cb(res)) // close() is async, call cb after close completes.
    })
  }).on('error', function (err) { // Handle errors
    fs.unlink(dest) // Delete the file async. (But we don't check the result)
    res.success = false
    res.error = err.message
    if (cb) cb(res)
  })
}

function done(res) {
  if (res.success) {
    console.log('[', res.dest, 'OK ]', res.error)
  } else {
    console.log('[', res.dest, 'FAILED ]', res.error)
  }
}

urls.map(url => {
  const urlBits = url.split('/')
  const dest = urlBits[urlBits.length - 1]
  return download(url, dest, done)
})

// And update the node_modules version
urls.map(url => {
  const urlBits = url.split('/')
  const dest = '../node_modules/bluetrack/' + urlBits[urlBits.length - 1]
  return download(url, dest, done)
})
