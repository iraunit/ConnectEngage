import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../../components/home'
import Login from '../../components/login'
import './index.css'
import { Footer } from '../../components/social'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/pages/popup/index.html" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App
