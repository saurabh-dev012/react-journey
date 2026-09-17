import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchMedia } from '../api/mediaApi'

export const loadMedia = createAsyncThunk(
  'media/fetchMedia',
  async ({ type = 'photos', query = 'nature' }, { rejectWithValue }) => {
    try {
      const items = await fetchMedia(type, query)
      return { type, query, items }
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.error || error.message || 'Something went wrong',
      )
    }
  },
)

const initialState = {
  query: 'nature',
  type: 'photos',
  items: [],
  status: 'idle',
  error: null,
}

const mediaSlice = createSlice({
  name: 'media',
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload
    },
    setType: (state, action) => {
      state.type = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadMedia.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(loadMedia.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.query = action.payload.query
        state.type = action.payload.type
        state.items = action.payload.items
      })
      .addCase(loadMedia.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.payload || 'Something went wrong'
      })
  },
})

export const { setQuery, setType } = mediaSlice.actions
export default mediaSlice.reducer
