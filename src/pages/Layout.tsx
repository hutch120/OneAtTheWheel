import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

interface ILayout {
  children: JSX.Element | JSX.Element[]
  scrollContent?: boolean
  showFooter?: boolean
}

export function Layout({ children, scrollContent = true, showFooter = false }: ILayout) {
  return (
    <div className="h-screen flex flex-col">
      <Header />

      {!scrollContent && <div className="flex-1 overflow-y-auto"> {children}</div>}
      {scrollContent && (
        <div className="flex-1 overflow-y-auto">
          <div className="relative">
            <div className="flex-grow flex flex-row overflow-hidden justify-center">
              <div className="flex-1 flex flex-col bg-white">{children}</div>
            </div>
          </div>
        </div>
      )}

      {showFooter && <Footer />}
    </div>
  )
}
