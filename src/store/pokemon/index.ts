import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import api from '@api/axios'
interface PokemonState {
  collection: any[],
  loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}

const initialState: PokemonState = {
  collection: [],
  loading: 'idle'
}
export const fetchPokemon = createAsyncThunk('pokemon', async () => {
  const { data } = await api.get('pokemon')
  return data.results
})

export const pokemon = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    increment: () => console.log('increment'),
    decrement: () => console.log('decrement'),
    loadPokemon: state => { state.loading = 'pending' }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPokemon.pending, state => { state.loading = 'pending' })
    builder.addCase(fetchPokemon.fulfilled, (state, { payload }) => {
      state.loading = 'succeeded'
      state.collection = payload
    })
    builder.addCase(fetchPokemon.rejected, (state) => { state.loading = 'failed' })
  }
})

export const { increment, decrement, loadPokemon } = pokemon.actions

export default pokemon.reducer