import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  message: "Hello world"
}

export const applicationSlice = createSlice({
  name: 'application',
  initialState,
  reducers: {
    changeMessage: {
      reducer: (state, action) => {
        state.message = action.payload.message
      },
      prepare: (message) => {
        return {
          message
        }
      }
    }
  }
})

export const { changeMessage } = applicationSlice.actions

export default applicationSlice.reducer
