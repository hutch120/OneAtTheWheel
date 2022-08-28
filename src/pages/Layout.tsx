import { Header } from '../components/Header'
import { GeoDetails } from '../components/GeoDetails'
import { ICourse } from '../map/courses'
import { IMarkData } from '../map/marks'

interface ILayout {
  children: JSX.Element | JSX.Element[]
  scrollContent?: boolean
  showMapFooter?: boolean
  showMapHeaderMenu?: boolean
  course?: ICourse
  mark?: IMarkData
}

export function Layout({
  children,
  scrollContent = true,
  showMapFooter = false,
  showMapHeaderMenu = true,
  course,
  mark
}: ILayout) {
  return (
    <div className="h-screen flex flex-col">
      <Header showMenu={showMapHeaderMenu} />

      {!scrollContent && <div className="flex-1 overflow-y-auto">{children}</div>}
      {scrollContent && (
        <div className="flex-1 overflow-y-auto">
          <div className="relative">
            <div className="flex-grow flex flex-row overflow-hidden justify-center">
              <div className="flex-1 flex flex-col bg-white">{children}</div>
            </div>
          </div>
        </div>
      )}

      {showMapFooter && course && <GeoDetails course={course} mark={mark} />}
    </div>
  )
}
