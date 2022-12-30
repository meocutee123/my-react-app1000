import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import api from '@api/axios'
import { RootState } from "@store/index"
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

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    increment: state => {
      console.log(state.loading)
    }
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

export const { increment } = pokemonSlice.actions

export const selectPokemon = (state: RootState) => state.pokemon.collection

export default pokemonSlice.reducer