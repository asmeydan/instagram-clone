import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  open: false,
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state) => {
      state.open = true
    },
    closeModal: (state) => {
      state.open = false
    },
  },
})

// Action creators are generated for each case reducer function
export const { openModal, closeModal } = modalSlice.actions

export default modalSlice.reducer