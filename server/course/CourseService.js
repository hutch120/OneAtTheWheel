async function getCourse ({ name }) {
  if (!name || name === '') return { success: false }
  return { success: true, data: name }
}

module.exports = {
  getCourse
}
