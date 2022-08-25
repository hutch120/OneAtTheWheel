import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Landing } from './Landing'
import { ViewCourse } from './ViewCourse'
import { Pricing } from './Pricing'
import { About } from './About'

export function OneRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/landing" element={<Landing />} />
        <Route path="/home" element={<Landing />} />
        <Route path="/" element={<Landing />} />
        <Route path="/view/:courseId" element={<ViewCourse />} />
        <Route path="/view/:courseId/follow/:follow" element={<ViewCourse />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Landing />} />
      </Routes>
    </Router>
  )
}
