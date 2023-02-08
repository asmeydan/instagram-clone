import { configureStore } from '@reduxjs/toolkit'
import modalReducer from './reducers/modal'
import userReducer from "./reducers/user"

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    user: userReducer
  },
})