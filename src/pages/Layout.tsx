import { Header } from '../components/Header'
import { MapFooter } from '../components/MapFooter'
import { ICourse, IMarkData } from '../map/courses'

interface ILayout {
  children: JSX.Element | JSX.Element[]
  scrollContent?: boolean
  showMapFooter?: boolean
  course?: ICourse
  mark?: IMarkData
}

export function Layout({
  children,
  scrollContent = true,
  showMapFooter = false,
  course,
  mark
}: ILayout) {
  return (
    <div className="h-screen flex flex-col">
      <Header />

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

      {showMapFooter && course && <MapFooter course={course} mark={mark} />}
    </div>
  )
}
