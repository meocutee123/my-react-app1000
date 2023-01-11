import { api } from "@lib/axios"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

interface IBlog {
  posts: any[],
  comments: any[],
  albums: any[],
  photos: any[],
  todos: any[],
  users: any[],
  loading: 'idle' | 'pending' | 'succeeded' | 'failed'
  error: string
}

const initialState: IBlog = {
  posts: [],
  comments: [],
  albums: [],
  photos: [],
  todos: [],
  users: [],
  loading: 'idle',
  error: ''
}

export const loadPosts = createAsyncThunk('post', async (_, {dispatch, getState, extra}) => {
  const response = await api.get('posts')
  return response.data
})

export const getComments = createAsyncThunk('comments', async (postId: number) => {
  const response = await api.get(`posts/${postId}/comments`)
  return { postId, comments: response.data }
})

export const slice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    loadBlog: (state) => { state.loading = 'pending' }
  },
  extraReducers: (builder) => {
    builder.addCase(loadPosts.pending, state => { state.loading = 'pending' })

    builder.addCase(loadPosts.fulfilled, (state, { payload }) => {
      state.posts = payload
      state.loading = 'succeeded'
    })

    builder.addCase(loadPosts.rejected, (state, { error }) => {
      state.error = error.message || ''
      state.loading = 'failed'
    })

    builder.addCase(getComments.pending, state => { state.loading = 'pending' })

    builder.addCase(getComments.fulfilled, (state, { payload }) => {
      const post = state.posts.find(x => x.id === payload.postId)
      if(post) post.comments = payload.comments

      state.loading = 'succeeded'
    })

    builder.addCase(getComments.rejected, (state, { error }) => {
      state.error = error.message || ''
      state.loading = 'failed'
    })

  }
})

export default slice.reducer