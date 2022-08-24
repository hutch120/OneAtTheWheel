import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

interface ILayout {
  children: JSX.Element | JSX.Element[]
}

export function Layout({ children }: ILayout) {
  return (
    <div className="h-screen flex flex-col">
      <Header />

      <div className="flex-1 overflow-y-auto">
        <div className="relative">
          <div className="flex-grow flex flex-row overflow-hidden justify-center">
            <div className="flex-1 flex flex-col bg-white">{children}</div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
