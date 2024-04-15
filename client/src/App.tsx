import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/loginPage'
import HomePage from './pages/home'

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/home' element={<HomePage />} />
      </Routes>
    </Router>
  )
}

export default App
