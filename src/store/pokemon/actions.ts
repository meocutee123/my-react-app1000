import { api } from "@lib/axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

export const fetchPokemon = createAsyncThunk('pokemon', async () => {
  const { data } = await api.get('pokemon')
  return data.results
})