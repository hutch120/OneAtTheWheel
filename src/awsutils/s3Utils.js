const AWS_LAMBDA_BASE_ENDPOINT = ' https://iu3n0mwne5.execute-api.ap-southeast-2.amazonaws.com'

export async function listCourses () {
  const response = await window.fetch(`${AWS_LAMBDA_BASE_ENDPOINT}/course/list`, { method: 'POST' })
  return await response.json()
}

export async function createCourse ({ name, data }) {
  const body = { name, data }

  const response = await window.fetch(`${AWS_LAMBDA_BASE_ENDPOINT}/course/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(body)
  })

  return await response.json()
}
