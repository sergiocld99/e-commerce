import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    value: {
      user: null,
      token: null,
      localId: null,
      imageCamera: null,
      locationFormatted: null,
    },
  },
  reducers: {
    setUser: (state, action) => {
      state.value = {
        ...state.value,
        user: action.payload.data.email,
        token: action.payload.data.idToken,
        localId: action.payload.data.localId
      };
    },
    clearUser: (state) => {
      state.value = {
        user: null,
        token: null,
        localId: null,
        imageCamera: null,
        locationFormatted: null,
      };
    },
    setProfilePicture: (state, action) => {
      state.value = {
        ...state.value,
        imageCamera: action.payload,
      };
    },
    setUserLocation: (state, action) => {
      state.value = {
        ...state.value,
        locationFormatted: action.payload,
      };
    },
  },
});

// export actions
export const { setUser, clearUser, setProfilePicture, setUserLocation } = authSlice.actions;

export default authSlice.reducer;
