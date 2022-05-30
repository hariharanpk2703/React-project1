import React from 'react'
import Navbar from './Components/Navbar'
import TourDetails from './Components/BlogContext'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Tourism from "./Components/Tourism"
import Fitness from './Components/Fitness'
import Technology from './Components/Technology'
import Bollywood from "./Components/Bollywood"
import Food from "./Components/Food"
import Home from './Components/Home'
import DataComponent from './Components/DataComponent'

const App = () => {
  return (
    <TourDetails>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Tourism" element={<Tourism />} />
          <Route path="/Fitness" element={<Fitness />} />
          <Route path="/Technology" element={<Technology />} />
          <Route path="/Bollywood" element={<Bollywood />} />
          <Route path="/Food" element={<Food />} />
          <Route path="/Technology/:id" element={<DataComponent />} />
          <Route path="/BollyWood/:id" element={<DataComponent />} />
          <Route path="/Tourism/:id" element={<DataComponent />} />
          <Route path="/Food/:id" element={<DataComponent />} />
          <Route path="/Fitness/:id" element={<DataComponent />} />
        </Routes>
      </Router>
    </TourDetails>

  )
}

export default App
