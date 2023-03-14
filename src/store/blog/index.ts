import { createSlice } from "@reduxjs/toolkit"
import { getComments, loadPosts } from "./actions"

interface BlogStateInterface {
  posts: any[],
  comments: any[],
  loading: 'idle' | 'pending' | 'failed'
  error: string | undefined
}

const initialState: BlogStateInterface = {
  posts: [],
  comments: [],
  loading: 'idle',
  error: undefined
}

export const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadPosts.pending, state => ({ ...state, loading: 'pending' }))
    builder.addCase(loadPosts.fulfilled, (state, { payload }) => ({ ...state,  loading: 'idle', posts: payload }))
    builder.addCase(loadPosts.rejected, (state, { error }) => ({ ...state, loading: 'failed', error: error.message }))

    builder.addCase(getComments.pending, state => ({ ...state, loading: 'pending' }))
    builder.addCase(getComments.fulfilled, (state, { payload }) => {
      const post = state.posts.find(x => x.id === payload.postId)
      if (post) post.comments = payload.comments

      state.loading = 'idle'
    })
    builder.addCase(getComments.rejected, (state, { error }) => ({ ...state, loading: 'idle', error: error.message }))

  }
})

export default blogSlice.reducer