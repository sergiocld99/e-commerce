import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    value: {
      user: null,
      token: null,
      imageCamera: null
    }
  },
  reducers: {
    setUser: (state, action) => {
      state.value = {
        user: action.payload.data.email,
        token: action.payload.data.idToken,
        imageCamera: null
      }
    },
    clearUser: (state) => {
      state.value = {
        user: null,
        token: null,
        imageCamera: null
      }
    },
    setProfilePicture: (state, action) => {
      state.value = {
        ...state.value,
        imageCamera: action.payload
      }
    }
  }
})

// export actions
export const { setUser, clearUser, setProfilePicture } = authSlice.actions

export default authSlice.reducer