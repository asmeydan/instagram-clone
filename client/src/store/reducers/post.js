import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  posts:  [],
}

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.posts = [...state.posts, action.payload];
    },
    allPostsState: (state, action) => {
        state.posts = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { addPost, allPostsState } = postsSlice.actions

export default postsSlice.reducer