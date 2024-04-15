import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ThunkDispatch, UnknownAction } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { login } from '../../store/authSlice'

const LoginPage: React.FC = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch<ThunkDispatch<unknown, unknown, UnknownAction>>()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    dispatch(login({ email, password })).then(() => navigate('/home'))
  }

  return (
    <div>
      <h2>Login</h2>
      <div>
        <label htmlFor='email'>Email:</label>
        <input
          type='text'
          id='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor='password'>Password:</label>
        <input
          type='password'
          id='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default LoginPage
