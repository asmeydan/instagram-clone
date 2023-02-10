import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user:  null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginState: (state, action) => {
      state.user = action.payload.user;
      localStorage.setItem("auth", JSON.stringify(action.payload));
    },
    registerState: (state, action) => {
      state.user = action.payload.createdUser
      localStorage.setItem("auth", JSON.stringify(action.payload));
    },
    logoutState: (state)=> {
        state.user = null;
        localStorage.clear();
    },
    setUserState: (state, action)=> {
      console.log(state.user)
      state.user = action.payload?.user
      console.log(state.user)
    },
  },
})

// Action creators are generated for each case reducer function
export const { loginState, registerState, logoutState, setUserState } = userSlice.actions

export default userSlice.reducer