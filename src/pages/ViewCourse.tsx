import { OneMap, IOneMap } from '../components/OneMap'
import { Layout } from './Layout'

export function ViewCourse() {
  const mapOptions: IOneMap = {
    center: {
      lon: 144.9125673219142,
      lat: -37.99704788855863
    },
    zoom: 10
  }

  return (
    <Layout scrollContent={false} showFooter={true}>
      <OneMap {...mapOptions} />
    </Layout>
  )
}
