import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchMedia } from '../api/mediaApi'

export const loadMedia = createAsyncThunk(
  'media/fetchMedia',
  async (_, { rejectWithValue }) => {
    try {
      return await fetchMedia()
    } catch (error) {
      return rejectWithValue(error.message)
    }
  },
)

const initialState = {
  items: [],
  status: 'idle',
  error: null,
}

const mediaSlice = createSlice({
  name: 'media',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadMedia.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(loadMedia.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.items = action.payload
      })
      .addCase(loadMedia.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.payload || 'Something went wrong'
      })
  },
})

export default mediaSlice.reducer
