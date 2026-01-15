import React from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import About from './pages/AboutUs'
import Courses from './pages/Courses'
import Admission from './pages/Admission'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pages/about-us' element={<About />} />
        <Route path='/pages/admission' element={<Admission />} />
        <Route path='/pages/courses' element={<Courses />} />
      </Routes>
    </div>
  )
}

export default App