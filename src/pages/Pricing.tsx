import { intersectsSegment } from 'ol/extent'
import { Layout } from './Layout'

function Buy() {
  return (
    <div className="text-center">
      <a href="https://www.linkedin.com/in/simonhutchison1/">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Contact Us
        </button>
      </a>
    </div>
  )
}
interface IFeature {
  description: string
}
function Feature({ description }: IFeature) {
  return (
    <li className="mb-4 flex items-center">
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="check"
        className="text-green-600 w-4 h-4 mr-2"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path
          fill="currentColor"
          d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
        ></path>
      </svg>
      {description}
    </li>
  )
}

const tier1 = [
  {
    description: 'Courses x 10'
  },
  {
    description: 'Course Updates x 1 (per year)'
  }
]

const tier2 = [
  {
    description: 'Courses x 50'
  },
  {
    description: 'Updates x 20 (per year)'
  },
  {
    description: 'Logo'
  },
  {
    description: 'Club description'
  },
  {
    description: 'Domain (clubname.oatw.net)'
  }
]

const tier3 = [
  {
    description: 'Courses x 200'
  },
  {
    description: 'Updates x 50 (per year)'
  },
  {
    description: 'Logo'
  },
  {
    description: 'Club description'
  },
  {
    description: 'Domain (clubname.oatw.net)'
  },
  {
    description: 'Club Login'
  },
  {
    description: 'Communications (MOTD)'
  },
  {
    description: 'Private courses'
  }
]

const tier4 = [
  {
    description: 'Unlimited Courses (club managed)'
  },
  {
    description: 'Unlimited Updates (club managed)'
  },
  {
    description: 'Logo'
  },
  {
    description: 'Club description'
  },
  {
    description: 'Domain (clubname.oatw.net)'
  },
  {
    description: 'Club Login'
  },
  {
    description: 'Communications (MOTD)'
  },
  {
    description: 'Private courses'
  },
  {
    description: 'Usage tracking'
  },
  {
    description: 'WIP: Real time boat tracking (while using app)'
  }
]

export function Pricing() {
  return (
    <Layout>
      <div className="container my-24 px-6 mx-auto">
        <section className="mb-32 text-gray-800">
          <h2 className="text-3xl font-bold text-center mb-12">Pricing</h2>

          <div className="grid lg:grid-cols-3 gap-6 lg:gap-x-12">
            <div className="mb-6 lg:mb-0">
              <div className="block rounded-lg shadow-lg bg-white h-full">
                <div className="p-6 border-b border-gray-300 text-center">
                  <p className="uppercase mb-4 text-sm">
                    <strong>Local Racing</strong>
                  </p>
                  <h3 className="text-2xl mb-6">
                    <strong>$ 500</strong>
                    <small className="text-gray-500 text-sm">/year</small>
                  </h3>

                  <Buy />
                </div>
                <div className="p-6">
                  <ol className="list-inside">
                    {tier1.map((item) => {
                      return <Feature key={item.description} description={item.description} />
                    })}
                  </ol>
                </div>
              </div>
            </div>

            <div className="mb-6 lg:mb-0">
              <div className="block rounded-lg shadow-lg bg-white h-full">
                <div className="p-6 border-b border-gray-300 text-center">
                  <p className="uppercase mb-4 text-sm">
                    <strong>Club Racing</strong>
                  </p>
                  <h3 className="text-2xl mb-6">
                    <strong>$ 2000</strong>
                    <small className="text-gray-500 text-sm">/year</small>
                  </h3>
                  <Buy />
                </div>
                <div className="p-6">
                  <ol className="list-inside">
                    {tier2.map((item) => {
                      return <Feature key={item.description} description={item.description} />
                    })}
                  </ol>
                </div>
              </div>
            </div>

            <div className="mb-6 lg:mb-0">
              <div className="block rounded-lg shadow-lg bg-white h-full">
                <div className="p-6 border-b border-gray-300 text-center">
                  <p className="uppercase mb-4 text-sm">
                    <strong>Race Control</strong>
                  </p>
                  <h3 className="text-2xl mb-6">
                    <strong>$ 4000</strong>
                    <small className="text-gray-500 text-sm">/year</small>
                  </h3>
                  <Buy />
                </div>
                <div className="p-6">
                  <ol className="list-inside">
                    {tier3.map((item) => {
                      return <Feature key={item.description} description={item.description} />
                    })}
                  </ol>
                </div>
              </div>
            </div>

            <div className="mb-6 lg:mb-0">
              <div className="block rounded-lg shadow-lg bg-white h-full">
                <div className="p-6 border-b border-gray-300 text-center">
                  <p className="uppercase mb-4 text-sm">
                    <strong>Race Control w/ Analytics</strong>
                  </p>
                  <h3 className="text-2xl mb-6">
                    <strong>$ 8000</strong>
                    <small className="text-gray-500 text-sm">/year</small>
                  </h3>
                  <Buy />
                </div>
                <div className="p-6">
                  <ol className="list-inside">
                    {tier4.map((item) => {
                      return <Feature key={item.description} description={item.description} />
                    })}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
