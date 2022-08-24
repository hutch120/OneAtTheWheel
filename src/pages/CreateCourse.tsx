import { Layout } from './Layout'

export function CreateCourse() {
  return (
    <Layout>
      <div className="p-5">
        <div>
          Like this project, want to create some awesome courses to use here? Get in contact, maybe
          throw in some funding.
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
