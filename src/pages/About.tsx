import { Layout } from './Layout'

export function About() {
  return (
    <Layout>
      <div className="p-5">
        <div>
          I wrote this application to assist in attempting to assist in racing to marks for yacht
          racing on Port Phillip Bay. I've made it public, but I give no warrantee or fitness for
          any purpose. If you do like it, please let me know on LinkedIn. If you have a feature
          suggestion please add it to Github Issues.
        </div>
        <div className="pt-5 p-2">
          <a href="https://github.com/hutch120/OneAtTheWheel/blob/main/LICENSE">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              MIT Licence
            </button>
          </a>
        </div>
        <div className="p-2">
          <a href="https://github.com/hutch120/OneAtTheWheel">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Github Source Code
            </button>
          </a>
        </div>
        <div className="p-2">
          <a href="https://www.linkedin.com/in/simonhutchison1/">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              LinkedIn
            </button>
          </a>
        </div>
      </div>
    </Layout>
  )
}
