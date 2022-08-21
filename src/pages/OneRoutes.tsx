import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Landing } from './Landing'
import { ViewCourse } from './ViewCourse'
import { CreateCourse } from './CreateCourse'
import { About } from './About'

export function OneRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/landing" element={<Landing />} />
        <Route path="/home" element={<Landing />} />
        <Route path="/" element={<Landing />} />
        <Route path="/view/:course" element={<ViewCourse />} />
        <Route path="/new" element={<CreateCourse />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Landing />} />
      </Routes>
    </Router>
  )
}
