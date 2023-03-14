import { api } from "@lib/axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

export const loadPosts = createAsyncThunk('[POSTS Api Action]', async (_, { rejectWithValue }) => {
  try {
    return new Promise((resolve, reject) => reject('Heloo there'))
    const response = await api.get('posts')
    return response.data
  }
  catch (error: any) {
    console.log('rejected')
    rejectWithValue(error.message)
  }
})

export const getComments = createAsyncThunk('comments', async (postId: number) => {
  const response = await api.get(`posts/${postId}/comments`)
  return { postId, comments: response.data }
})