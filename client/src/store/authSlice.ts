import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { RootState } from './index'

interface LoginPayload {
  email: string
  password: string
}

export const login = createAsyncThunk(
  'auth/login',
  async (credentials: LoginPayload) => {
    const response = await axios.post(
      'http://localhost:3000/auth/login',
      credentials
    )
    return response.data
  }
)

interface AuthState {
  isAuthenticated: boolean
  name: string | null
  email: string | null
  id: string | null
}

const initialState: AuthState = {
  isAuthenticated: false,
  name: null,
  email: null,
  id: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      console.log(action)
      state.isAuthenticated = true
      state.name = action.payload.user.name
      state.email = action.payload.user.email
      state.id = action.payload.user.id
    })
  },
})

export const selectIsAuthenticated = (state: RootState) =>
  state.auth.isAuthenticated

export default authSlice.reducer
