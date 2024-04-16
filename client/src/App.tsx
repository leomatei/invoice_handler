import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom'
import LoginPage from './pages/loginPage'
import HomePage from './pages/home'
import { useSelector } from 'react-redux'
import { RootState } from './store/index'

const App: React.FC = () => {
  const signIn = useSelector((state: RootState) => {
    return state.auth.isAuthenticated
  })
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route
          path='/home'
          element={signIn ? <HomePage /> : <Navigate replace to={'/'} />}
        />
      </Routes>
    </Router>
  )
}

export default App
