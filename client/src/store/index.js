import { configureStore } from '@reduxjs/toolkit'
import modalReducer from './reducers/modal'
import userReducer from "./reducers/user"
import postReducer from "./reducers/post"

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    user: userReducer,
    posts: postReducer,
  },
})