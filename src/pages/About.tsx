import { Layout } from './Layout'

export function About() {
  return (
    <Layout>
      <div className="p-5">
        <div className="p-2">
          Hi, my name is Simon Hutchison, I have been racing yachts on Port Phillip Bay for many
          years out of RYCV in Williamstown. I've also been building software for over 20 years,
          including a number of commercial mapping apps.
        </div>
        <div className="p-2">
          I discovered there is very little in the way of simple to use yacht racing apps so I built
          this application to support club racing. Please show your club members and race control
          officers and please get in contact to discuss adding your club racing courses.
        </div>
        <div className="p-2">
          Thanks for all the input and feedback from various RYCV racing teams and I hope to see
          more clubs get on board!
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
