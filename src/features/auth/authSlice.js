import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    value: {
      user: null,
      token: null
    }
  },
  reducers: {
    setUser: (state, action) => {
      state.value = {
        user: action.payload.data.email,
        token: action.payload.data.idToken
      }
    },
    clearUser: (state) => {
      state.value = {
        user: null,
        token: null
      }
    }
  }
})

// export actions
export const { setUser, clearUser } = authSlice.actions

export default authSlice.reducer